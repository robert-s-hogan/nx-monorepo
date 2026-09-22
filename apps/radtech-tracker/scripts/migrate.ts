// Run once to create the table: pnpm migrate:radtech-tracker
// Requires RADTECH_TRACKER_TURSO_DATABASE_URL / RADTECH_TRACKER_TURSO_AUTH_TOKEN
// in the environment (e.g. via .env.local).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.RADTECH_TRACKER_TURSO_DATABASE_URL;
const authToken = process.env.RADTECH_TRACKER_TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing RADTECH_TRACKER_TURSO_DATABASE_URL or RADTECH_TRACKER_TURSO_AUTH_TOKEN — copy .env.example to .env.local and fill them in.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

const schema = [
  // One row per signed-in user, holding the whole {terms, c, ui} blob as
  // JSON. Keyed by email rather than a numeric id since the app has no
  // other concept of a user account beyond "who signed in".
  `CREATE TABLE IF NOT EXISTS progress (
    email       TEXT PRIMARY KEY,
    data        TEXT    NOT NULL,
    updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,
];

async function migrate() {
  for (const stmt of schema) {
    await db.execute(stmt);
  }
  console.log('radtech-tracker: migration complete.');
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
