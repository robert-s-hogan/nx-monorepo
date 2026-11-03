// Decks: Anki-style `::` nesting, per-deck options and daily limits, and
// the due counts shown on the deck list.
import { getDb } from '../db';
import { deckFromRow, placeholders } from './rows';
import { HttpError, newId } from './route';
import {
  DAY_MS,
  DECK_SEP,
  Deck,
  DeckOptions,
  DeckWithCounts,
  defaultDeckOptions,
  isParentDeck,
} from '../../../components/flashcards/types';

export { DAY_MS };

export function cleanDeckName(name: string): string {
  const parts = name
    .split(DECK_SEP)
    .map((p) => p.trim())
    .filter(Boolean);
  if (!parts.length) throw new HttpError(400, 'Deck name is empty');
  return parts.join(DECK_SEP);
}

export async function listDecks(owner: string): Promise<Deck[]> {
  const result = await getDb().execute({
    sql: 'SELECT * FROM fc_decks WHERE owner = ? ORDER BY name COLLATE NOCASE',
    args: [owner],
  });
  return result.rows.map(deckFromRow);
}

export async function getDeck(owner: string, id: string): Promise<Deck> {
  const result = await getDb().execute({
    sql: 'SELECT * FROM fc_decks WHERE owner = ? AND id = ?',
    args: [owner, id],
  });
  if (!result.rows[0]) throw new HttpError(404, 'Deck not found');
  return deckFromRow(result.rows[0]);
}

/** The deck and all of its sub-decks. */
export function subtree(decks: Deck[], deck: Deck): Deck[] {
  return decks.filter((d) => d.id === deck.id || isParentDeck(deck.name, d.name));
}

/** Finds a deck by full name, creating it (and any missing parents) if needed. */
export async function ensureDeck(owner: string, rawName: string): Promise<string> {
  const name = cleanDeckName(rawName);
  const parts = name.split(DECK_SEP);
  const db = getDb();
  let id = '';
  for (let i = 1; i <= parts.length; i++) {
    const path = parts.slice(0, i).join(DECK_SEP);
    await db.execute({
      sql: `INSERT INTO fc_decks (id, owner, name, options, created_at) VALUES (?, ?, ?, ?, ?)
            ON CONFLICT (owner, name) DO NOTHING`,
      args: [newId(), owner, path, JSON.stringify(defaultDeckOptions()), new Date().toISOString()],
    });
    const row = await db.execute({
      sql: 'SELECT id FROM fc_decks WHERE owner = ? AND name = ?',
      args: [owner, path],
    });
    id = row.rows[0].id as string;
  }
  return id;
}

export async function renameDeck(owner: string, id: string, rawName: string) {
  const deck = await getDeck(owner, id);
  const name = cleanDeckName(rawName);
  if (name === deck.name) return;
  const decks = await listDecks(owner);
  if (decks.some((d) => d.name.toLowerCase() === name.toLowerCase() && d.id !== id)) {
    throw new HttpError(409, `There's already a deck called ${name}`);
  }
  if (isParentDeck(deck.name, name)) throw new HttpError(400, "A deck can't go inside itself");
  const moves = subtree(decks, deck).map((d) => ({
    sql: 'UPDATE fc_decks SET name = ? WHERE id = ? AND owner = ?',
    args: [name + d.name.slice(deck.name.length), d.id, owner],
  }));
  await getDb().batch(moves, 'write');
  // Make sure the new parents exist.
  if (name.includes(DECK_SEP)) {
    await ensureDeck(owner, name.split(DECK_SEP).slice(0, -1).join(DECK_SEP));
  }
}

export async function updateDeckOptions(
  owner: string,
  id: string,
  options: Partial<DeckOptions>,
  applyToSubdecks = false,
) {
  const deck = await getDeck(owner, id);
  const merged: DeckOptions = { ...deck.options, ...options };
  const n = (v: number, min: number, max: number) => Math.min(max, Math.max(min, Math.round(v)));
  merged.newPerDay = n(merged.newPerDay, 0, 9999);
  merged.reviewsPerDay = n(merged.reviewsPerDay, 0, 99999);
  merged.maxIntervalDays = n(merged.maxIntervalDays, 1, 36500);
  merged.leechThreshold = n(merged.leechThreshold, 1, 99);
  merged.desiredRetention = Math.min(0.99, Math.max(0.7, Number(merged.desiredRetention) || 0.9));
  const ids = applyToSubdecks ? subtree(await listDecks(owner), deck).map((d) => d.id) : [id];
  await getDb().execute({
    sql: `UPDATE fc_decks SET options = ? WHERE owner = ? AND id IN (${placeholders(ids.length)})`,
    args: [JSON.stringify(merged), owner, ...ids],
  });
}

/** Custom study's "increase today's limit". */
export async function addExtraToday(
  owner: string,
  id: string,
  today: string,
  add: { newCards?: number; reviews?: number },
) {
  const deck = await getDeck(owner, id);
  const current =
    deck.extra?.date === today ? deck.extra : { date: today, newCards: 0, reviews: 0 };
  const extra = {
    date: today,
    newCards: current.newCards + Math.max(0, Math.round(add.newCards ?? 0)),
    reviews: current.reviews + Math.max(0, Math.round(add.reviews ?? 0)),
  };
  await getDb().execute({
    sql: 'UPDATE fc_decks SET extra = ? WHERE owner = ? AND id = ?',
    args: [JSON.stringify(extra), owner, id],
  });
}

/** Deletes a deck, its sub-decks, their cards, and notes left with no cards. */
export async function deleteDeck(owner: string, id: string) {
  const deck = await getDeck(owner, id);
  const ids = subtree(await listDecks(owner), deck).map((d) => d.id);
  const inList = placeholders(ids.length);
  await getDb().batch(
    [
      {
        sql: `DELETE FROM fc_cards WHERE owner = ? AND deck_id IN (${inList})`,
        args: [owner, ...ids],
      },
      {
        sql: `DELETE FROM fc_notes WHERE owner = ? AND id NOT IN (SELECT note_id FROM fc_cards WHERE owner = ?)`,
        args: [owner, owner],
      },
      { sql: `DELETE FROM fc_decks WHERE owner = ? AND id IN (${inList})`, args: [owner, ...ids] },
    ],
    'write',
  );
}

export const todayKey = (dayStart: Date) => dayStart.toISOString().slice(0, 10);

interface RawCounts {
  newCount: number;
  learnCount: number;
  reviewCount: number;
  total: number;
  newDone: number;
  reviewsDone: number;
}

/** What's left today for a deck once its limits are applied. */
export function limitsLeft(deck: Deck, dayStart: Date, newDone: number, reviewsDone: number) {
  const extra = deck.extra?.date === todayKey(dayStart) ? deck.extra : null;
  return {
    newLeft: Math.max(0, deck.options.newPerDay + (extra?.newCards ?? 0) - newDone),
    reviewsLeft: Math.max(0, deck.options.reviewsPerDay + (extra?.reviews ?? 0) - reviewsDone),
  };
}

/** Today's done counts across a set of decks, for the daily limits. */
export async function doneToday(owner: string, deckIds: string[], dayStart: Date) {
  if (!deckIds.length) return { newDone: 0, reviewsDone: 0 };
  const result = await getDb().execute({
    sql: `SELECT
            SUM(CASE WHEN prev_state = 0 THEN 1 ELSE 0 END) AS new_done,
            SUM(CASE WHEN prev_state = 2 THEN 1 ELSE 0 END) AS reviews_done
          FROM fc_reviews
          WHERE owner = ? AND at >= ? AND cram = 0 AND deck_id IN (${placeholders(deckIds.length)})`,
    args: [owner, dayStart.toISOString(), ...deckIds],
  });
  const r = result.rows[0];
  return { newDone: Number(r?.new_done ?? 0), reviewsDone: Number(r?.reviews_done ?? 0) };
}

export async function decksWithCounts(
  owner: string,
  dayStart: Date,
  now: Date,
): Promise<DeckWithCounts[]> {
  const db = getDb();
  const dayEnd = new Date(dayStart.getTime() + DAY_MS).toISOString();
  const nowIso = now.toISOString();
  const [decks, cardCounts, done] = await Promise.all([
    listDecks(owner),
    db.execute({
      sql: `SELECT deck_id,
              COUNT(*) AS total,
              SUM(CASE WHEN state = 0 AND ok THEN 1 ELSE 0 END) AS new_count,
              SUM(CASE WHEN state IN (1, 3) AND ok AND due < ? THEN 1 ELSE 0 END) AS learn_count,
              SUM(CASE WHEN state = 2 AND ok AND due < ? THEN 1 ELSE 0 END) AS review_count
            FROM (SELECT *, (suspended = 0 AND (buried_until IS NULL OR buried_until <= ?)) AS ok
                  FROM fc_cards WHERE owner = ?)
            GROUP BY deck_id`,
      args: [dayEnd, dayEnd, nowIso, owner],
    }),
    db.execute({
      sql: `SELECT deck_id,
              SUM(CASE WHEN prev_state = 0 THEN 1 ELSE 0 END) AS new_done,
              SUM(CASE WHEN prev_state = 2 THEN 1 ELSE 0 END) AS reviews_done
            FROM fc_reviews WHERE owner = ? AND at >= ? AND cram = 0
            GROUP BY deck_id`,
      args: [owner, dayStart.toISOString()],
    }),
  ]);

  const raw = new Map<string, RawCounts>();
  for (const d of decks) {
    raw.set(d.id, { newCount: 0, learnCount: 0, reviewCount: 0, total: 0, newDone: 0, reviewsDone: 0 });
  }
  for (const r of cardCounts.rows) {
    const c = raw.get(r.deck_id as string);
    if (!c) continue;
    c.total = Number(r.total);
    c.newCount = Number(r.new_count ?? 0);
    c.learnCount = Number(r.learn_count ?? 0);
    c.reviewCount = Number(r.review_count ?? 0);
  }
  for (const r of done.rows) {
    const c = raw.get(r.deck_id as string);
    if (!c) continue;
    c.newDone = Number(r.new_done ?? 0);
    c.reviewsDone = Number(r.reviews_done ?? 0);
  }

  return decks.map((deck) => {
    const sum = subtree(decks, deck).reduce(
      (acc, d) => {
        const c = raw.get(d.id);
        if (!c) return acc;
        acc.newCount += c.newCount;
        acc.learnCount += c.learnCount;
        acc.reviewCount += c.reviewCount;
        acc.total += c.total;
        acc.newDone += c.newDone;
        acc.reviewsDone += c.reviewsDone;
        return acc;
      },
      { newCount: 0, learnCount: 0, reviewCount: 0, total: 0, newDone: 0, reviewsDone: 0 },
    );
    const { newLeft, reviewsLeft } = limitsLeft(deck, dayStart, sum.newDone, sum.reviewsDone);
    return {
      ...deck,
      newCount: Math.min(sum.newCount, newLeft),
      learnCount: sum.learnCount,
      reviewCount: Math.min(sum.reviewCount, reviewsLeft),
      total: sum.total,
    };
  });
}
