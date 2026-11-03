// Note types and notes. A note's cards are generated from its note type:
// one per template with a non-empty front, or one per cloze number. Adding
// a note, editing it, or changing its note type's templates all go through
// syncCards so the cards always match.
import type { InStatement } from '@libsql/client';

import { getDb } from '../db';
import { ensureDeck } from './decks';
import { HttpError, newId } from './route';
import {
  cardInsert,
  chunk,
  noteFromRow,
  noteText,
  noteTypeFromRow,
  placeholders,
  tagsColumn,
} from './rows';
import { newSchedule } from '../../../components/flashcards/scheduler';
import { STOCK_NOTE_TYPES } from '../../../components/flashcards/noteTypes';
import { SEED_CSV, SEED_DECK_NAME } from '../../../components/flashcards/seed';
import { csvNotes, mapToFields, parseCsv } from '../../../components/flashcards/csv';
import { cardOrds } from '../../../components/flashcards/template';
import { CardSchedule, Note, NoteType } from '../../../components/flashcards/types';

// ---- note types -------------------------------------------------------------

export async function listNoteTypes(owner: string): Promise<NoteType[]> {
  const result = await getDb().execute({
    sql: 'SELECT * FROM fc_note_types WHERE owner = ? ORDER BY created_at, name',
    args: [owner],
  });
  return result.rows.map(noteTypeFromRow);
}

export async function getNoteType(owner: string, id: string): Promise<NoteType> {
  const result = await getDb().execute({
    sql: 'SELECT * FROM fc_note_types WHERE owner = ? AND id = ?',
    args: [owner, id],
  });
  if (!result.rows[0]) throw new HttpError(404, 'Note type not found');
  return noteTypeFromRow(result.rows[0]);
}

function validateNoteType(t: Omit<NoteType, 'id'>) {
  if (!t.name.trim()) throw new HttpError(400, 'Note type needs a name');
  if (!t.fields.length) throw new HttpError(400, 'Note type needs at least one field');
  const names = t.fields.map((f) => f.trim().toLowerCase());
  if (names.some((n) => !n) || new Set(names).size !== names.length) {
    throw new HttpError(400, 'Field names must be filled in and different from each other');
  }
  if (!t.templates.length) throw new HttpError(400, 'Note type needs at least one card type');
  if (t.kind === 'cloze' && t.templates.length !== 1) {
    throw new HttpError(400, 'A cloze note type has exactly one card type');
  }
}

function noteTypeInsert(owner: string, id: string, t: Omit<NoteType, 'id'>, createdAt: string): InStatement {
  return {
    sql: `INSERT INTO fc_note_types (id, owner, name, kind, fields, templates, css, sort_field, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      id, owner, t.name.trim(), t.kind, JSON.stringify(t.fields.map((f) => f.trim())),
      JSON.stringify(t.templates), t.css, t.sortField, createdAt,
    ],
  };
}

export async function createNoteType(owner: string, t: Omit<NoteType, 'id'>): Promise<NoteType> {
  validateNoteType(t);
  const existing = await listNoteTypes(owner);
  if (existing.some((n) => n.name.toLowerCase() === t.name.trim().toLowerCase())) {
    throw new HttpError(409, `There's already a note type called ${t.name}`);
  }
  const id = newId();
  await getDb().execute(noteTypeInsert(owner, id, t, new Date().toISOString()));
  return getNoteType(owner, id);
}

/**
 * Saves a note type. `fieldMap[i]` is the old index of new field i (null
 * for a new field), and `templateMap` does the same for card types, so
 * renames, reorders and removals carry each note's content along.
 */
export async function updateNoteType(
  owner: string,
  id: string,
  next: Omit<NoteType, 'id'>,
  fieldMap: (number | null)[],
  templateMap: (number | null)[],
) {
  const current = await getNoteType(owner, id);
  validateNoteType({ ...next, kind: current.kind });
  if (fieldMap.length !== next.fields.length) throw new HttpError(400, 'Field map is out of date');
  if (current.kind === 'standard' && templateMap.length !== next.templates.length) {
    throw new HttpError(400, 'Card type map is out of date');
  }
  const db = getDb();
  const updated: NoteType = { ...next, id, kind: current.kind };
  const sortField = Math.min(Math.max(0, next.sortField), next.fields.length - 1);
  await db.execute({
    sql: `UPDATE fc_note_types SET name = ?, fields = ?, templates = ?, css = ?, sort_field = ?
          WHERE owner = ? AND id = ?`,
    args: [
      next.name.trim(), JSON.stringify(next.fields.map((f) => f.trim())),
      JSON.stringify(next.templates), next.css, sortField, owner, id,
    ],
  });
  updated.sortField = sortField;

  const fieldsChanged =
    fieldMap.length !== current.fields.length || fieldMap.some((old, i) => old !== i);
  const notes = await notesOfType(owner, id);

  if (fieldsChanged || sortField !== current.sortField) {
    const updates = notes.map((n) => {
      const fields = fieldMap.map((old) => (old === null ? '' : (n.fields[old] ?? '')));
      n.fields = fields;
      const text = noteText(updated, fields);
      return {
        sql: 'UPDATE fc_notes SET fields = ?, sort_text = ?, search_text = ? WHERE owner = ? AND id = ?',
        args: [JSON.stringify(fields), text.sortText, text.searchText, owner, n.id],
      };
    });
    for (const part of chunk(updates, 200)) await db.batch(part, 'write');
  }

  if (current.kind === 'standard') {
    const templatesChanged =
      templateMap.length !== current.templates.length || templateMap.some((old, i) => old !== i);
    if (templatesChanged) {
      // Removed card types lose their cards; moved ones keep their progress.
      const kept = templateMap.filter((o): o is number => o !== null);
      const removed = current.templates.map((_t, i) => i).filter((i) => !kept.includes(i));
      const noteIds = notes.map((n) => n.id);
      const stmts: InStatement[] = [];
      for (const ids of chunk(noteIds, 400)) {
        const inList = placeholders(ids.length);
        if (removed.length) {
          stmts.push({
            sql: `DELETE FROM fc_cards WHERE owner = ? AND note_id IN (${inList}) AND ord IN (${placeholders(removed.length)})`,
            args: [owner, ...ids, ...removed],
          });
        }
        // Two passes so ords can swap without tripping UNIQUE(note_id, ord).
        templateMap.forEach((old, ord) => {
          if (old !== null && old !== ord) {
            stmts.push({
              sql: `UPDATE fc_cards SET ord = ? WHERE owner = ? AND note_id IN (${inList}) AND ord = ?`,
              args: [-1 - ord, owner, ...ids, old],
            });
          }
        });
        stmts.push({
          sql: `UPDATE fc_cards SET ord = -1 - ord WHERE owner = ? AND note_id IN (${inList}) AND ord < 0`,
          args: [owner, ...ids],
        });
      }
      if (stmts.length) await db.batch(stmts, 'write');
    }
  }
  await syncCards(owner, updated, notes, null, false);
  return getNoteType(owner, id);
}

export async function deleteNoteType(owner: string, id: string) {
  const result = await getDb().execute({
    sql: 'SELECT COUNT(*) AS n FROM fc_notes WHERE owner = ? AND note_type_id = ?',
    args: [owner, id],
  });
  const n = Number(result.rows[0].n);
  if (n > 0) {
    throw new HttpError(409, `${n} note${n === 1 ? '' : 's'} still use this note type. Delete them or change their type first.`);
  }
  await getDb().execute({ sql: 'DELETE FROM fc_note_types WHERE owner = ? AND id = ?', args: [owner, id] });
}

// ---- first visit ------------------------------------------------------------

/** Gives a new person Anki's stock note types and the sample deck. */
export async function bootstrap(owner: string): Promise<void> {
  const existing = await listNoteTypes(owner);
  if (existing.length) return;
  const createdAt = new Date().toISOString();
  await getDb().batch(
    STOCK_NOTE_TYPES.map((t, i) =>
      noteTypeInsert(owner, newId(), t, new Date(Date.parse(createdAt) + i).toISOString()),
    ),
    'write',
  );
  const types = await listNoteTypes(owner);
  const basic = types.find((t) => t.name === 'Basic');
  if (!basic) return;
  const deckId = await ensureDeck(owner, SEED_DECK_NAME);
  const notes = csvNotes(parseCsv(SEED_CSV)).map((row) => mapToFields(row, basic.fields));
  await addNotes(
    owner,
    notes.map((n) => ({ noteTypeId: basic.id, deckId, fields: n.fields, tags: n.tags })),
    new Map([[basic.id, basic]]),
  );
}

// ---- notes ------------------------------------------------------------------

async function notesOfType(owner: string, noteTypeId: string): Promise<Note[]> {
  const result = await getDb().execute({
    sql: 'SELECT * FROM fc_notes WHERE owner = ? AND note_type_id = ?',
    args: [owner, noteTypeId],
  });
  return result.rows.map((r) => noteFromRow(r));
}

export async function getNote(owner: string, id: string): Promise<Note> {
  const result = await getDb().execute({
    sql: 'SELECT * FROM fc_notes WHERE owner = ? AND id = ?',
    args: [owner, id],
  });
  if (!result.rows[0]) throw new HttpError(404, 'Note not found');
  return noteFromRow(result.rows[0]);
}

export interface NewNote {
  noteTypeId: string;
  deckId: string;
  fields: string[];
  tags: string[];
  guid?: string | null;
  /** Scheduling to keep per ord (imports); otherwise cards start new. */
  schedules?: Map<number, ImportedSchedule>;
  /** Per-card decks (imports); otherwise every card goes to `deckId`. */
  cardDecks?: Map<number, string>;
}

export type ImportedSchedule = CardSchedule & { suspended?: boolean; flag?: number };

/**
 * Adds notes and their cards in batches. Notes that would make no cards
 * are skipped and reported by index.
 */
export async function addNotes(
  owner: string,
  notes: NewNote[],
  types: Map<string, NoteType>,
): Promise<{ added: Note[]; cards: number; noCards: number[] }> {
  const now = new Date();
  const createdAt = now.toISOString();
  const added: Note[] = [];
  const noCards: number[] = [];
  const stmts: InStatement[] = [];
  let cards = 0;
  let position = now.getTime() * 1000;

  notes.forEach((input, index) => {
    const type = types.get(input.noteTypeId);
    if (!type) throw new HttpError(400, 'Unknown note type');
    const fields = type.fields.map((_f, i) => input.fields[i] ?? '');
    const ords = cardOrds(type, { fields, tags: input.tags });
    if (!ords.length) {
      noCards.push(index);
      return;
    }
    const id = newId();
    const text = noteText(type, fields);
    stmts.push({
      sql: `INSERT INTO fc_notes (id, owner, note_type_id, guid, fields, tags, sort_text, search_text, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        id, owner, type.id, input.guid || newId(), JSON.stringify(fields), tagsColumn(input.tags),
        text.sortText, text.searchText, createdAt, createdAt,
      ],
    });
    for (const ord of ords) {
      const sched = input.schedules?.get(ord);
      stmts.push(
        cardInsert(
          owner,
          {
            id: newId(),
            noteId: id,
            deckId: input.cardDecks?.get(ord) ?? input.deckId,
            ord,
            position: position++,
            createdAt,
          },
          sched ?? newSchedule(now),
        ),
      );
      if (sched?.suspended || sched?.flag) {
        stmts.push({
          sql: 'UPDATE fc_cards SET suspended = ?, flag = ? WHERE note_id = ? AND ord = ?',
          args: [sched.suspended ? 1 : 0, sched.flag ?? 0, id, ord],
        });
      }
      cards++;
    }
    added.push({ id, noteTypeId: type.id, fields, tags: input.tags, createdAt, updatedAt: createdAt });
  });

  for (const part of chunk(stmts, 300)) await getDb().batch(part, 'write');
  return { added, cards, noCards };
}

/**
 * Adds cards a note should now have and removes ones it no longer makes
 * (a deleted cloze, an emptied optional field). New cards go to
 * `deckId`, or the deck the note's other cards are in.
 */
export async function syncCards(
  owner: string,
  type: NoteType,
  notes: Note[],
  deckId: string | null,
  removeStale = true,
) {
  if (!notes.length) return;
  const db = getDb();
  const existing = new Map<string, { ords: Set<number>; deckId: string }>();
  for (const ids of chunk(notes.map((n) => n.id), 400)) {
    const result = await db.execute({
      sql: `SELECT note_id, ord, deck_id FROM fc_cards WHERE owner = ? AND note_id IN (${placeholders(ids.length)})`,
      args: [owner, ...ids],
    });
    for (const r of result.rows) {
      const e = existing.get(r.note_id as string) ?? { ords: new Set<number>(), deckId: r.deck_id as string };
      e.ords.add(Number(r.ord));
      existing.set(r.note_id as string, e);
    }
  }
  const now = new Date();
  const createdAt = now.toISOString();
  let position = now.getTime() * 1000;
  const stmts: InStatement[] = [];
  for (const note of notes) {
    const want = new Set(cardOrds(type, note));
    const have = existing.get(note.id);
    const target = deckId ?? have?.deckId;
    for (const ord of want) {
      if (have?.ords.has(ord) || !target) continue;
      stmts.push(
        cardInsert(owner, { id: newId(), noteId: note.id, deckId: target, ord, position: position++, createdAt }, newSchedule(now)),
      );
    }
    if (removeStale && have && want.size) {
      const stale = Array.from(have.ords).filter((o) => !want.has(o));
      if (stale.length) {
        stmts.push({
          sql: `DELETE FROM fc_cards WHERE owner = ? AND note_id = ? AND ord IN (${placeholders(stale.length)})`,
          args: [owner, note.id, ...stale],
        });
      }
    }
  }
  for (const part of chunk(stmts, 300)) await db.batch(part, 'write');
}

export async function createNote(owner: string, input: NewNote): Promise<Note> {
  const type = await getNoteType(owner, input.noteTypeId);
  const { added, noCards } = await addNotes(owner, [input], new Map([[type.id, type]]));
  if (noCards.length) {
    throw new HttpError(
      400,
      type.kind === 'cloze'
        ? 'Add at least one cloze, like {{c1::answer}}.'
        : 'This note would make no cards. Fill in the first field.',
    );
  }
  return added[0];
}

export async function updateNote(
  owner: string,
  id: string,
  patch: { fields?: string[]; tags?: string[]; deckId?: string },
): Promise<Note> {
  const note = await getNote(owner, id);
  const type = await getNoteType(owner, note.noteTypeId);
  const fields = patch.fields ? type.fields.map((_f, i) => patch.fields?.[i] ?? '') : note.fields;
  const tags = patch.tags ?? note.tags;
  if (!cardOrds(type, { fields, tags }).length) {
    throw new HttpError(
      400,
      type.kind === 'cloze' ? 'Keep at least one cloze, like {{c1::answer}}.' : 'The note would make no cards.',
    );
  }
  const text = noteText(type, fields);
  await getDb().execute({
    sql: `UPDATE fc_notes SET fields = ?, tags = ?, sort_text = ?, search_text = ?, updated_at = ?
          WHERE owner = ? AND id = ?`,
    args: [JSON.stringify(fields), tagsColumn(tags), text.sortText, text.searchText, new Date().toISOString(), owner, id],
  });
  const updated = { ...note, fields, tags };
  await syncCards(owner, type, [updated], patch.deckId ?? null);
  return getNote(owner, id);
}

export async function deleteNotes(owner: string, ids: string[]) {
  const stmts: InStatement[] = [];
  for (const part of chunk(ids, 400)) {
    const inList = placeholders(part.length);
    stmts.push(
      { sql: `DELETE FROM fc_cards WHERE owner = ? AND note_id IN (${inList})`, args: [owner, ...part] },
      { sql: `DELETE FROM fc_notes WHERE owner = ? AND id IN (${inList})`, args: [owner, ...part] },
    );
  }
  if (stmts.length) await getDb().batch(stmts, 'write');
}

/** Adds or removes tags on many notes at once. */
export async function editTags(owner: string, noteIds: string[], add: string[], remove: string[]) {
  const stmts: InStatement[] = [];
  const lower = new Set(remove.map((t) => t.toLowerCase()));
  for (const ids of chunk(noteIds, 400)) {
    const result = await getDb().execute({
      sql: `SELECT id, tags FROM fc_notes WHERE owner = ? AND id IN (${placeholders(ids.length)})`,
      args: [owner, ...ids],
    });
    for (const r of result.rows) {
      const current = String(r.tags).split(/\s+/).filter(Boolean);
      const next = [...current.filter((t) => !lower.has(t.toLowerCase())), ...add];
      stmts.push({
        sql: 'UPDATE fc_notes SET tags = ?, updated_at = ? WHERE owner = ? AND id = ?',
        args: [tagsColumn(next), new Date().toISOString(), owner, r.id as string],
      });
    }
  }
  for (const part of chunk(stmts, 300)) await getDb().batch(part, 'write');
}
