// Flashcard tables in the site's Turso database. Every row carries `owner`
// (the signed-in email, lowercased) and every query filters on it, so one
// person never reads or writes another's decks. Tables are created on first
// use, so there's no manual migration step.
import { getDb } from '../db';

const STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS fc_decks (
     id         TEXT PRIMARY KEY,
     owner      TEXT NOT NULL,
     name       TEXT NOT NULL,
     options    TEXT NOT NULL,
     extra      TEXT,
     created_at TEXT NOT NULL,
     UNIQUE (owner, name)
   )`,
  `CREATE TABLE IF NOT EXISTS fc_note_types (
     id         TEXT PRIMARY KEY,
     owner      TEXT NOT NULL,
     name       TEXT NOT NULL,
     kind       TEXT NOT NULL,
     fields     TEXT NOT NULL,
     templates  TEXT NOT NULL,
     css        TEXT NOT NULL,
     sort_field INTEGER NOT NULL DEFAULT 0,
     created_at TEXT NOT NULL,
     UNIQUE (owner, name)
   )`,
  `CREATE TABLE IF NOT EXISTS fc_notes (
     id           TEXT PRIMARY KEY,
     owner        TEXT NOT NULL,
     note_type_id TEXT NOT NULL,
     guid         TEXT NOT NULL,
     fields       TEXT NOT NULL,
     tags         TEXT NOT NULL DEFAULT '',
     sort_text    TEXT NOT NULL DEFAULT '',
     search_text  TEXT NOT NULL DEFAULT '',
     created_at   TEXT NOT NULL,
     updated_at   TEXT NOT NULL,
     UNIQUE (owner, guid)
   )`,
  `CREATE INDEX IF NOT EXISTS fc_notes_type ON fc_notes (owner, note_type_id)`,
  `CREATE TABLE IF NOT EXISTS fc_cards (
     id             TEXT PRIMARY KEY,
     owner          TEXT NOT NULL,
     note_id        TEXT NOT NULL,
     deck_id        TEXT NOT NULL,
     ord            INTEGER NOT NULL,
     position       INTEGER NOT NULL DEFAULT 0,
     due            TEXT NOT NULL,
     stability      REAL NOT NULL DEFAULT 0,
     difficulty     REAL NOT NULL DEFAULT 0,
     elapsed_days   REAL NOT NULL DEFAULT 0,
     scheduled_days INTEGER NOT NULL DEFAULT 0,
     learning_steps INTEGER NOT NULL DEFAULT 0,
     reps           INTEGER NOT NULL DEFAULT 0,
     lapses         INTEGER NOT NULL DEFAULT 0,
     state          INTEGER NOT NULL DEFAULT 0,
     last_review    TEXT,
     suspended      INTEGER NOT NULL DEFAULT 0,
     buried_until   TEXT,
     flag           INTEGER NOT NULL DEFAULT 0,
     created_at     TEXT NOT NULL,
     UNIQUE (note_id, ord)
   )`,
  `CREATE INDEX IF NOT EXISTS fc_cards_deck ON fc_cards (owner, deck_id, state, due)`,
  `CREATE TABLE IF NOT EXISTS fc_reviews (
     id          TEXT PRIMARY KEY,
     owner       TEXT NOT NULL,
     card_id     TEXT NOT NULL,
     deck_id     TEXT NOT NULL,
     rating      INTEGER NOT NULL,
     prev_state  INTEGER NOT NULL,
     cram        INTEGER NOT NULL DEFAULT 0,
     at          TEXT NOT NULL,
     duration_ms INTEGER NOT NULL DEFAULT 0,
     snapshot    TEXT NOT NULL
   )`,
  `CREATE INDEX IF NOT EXISTS fc_reviews_at ON fc_reviews (owner, at)`,
  `CREATE INDEX IF NOT EXISTS fc_reviews_card ON fc_reviews (card_id)`,
  `CREATE TABLE IF NOT EXISTS fc_media (
     owner      TEXT NOT NULL,
     name       TEXT NOT NULL,
     mime       TEXT NOT NULL,
     size       INTEGER NOT NULL,
     hash       TEXT NOT NULL,
     data       BLOB NOT NULL,
     created_at TEXT NOT NULL,
     PRIMARY KEY (owner, name)
   )`,
  `CREATE TABLE IF NOT EXISTS fc_api_keys (
     id           TEXT PRIMARY KEY,
     owner        TEXT NOT NULL,
     label        TEXT NOT NULL,
     prefix       TEXT NOT NULL,
     hash         TEXT NOT NULL UNIQUE,
     created_at   TEXT NOT NULL,
     last_used_at TEXT
   )`,
];

let ready: Promise<unknown> | null = null;

export function ensureSchema(): Promise<unknown> {
  ready ??= getDb()
    .batch(STATEMENTS, 'write')
    .catch((err) => {
      ready = null;
      throw err;
    });
  return ready;
}
