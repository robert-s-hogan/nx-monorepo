// Cards: the study queue, answering (FSRS, leeches, burying siblings),
// undo, the browser's search, and its bulk actions.
import type { InStatement, Row } from '@libsql/client';

import { getDb } from '../db';
import { DAY_MS, doneToday, getDeck, limitsLeft, listDecks, subtree } from './decks';
import { deleteNotes, editTags, listNoteTypes } from './notes';
import { HttpError, newId } from './route';
import {
  CARD_COLUMNS,
  cardFromRow,
  chunk,
  noteFromRow,
  placeholders,
  scheduleUpdate,
} from './rows';
import { compileSearch, SORTS } from './search';
import { answer, Grade, newSchedule } from '../../../components/flashcards/scheduler';
import {
  BrowserRow,
  BulkAction,
  Card,
  CardBundle,
  CardSnapshot,
  DeckOptions,
  defaultDeckOptions,
  QueueResponse,
  ReviewResponse,
} from '../../../components/flashcards/types';

const NOTE_COLUMNS = 'n.id AS n_id, n.note_type_id AS n_note_type_id, n.fields AS n_fields, n.tags AS n_tags, n.created_at AS n_created_at, n.updated_at AS n_updated_at';

const bundleFromRow = (r: Row): CardBundle => ({
  card: cardFromRow(r),
  note: noteFromRow(r, 'n_'),
  deckName: r.deck_name as string,
});

const FROM = `FROM fc_cards c
  JOIN fc_notes n ON n.id = c.note_id
  JOIN fc_decks d ON d.id = c.deck_id
  JOIN fc_note_types t ON t.id = n.note_type_id`;

async function getCard(owner: string, id: string): Promise<Card> {
  const result = await getDb().execute({
    sql: `SELECT ${CARD_COLUMNS} FROM fc_cards c WHERE c.owner = ? AND c.id = ?`,
    args: [owner, id],
  });
  if (!result.rows[0]) throw new HttpError(404, 'Card not found');
  return cardFromRow(result.rows[0]);
}

const snapshotOf = (c: Card): CardSnapshot => ({
  id: c.id,
  due: c.due,
  stability: c.stability,
  difficulty: c.difficulty,
  elapsedDays: c.elapsedDays,
  scheduledDays: c.scheduledDays,
  learningSteps: c.learningSteps,
  reps: c.reps,
  lapses: c.lapses,
  state: c.state,
  lastReview: c.lastReview,
  suspended: c.suspended,
  buriedUntil: c.buriedUntil,
  flag: c.flag,
});

// ---- study queue ------------------------------------------------------------

/** Today's cards for a deck and its sub-decks, within the deck's limits. */
export async function deckQueue(
  owner: string,
  deckId: string,
  dayStart: Date,
  now: Date,
): Promise<QueueResponse> {
  const deck = await getDeck(owner, deckId);
  const ids = subtree(await listDecks(owner), deck).map((d) => d.id);
  const { newDone, reviewsDone } = await doneToday(owner, ids, dayStart);
  const { newLeft, reviewsLeft } = limitsLeft(deck, dayStart, newDone, reviewsDone);
  const dayEnd = new Date(dayStart.getTime() + DAY_MS).toISOString();
  const inList = placeholders(ids.length);
  const base = `SELECT ${CARD_COLUMNS}, ${NOTE_COLUMNS}, d.name AS deck_name ${FROM}
    WHERE c.owner = ? AND c.deck_id IN (${inList}) AND c.suspended = 0
      AND (c.buried_until IS NULL OR c.buried_until <= ?)`;
  const args = [owner, ...ids, now.toISOString()];
  const newOrder = deck.options.newOrder === 'random' ? 'c.id' : 'c.position';

  const [learn, review, fresh] = await getDb().batch(
    [
      { sql: `${base} AND c.state IN (1, 3) AND c.due < ? ORDER BY c.due LIMIT 1000`, args: [...args, dayEnd] },
      { sql: `${base} AND c.state = 2 AND c.due < ? ORDER BY c.due LIMIT ?`, args: [...args, dayEnd, reviewsLeft] },
      { sql: `${base} AND c.state = 0 ORDER BY ${newOrder} LIMIT ?`, args: [...args, newLeft] },
    ],
    'read',
  );

  const cards = [...learn.rows, ...review.rows, ...fresh.rows].map(bundleFromRow);
  return {
    cards,
    noteTypes: await listNoteTypes(owner),
    options: deck.options,
    counts: { newCount: fresh.rows.length, learnCount: learn.rows.length, reviewCount: review.rows.length },
  };
}

/** A custom study session: whatever matches a search, no daily limits. */
export async function searchQueue(
  owner: string,
  query: string,
  limit: number,
  dayStart: Date,
  now: Date,
): Promise<QueueResponse> {
  const where = compileSearch(query, { now, dayStart });
  const result = await getDb().execute({
    sql: `SELECT ${CARD_COLUMNS}, ${NOTE_COLUMNS}, d.name AS deck_name ${FROM}
          WHERE c.owner = ? AND c.suspended = 0 AND (c.buried_until IS NULL OR c.buried_until <= ?) AND ${where.sql}
          ORDER BY c.state = 0, c.due LIMIT ?`,
    args: [owner, now.toISOString(), ...where.args, Math.min(9999, Math.max(1, limit))],
  });
  const cards = result.rows.map(bundleFromRow);
  const counts = { newCount: 0, learnCount: 0, reviewCount: 0 };
  for (const { card } of cards) {
    if (card.state === 0) counts.newCount++;
    else if (card.state === 2) counts.reviewCount++;
    else counts.learnCount++;
  }
  return { cards, noteTypes: await listNoteTypes(owner), options: defaultDeckOptions(), counts };
}

// ---- answering --------------------------------------------------------------

export async function review(
  owner: string,
  input: { cardId: string; rating: Grade; dayStart: Date; cram: boolean; durationMs: number },
): Promise<ReviewResponse> {
  const now = new Date();
  const card = await getCard(owner, input.cardId);
  const deck = await getDeck(owner, card.deckId).catch(() => null);
  const options: DeckOptions = deck?.options ?? defaultDeckOptions();
  const snapshot = snapshotOf(card);
  const reviewId = newId();
  const db = getDb();
  const stmts: InStatement[] = [];

  let next: Card = card;
  let leech: ReviewResponse['leech'] = null;
  let buried: string[] = [];

  if (!input.cram) {
    const sched = answer(card, input.rating, now, options);
    next = { ...card, ...sched };
    stmts.push(scheduleUpdate(card.id, owner, sched));

    // Anki's leech rule: at the threshold, then every half-threshold after.
    const lapsed = card.state === 2 && input.rating === 1;
    const t = options.leechThreshold;
    if (lapsed && next.lapses >= t && (next.lapses - t) % Math.max(1, Math.ceil(t / 2)) === 0) {
      leech = options.leechAction === 'suspend' ? 'suspended' : 'tagged';
      if (leech === 'suspended') {
        next.suspended = true;
        stmts.push({ sql: 'UPDATE fc_cards SET suspended = 1 WHERE id = ? AND owner = ?', args: [card.id, owner] });
      }
    }

    if (options.burySiblings) {
      const dayEnd = new Date(input.dayStart.getTime() + DAY_MS).toISOString();
      const siblings = await db.execute({
        sql: `SELECT id FROM fc_cards WHERE owner = ? AND note_id = ? AND id != ? AND suspended = 0
                AND (state = 0 OR (state = 2 AND due < ?))`,
        args: [owner, card.noteId, card.id, dayEnd],
      });
      buried = siblings.rows.map((r) => r.id as string);
      if (buried.length) {
        stmts.push({
          sql: `UPDATE fc_cards SET buried_until = ? WHERE owner = ? AND id IN (${placeholders(buried.length)})`,
          args: [dayEnd, owner, ...buried],
        });
      }
    }
  }

  stmts.push({
    sql: `INSERT INTO fc_reviews (id, owner, card_id, deck_id, rating, prev_state, cram, at, duration_ms, snapshot)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      reviewId, owner, card.id, card.deckId, input.rating, card.state, input.cram ? 1 : 0,
      now.toISOString(), Math.max(0, Math.min(3600000, Math.round(input.durationMs))),
      JSON.stringify(snapshot),
    ],
  });
  await db.batch(stmts, 'write');
  if (leech) await editTags(owner, [card.noteId], ['leech'], []);

  return { card: next, snapshot, reviewId, leech, buried };
}

/** Undo: puts a card back the way a snapshot recorded it. */
export async function restore(
  owner: string,
  input: { snapshot: CardSnapshot; reviewId?: string; unbury?: string[]; leech?: boolean },
): Promise<Card> {
  const s = input.snapshot;
  const card = await getCard(owner, s.id);
  const stmts: InStatement[] = [
    scheduleUpdate(s.id, owner, s),
    {
      sql: 'UPDATE fc_cards SET suspended = ?, buried_until = ?, flag = ? WHERE id = ? AND owner = ?',
      args: [s.suspended ? 1 : 0, s.buriedUntil, s.flag, s.id, owner],
    },
  ];
  if (input.reviewId) {
    stmts.push({ sql: 'DELETE FROM fc_reviews WHERE id = ? AND owner = ?', args: [input.reviewId, owner] });
  }
  if (input.unbury?.length) {
    stmts.push({
      sql: `UPDATE fc_cards SET buried_until = NULL WHERE owner = ? AND id IN (${placeholders(input.unbury.length)})`,
      args: [owner, ...input.unbury],
    });
  }
  await getDb().batch(stmts, 'write');
  if (input.leech) await editTags(owner, [card.noteId], [], ['leech']);
  return getCard(owner, s.id);
}

// ---- browser ----------------------------------------------------------------

export async function searchCards(
  owner: string,
  input: { query: string; sort: string; desc: boolean; limit: number; offset: number; dayStart: Date },
): Promise<{ rows: BrowserRow[]; total: number }> {
  const now = new Date();
  const where = compileSearch(input.query, { now, dayStart: input.dayStart });
  const order = SORTS[input.sort] ?? SORTS.sort;
  const dir = input.desc ? 'DESC' : 'ASC';
  const orderBy = order
    .split(',')
    .map((part) => `${part.trim()} ${dir}`)
    .join(', ');
  const db = getDb();
  const [rows, count] = await db.batch(
    [
      {
        sql: `SELECT ${CARD_COLUMNS}, ${NOTE_COLUMNS}, d.name AS deck_name, t.name AS type_name, n.sort_text
              ${FROM} WHERE c.owner = ? AND ${where.sql}
              ORDER BY ${orderBy}, c.id LIMIT ? OFFSET ?`,
        args: [owner, ...where.args, Math.min(500, Math.max(1, input.limit)), Math.max(0, input.offset)],
      },
      { sql: `SELECT COUNT(*) AS n ${FROM} WHERE c.owner = ? AND ${where.sql}`, args: [owner, ...where.args] },
    ],
    'read',
  );
  return {
    rows: rows.rows.map((r) => ({
      ...bundleFromRow(r),
      noteTypeName: r.type_name as string,
      sortField: r.sort_text as string,
    })),
    total: Number(count.rows[0].n),
  };
}

/** Ids of every card matching a search, for "select all" bulk actions. */
export async function searchCardIds(owner: string, query: string, dayStart: Date): Promise<string[]> {
  const where = compileSearch(query, { now: new Date(), dayStart });
  const result = await getDb().execute({
    sql: `SELECT c.id ${FROM} WHERE c.owner = ? AND ${where.sql} LIMIT 50000`,
    args: [owner, ...where.args],
  });
  return result.rows.map((r) => r.id as string);
}

export async function updateCard(
  owner: string,
  id: string,
  patch: { flag?: number; suspended?: boolean; buried?: boolean; deckId?: string; dayStart: Date },
): Promise<Card> {
  const card = await getCard(owner, id);
  const sets: string[] = [];
  const args: (string | number | null)[] = [];
  if (patch.flag !== undefined) {
    sets.push('flag = ?');
    args.push(Math.min(7, Math.max(0, Math.round(patch.flag))));
  }
  if (patch.suspended !== undefined) {
    sets.push('suspended = ?');
    args.push(patch.suspended ? 1 : 0);
  }
  if (patch.buried !== undefined) {
    sets.push('buried_until = ?');
    args.push(patch.buried ? new Date(patch.dayStart.getTime() + DAY_MS).toISOString() : null);
  }
  if (patch.deckId) {
    await getDeck(owner, patch.deckId);
    sets.push('deck_id = ?');
    args.push(patch.deckId);
  }
  if (sets.length) {
    await getDb().execute({
      sql: `UPDATE fc_cards SET ${sets.join(', ')} WHERE owner = ? AND id = ?`,
      args: [...args, owner, card.id],
    });
  }
  return getCard(owner, id);
}

export async function bulk(owner: string, cardIds: string[], action: BulkAction, dayStart: Date) {
  if (!cardIds.length) return;
  const db = getDb();
  const now = new Date();
  const run = async (sql: string, extra: (string | number | null)[] = []) => {
    const stmts = chunk(cardIds, 400).map((ids) => ({
      sql: `${sql} WHERE owner = ? AND id IN (${placeholders(ids.length)})`,
      args: [...extra, owner, ...ids],
    }));
    for (const part of chunk(stmts, 50)) await db.batch(part, 'write');
  };
  const noteIds = async () => {
    const out = new Set<string>();
    for (const ids of chunk(cardIds, 400)) {
      const r = await db.execute({
        sql: `SELECT DISTINCT note_id FROM fc_cards WHERE owner = ? AND id IN (${placeholders(ids.length)})`,
        args: [owner, ...ids],
      });
      r.rows.forEach((row) => out.add(row.note_id as string));
    }
    return Array.from(out);
  };

  switch (action.action) {
    case 'move':
      await getDeck(owner, action.deckId);
      return run('UPDATE fc_cards SET deck_id = ?', [action.deckId]);
    case 'suspend':
      return run('UPDATE fc_cards SET suspended = 1');
    case 'unsuspend':
      return run('UPDATE fc_cards SET suspended = 0');
    case 'bury':
      return run('UPDATE fc_cards SET buried_until = ?', [new Date(dayStart.getTime() + DAY_MS).toISOString()]);
    case 'unbury':
      return run('UPDATE fc_cards SET buried_until = NULL');
    case 'flag':
      return run('UPDATE fc_cards SET flag = ?', [Math.min(7, Math.max(0, Math.round(action.flag)))]);
    case 'forget': {
      // Like Anki's Forget: back to new, keeping the review and lapse counts.
      const fresh = newSchedule(now);
      return run(
        `UPDATE fc_cards SET due = ?, stability = 0, difficulty = 0, elapsed_days = 0, scheduled_days = 0,
           learning_steps = 0, state = 0, last_review = NULL`,
        [fresh.due],
      );
    }
    case 'addTags':
      return editTags(owner, await noteIds(), action.tags, []);
    case 'removeTags':
      return editTags(owner, await noteIds(), [], action.tags);
    case 'deleteNotes':
      return deleteNotes(owner, await noteIds());
    default:
      throw new HttpError(400, 'Unknown action');
  }
}

/** Reviewed-today and streak numbers for the deck list. */
export async function studyStats(owner: string, dayStart: Date) {
  // Day 0 is today (from the browser's local day start), -1 yesterday, …
  // CAST(x + 1000) - 1000 floors negative offsets in SQLite.
  const result = await getDb().execute({
    sql: `SELECT DISTINCT CAST(julianday(at) - julianday(?) + 1000 AS INTEGER) - 1000 AS day
          FROM fc_reviews WHERE owner = ? AND at >= ?`,
    args: [dayStart.toISOString(), owner, new Date(dayStart.getTime() - 400 * DAY_MS).toISOString()],
  });
  const today = await getDb().execute({
    sql: 'SELECT COUNT(*) AS n, SUM(duration_ms) AS ms FROM fc_reviews WHERE owner = ? AND at >= ?',
    args: [owner, dayStart.toISOString()],
  });
  const days = new Set(result.rows.map((r) => Number(r.day)));
  // A streak survives a today with no reviews yet.
  let day = days.has(0) ? 0 : -1;
  let streak = 0;
  while (days.has(day)) {
    streak++;
    day--;
  }
  return {
    reviewedToday: Number(today.rows[0].n ?? 0),
    minutesToday: Math.round(Number(today.rows[0].ms ?? 0) / 60000),
    streak,
  };
}
