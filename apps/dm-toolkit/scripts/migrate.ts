// Run once to create all tables: pnpm migrate:dm-toolkit
// Requires DM_TOOLKIT_TURSO_DATABASE_URL / DM_TOOLKIT_TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.DM_TOOLKIT_TURSO_DATABASE_URL;
const authToken = process.env.DM_TOOLKIT_TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing DM_TOOLKIT_TURSO_DATABASE_URL or DM_TOOLKIT_TURSO_AUTH_TOKEN — set them in .env.local.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

const schema = [
  // Nested/variable-shape character data (stats, ability_categories, random_skills,
  // status_effects) lives in `data` as JSON — read/written wholesale by the editor,
  // never queried column-by-column.
  `CREATE TABLE IF NOT EXISTS characters (
    id          TEXT PRIMARY KEY,
    name        TEXT    NOT NULL,
    data        TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE TABLE IF NOT EXISTS sessions (
    id          TEXT PRIMARY KEY,
    name        TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  // Normalizes Session.active_character_ids so membership changes don't require
  // rewriting a JSON blob.
  `CREATE TABLE IF NOT EXISTS session_characters (
    session_id    TEXT NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
    character_id  TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    PRIMARY KEY (session_id, character_id)
  )`,

  `CREATE INDEX IF NOT EXISTS idx_session_characters_session ON session_characters(session_id)`,
  `CREATE INDEX IF NOT EXISTS idx_session_characters_character ON session_characters(character_id)`,
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
