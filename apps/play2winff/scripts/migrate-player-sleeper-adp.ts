// Run once to add player_sleeper_adp: pnpm migrate:play2winff:sleeper-adp
// Requires TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN — copy .env.example to .env.local and fill them in.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

async function main() {
  await db.execute(`CREATE TABLE IF NOT EXISTS player_sleeper_adp (
    name_canon  TEXT PRIMARY KEY,
    rank        INTEGER NOT NULL,
    updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`);
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
