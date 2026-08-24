// Run once to add player_team: pnpm migrate:play2winff:player-team
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
  // Manual team correction, separate from (and taking priority over) the
  // team parsed from the rankings paste or backfilled from Sleeper ADP —
  // for players missing team data entirely, or with a wrong/stale team.
  await db.execute(`CREATE TABLE IF NOT EXISTS player_team (
    name_canon  TEXT PRIMARY KEY,
    team        TEXT NOT NULL,
    updated_at  TEXT NOT NULL DEFAULT (datetime('now'))
  )`);
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
