// Run once to create the table: pnpm migrate:car-care
// Requires CAR_CARE_TURSO_DATABASE_URL / CAR_CARE_TURSO_AUTH_TOKEN
// in the environment (e.g. via .env.local).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.CAR_CARE_TURSO_DATABASE_URL;
const authToken = process.env.CAR_CARE_TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing CAR_CARE_TURSO_DATABASE_URL or CAR_CARE_TURSO_AUTH_TOKEN — copy .env.example to .env.local and fill them in.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

const schema = [
  // One row per signed-in user, holding the whole {fields, done} blob as
  // JSON. Table name is app-prefixed (not just `progress`) so it can't
  // collide if this ever shares a database with radtech-tracker.
  `CREATE TABLE IF NOT EXISTS car_care_progress (
    email       TEXT PRIMARY KEY,
    data        TEXT    NOT NULL,
    updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,
];

async function migrate() {
  for (const stmt of schema) {
    await db.execute(stmt);
  }
  console.log('car-care: migration complete.');
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
