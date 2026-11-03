// Turso rows to the shared flashcard types, and the reverse for writes.
import type { InStatement, Row } from '@libsql/client';

import { stripHtml } from '../../../components/flashcards/template';
import {
  Card,
  CardSchedule,
  Deck,
  DeckOptions,
  defaultDeckOptions,
  Note,
  NoteType,
} from '../../../components/flashcards/types';

const json = <T>(v: unknown, fallback: T): T => {
  try {
    return v ? (JSON.parse(v as string) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function deckFromRow(r: Row): Deck {
  return {
    id: r.id as string,
    name: r.name as string,
    options: { ...defaultDeckOptions(), ...json<Partial<DeckOptions>>(r.options, {}) },
    extra: json(r.extra, null),
    createdAt: r.created_at as string,
  };
}

export function noteTypeFromRow(r: Row): NoteType {
  return {
    id: r.id as string,
    name: r.name as string,
    kind: r.kind === 'cloze' ? 'cloze' : 'standard',
    fields: json(r.fields, []),
    templates: json(r.templates, []),
    css: r.css as string,
    sortField: Number(r.sort_field),
  };
}

export const parseTags = (s: unknown) => String(s ?? '').split(/\s+/).filter(Boolean);
export const tagsColumn = (tags: string[]) => {
  const unique = Array.from(new Set(tags.map((t) => t.trim()).filter(Boolean)));
  return unique.length ? ` ${unique.join(' ')} ` : '';
};

export function noteFromRow(r: Row, prefix = ''): Note {
  return {
    id: r[`${prefix}id`] as string,
    noteTypeId: r[`${prefix}note_type_id`] as string,
    fields: json(r[`${prefix}fields`], []),
    tags: parseTags(r[`${prefix}tags`]),
    createdAt: r[`${prefix}created_at`] as string,
    updatedAt: r[`${prefix}updated_at`] as string,
  };
}

export function cardFromRow(r: Row): Card {
  return {
    id: r.id as string,
    noteId: r.note_id as string,
    deckId: r.deck_id as string,
    ord: Number(r.ord),
    due: r.due as string,
    stability: Number(r.stability),
    difficulty: Number(r.difficulty),
    elapsedDays: Number(r.elapsed_days),
    scheduledDays: Number(r.scheduled_days),
    learningSteps: Number(r.learning_steps),
    reps: Number(r.reps),
    lapses: Number(r.lapses),
    state: Number(r.state) as Card['state'],
    lastReview: (r.last_review as string | null) ?? null,
    suspended: Number(r.suspended) === 1,
    buriedUntil: (r.buried_until as string | null) ?? null,
    flag: Number(r.flag),
    createdAt: r.created_at as string,
  };
}

/** Columns every card SELECT needs, qualified with the `c` alias. */
export const CARD_COLUMNS = [
  'id', 'note_id', 'deck_id', 'ord', 'due', 'stability', 'difficulty',
  'elapsed_days', 'scheduled_days', 'learning_steps', 'reps', 'lapses',
  'state', 'last_review', 'suspended', 'buried_until', 'flag', 'created_at',
].map((c) => `c.${c}`).join(', ');

export function scheduleUpdate(cardId: string, owner: string, s: CardSchedule): InStatement {
  return {
    sql: `UPDATE fc_cards SET due = ?, stability = ?, difficulty = ?, elapsed_days = ?,
            scheduled_days = ?, learning_steps = ?, reps = ?, lapses = ?, state = ?, last_review = ?
          WHERE id = ? AND owner = ?`,
    args: [
      s.due, s.stability, s.difficulty, s.elapsedDays, s.scheduledDays,
      s.learningSteps, s.reps, s.lapses, s.state, s.lastReview, cardId, owner,
    ],
  };
}

export function cardInsert(
  owner: string,
  c: { id: string; noteId: string; deckId: string; ord: number; position: number; createdAt: string },
  s: CardSchedule,
): InStatement {
  return {
    sql: `INSERT INTO fc_cards (id, owner, note_id, deck_id, ord, position, due, stability, difficulty,
            elapsed_days, scheduled_days, learning_steps, reps, lapses, state, last_review, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT (note_id, ord) DO NOTHING`,
    args: [
      c.id, owner, c.noteId, c.deckId, c.ord, c.position, s.due, s.stability, s.difficulty,
      s.elapsedDays, s.scheduledDays, s.learningSteps, s.reps, s.lapses, s.state, s.lastReview,
      c.createdAt,
    ],
  };
}

/** Text columns kept alongside a note's fields for sorting and search. */
export function noteText(noteType: NoteType, fields: string[]) {
  return {
    sortText: stripHtml(fields[noteType.sortField] ?? fields[0] ?? '').slice(0, 200),
    searchText: fields.map(stripHtml).join(' \u001f ').toLowerCase(),
  };
}

/** `?, ?, ?` for an IN list. */
export const placeholders = (n: number) => Array(n).fill('?').join(', ');

/** Splits work into chunks for db.batch, which has a statement limit. */
export function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}
