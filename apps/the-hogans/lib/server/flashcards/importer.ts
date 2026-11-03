// Bulk imports: Anki-format CSV (the web page and API keys both post the
// raw file here) and batches of notes the browser has read out of an Anki
// .apkg package. Existing notes are matched by guid, or else by note type
// and first field, and then updated, skipped or duplicated.
import type { InStatement } from '@libsql/client';

import { getDb } from '../db';
import { ensureDeck, getDeck } from './decks';
import { addNotes, createNoteType, ImportedSchedule, listNoteTypes, NewNote, syncCards } from './notes';
import { HttpError } from './route';
import { chunk, noteFromRow, noteText, placeholders, tagsColumn } from './rows';
import { csvNotes, mapToFields, parseCsv } from '../../../components/flashcards/csv';
import { newSchedule } from '../../../components/flashcards/scheduler';
import { stripHtml } from '../../../components/flashcards/template';
import {
  AnkiNote,
  AnkiNoteType,
  DupeMode,
  ImportSummary,
  Note,
  NoteType,
} from '../../../components/flashcards/types';

export type { AnkiNote, AnkiNoteType, DupeMode };

const MAX_ERRORS = 25;

interface Pending {
  type: NoteType;
  deckId: string;
  fields: string[];
  tags: string[];
  guid: string | null;
  schedules?: Map<number, ImportedSchedule>;
  cardDecks?: Map<number, string>;
  label: string;
}

const firstFieldKey = (typeId: string, field: string) => `${typeId}\u0000${stripHtml(field).toLowerCase()}`;

/** Adds, updates or skips each pending note against what's already saved. */
async function apply(owner: string, pending: Pending[], dupes: DupeMode, summary: ImportSummary) {
  const db = getDb();
  const typeIds = Array.from(new Set(pending.map((p) => p.type.id)));
  const byGuid = new Map<string, Note>();
  const byFirst = new Map<string, Note>();
  if (typeIds.length && dupes !== 'add') {
    const existing = await db.execute({
      sql: `SELECT * FROM fc_notes WHERE owner = ? AND note_type_id IN (${placeholders(typeIds.length)})`,
      args: [owner, ...typeIds],
    });
    for (const r of existing.rows) {
      const note = noteFromRow(r);
      byGuid.set(r.guid as string, note);
      byFirst.set(firstFieldKey(note.noteTypeId, note.fields[0] ?? ''), note);
    }
  }
  // Guids are unique per person, so a duplicate gets a new one.
  const takenGuids = dupes === 'add'
    ? new Set(
        (await db.execute({ sql: 'SELECT guid FROM fc_notes WHERE owner = ?', args: [owner] })).rows.map(
          (r) => r.guid as string,
        ),
      )
    : new Set<string>();

  const toAdd: NewNote[] = [];
  const toAddLabels: string[] = [];
  const updates: InStatement[] = [];
  const updatedByType = new Map<string, Note[]>();
  const seenInFile = new Set<string>();

  for (const p of pending) {
    const key = firstFieldKey(p.type.id, p.fields[0] ?? '');
    const match = dupes === 'add' ? undefined : (p.guid ? byGuid.get(p.guid) : undefined) ?? byFirst.get(key);
    if (match) {
      if (dupes === 'skip' || match.noteTypeId !== p.type.id) {
        summary.skipped++;
        continue;
      }
      const tags = Array.from(new Set([...match.tags, ...p.tags]));
      const text = noteText(p.type, p.fields);
      updates.push({
        sql: `UPDATE fc_notes SET fields = ?, tags = ?, sort_text = ?, search_text = ?, updated_at = ?
              WHERE owner = ? AND id = ?`,
        args: [JSON.stringify(p.fields), tagsColumn(tags), text.sortText, text.searchText, new Date().toISOString(), owner, match.id],
      });
      const list = updatedByType.get(p.type.id) ?? [];
      list.push({ ...match, fields: p.fields, tags });
      updatedByType.set(p.type.id, list);
      summary.updated++;
      continue;
    }
    // Two identical rows in one file: keep the first, like Anki.
    if (dupes !== 'add' && seenInFile.has(key)) {
      summary.skipped++;
      continue;
    }
    seenInFile.add(key);
    const guid = p.guid && !(dupes === 'add' && takenGuids.has(p.guid)) ? p.guid : null;
    toAdd.push({
      noteTypeId: p.type.id,
      deckId: p.deckId,
      fields: p.fields,
      tags: p.tags,
      guid,
      schedules: p.schedules,
      cardDecks: p.cardDecks,
    });
    toAddLabels.push(p.label);
  }

  for (const part of chunk(updates, 300)) await db.batch(part, 'write');
  for (const [typeId, notes] of updatedByType) {
    const type = pending.find((p) => p.type.id === typeId)?.type;
    if (type) await syncCards(owner, type, notes, null);
  }

  const types = new Map(pending.map((p) => [p.type.id, p.type]));
  const { added, cards, noCards } = await addNotes(owner, toAdd, types);
  summary.added += added.length;
  summary.cards += cards;
  summary.skipped += noCards.length;
  for (const i of noCards) {
    if (summary.errors.length < MAX_ERRORS) summary.errors.push(`${toAddLabels[i]}: makes no cards (empty first field or no cloze)`);
  }
}

export async function importCsv(
  owner: string,
  text: string,
  opts: { deckId?: string; deck?: string; noteType?: string; tags?: string[]; dupes?: DupeMode },
): Promise<ImportSummary> {
  const parsed = parseCsv(text);
  const rows = csvNotes(parsed);
  const summary: ImportSummary = { added: 0, updated: 0, skipped: 0, cards: 0, errors: [] };
  if (!rows.length) throw new HttpError(400, 'No rows found in the file');
  if (rows.length > 20000) throw new HttpError(413, 'Split files over 20,000 rows into smaller ones');

  const types = await listNoteTypes(owner);
  const findType = (nameOrId: string) =>
    types.find((t) => t.id === nameOrId) ??
    types.find((t) => t.name.toLowerCase() === nameOrId.toLowerCase());
  const defaultTypeName = opts.noteType ?? parsed.header.notetype ?? 'Basic';

  const deckIds = new Map<string, string>();
  let defaultDeckId = opts.deckId;
  if (defaultDeckId) await getDeck(owner, defaultDeckId);
  const deckFor = async (name: string | null) => {
    if (!name) {
      defaultDeckId ??= await ensureDeck(owner, opts.deck ?? parsed.header.deck ?? 'Default');
      return defaultDeckId;
    }
    let id = deckIds.get(name);
    if (!id) {
      id = await ensureDeck(owner, name);
      deckIds.set(name, id);
    }
    return id;
  };

  const pending: Pending[] = [];
  for (const [i, row] of rows.entries()) {
    const label = `Row ${i + 1}`;
    const type = findType(row.noteType ?? defaultTypeName);
    if (!type) {
      summary.skipped++;
      if (summary.errors.length < MAX_ERRORS) summary.errors.push(`${label}: no note type called "${row.noteType ?? defaultTypeName}"`);
      continue;
    }
    const { fields, tags } = mapToFields(row, type.fields);
    pending.push({
      type,
      // A row's own deck column wins over the deck picked for the file.
      deckId: await deckFor(parsed.header.deckColumn !== null ? row.deck : null),
      fields,
      tags: [...tags, ...(opts.tags ?? [])],
      guid: row.guid,
      label,
    });
  }
  await apply(owner, pending, opts.dupes ?? 'update', summary);
  summary.deckId = defaultDeckId;
  return summary;
}

// ---- Anki packages ----------------------------------------------------------

/**
 * Finds the person's note type matching a packaged one (same name and
 * fields), or makes one. A same-named type with different fields gets a
 * numbered copy, so each batch of the same package lands on the same type.
 */
async function resolveNoteType(owner: string, t: AnkiNoteType, types: NoteType[]): Promise<NoteType> {
  const same = (n: NoteType) =>
    n.kind === t.kind && n.fields.length === t.fields.length && n.fields.every((f, i) => f === t.fields[i]);
  for (let i = 1; i < 50; i++) {
    const name = i === 1 ? t.name : `${t.name} (${i})`;
    const existing = types.find((n) => n.name.toLowerCase() === name.toLowerCase());
    if (!existing) {
      const created = await createNoteType(owner, {
        name,
        kind: t.kind,
        fields: t.fields,
        templates: t.kind === 'cloze' ? t.templates.slice(0, 1) : t.templates,
        css: t.css,
        sortField: t.sortField,
      });
      types.push(created);
      return created;
    }
    if (same(existing)) return existing;
  }
  throw new HttpError(409, `Too many note types called ${t.name}`);
}

export async function importAnkiBatch(
  owner: string,
  input: { noteTypes: AnkiNoteType[]; notes: AnkiNote[]; dupes?: DupeMode; withScheduling?: boolean },
): Promise<ImportSummary> {
  if (input.notes.length > 2000) throw new HttpError(413, 'Send at most 2,000 notes per batch');
  const summary: ImportSummary = { added: 0, updated: 0, skipped: 0, cards: 0, errors: [] };
  const types = await listNoteTypes(owner);
  const resolved = new Map<string, NoteType>();
  for (const t of input.noteTypes) resolved.set(t.key, await resolveNoteType(owner, t, types));

  const deckIds = new Map<string, string>();
  const deckFor = async (name: string) => {
    let id = deckIds.get(name);
    if (!id) {
      id = await ensureDeck(owner, name || 'Default');
      deckIds.set(name, id);
    }
    return id;
  };

  const pending: Pending[] = [];
  for (const n of input.notes) {
    const type = resolved.get(n.typeKey);
    if (!type) {
      summary.skipped++;
      continue;
    }
    const cardDecks = new Map<number, string>();
    const schedules = new Map<number, ImportedSchedule>();
    for (const c of n.cards) {
      cardDecks.set(c.ord, await deckFor(c.deck));
      if (input.withScheduling !== false && c.schedule) {
        schedules.set(c.ord, { ...c.schedule, suspended: c.suspended, flag: c.flag });
      } else if (c.suspended || c.flag) {
        schedules.set(c.ord, { ...newSchedule(new Date()), suspended: c.suspended, flag: c.flag });
      }
    }
    const firstDeck = n.cards[0] ? cardDecks.get(n.cards[0].ord) : undefined;
    pending.push({
      type,
      deckId: firstDeck ?? (await deckFor('Default')),
      fields: type.fields.map((_f, i) => n.fields[i] ?? ''),
      tags: n.tags,
      guid: n.guid,
      schedules,
      cardDecks,
      label: stripHtml(n.fields[0] ?? '').slice(0, 40) || n.guid,
    });
  }
  await apply(owner, pending, input.dupes ?? 'update', summary);
  return summary;
}
