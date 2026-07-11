// Run once to create all tables: pnpm migrate:neuro-fit
// Requires NEURO_FIT_TURSO_DATABASE_URL / NEURO_FIT_TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.NEURO_FIT_TURSO_DATABASE_URL;
const authToken = process.env.NEURO_FIT_TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing NEURO_FIT_TURSO_DATABASE_URL or NEURO_FIT_TURSO_AUTH_TOKEN — copy .env.example to .env.local and fill them in.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

const schema = [
  // Reusable exercise library — one YouTube how-to video per exercise,
  // shared across any number of playlists.
  `CREATE TABLE IF NOT EXISTS exercises (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    name              TEXT    NOT NULL,
    youtube_video_id  TEXT    NOT NULL,
    notes             TEXT,
    created_at        TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  // A named, ordered collection of exercises.
  `CREATE TABLE IF NOT EXISTS playlists (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    name         TEXT    NOT NULL,
    description  TEXT,
    created_at   TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  // One row per exercise-in-a-playlist. sets/weight/duration are all
  // nullable and independent — a given item might be timed (a plank),
  // weighted (a bench press), or bodyweight-only, in any combination.
  `CREATE TABLE IF NOT EXISTS playlist_items (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    playlist_id       INTEGER NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
    exercise_id       INTEGER NOT NULL REFERENCES exercises(id) ON DELETE RESTRICT,
    position          INTEGER NOT NULL,
    sets              INTEGER,
    weight            REAL,
    weight_unit       TEXT CHECK(weight_unit IN ('lb','kg')),
    duration_seconds  INTEGER,
    created_at        TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE INDEX IF NOT EXISTS idx_playlist_items_playlist ON playlist_items(playlist_id)`,
  `CREATE INDEX IF NOT EXISTS idx_playlist_items_exercise ON playlist_items(exercise_id)`,
];

async function main() {
  console.log('Running migrations…');
  for (const sql of schema) {
    await db.execute(sql);
    const label =
      sql.match(/(TABLE|INDEX)\s+IF NOT EXISTS\s+(\w+)/i)?.[2] ?? 'stmt';
    console.log(`  ✓ ${label}`);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
