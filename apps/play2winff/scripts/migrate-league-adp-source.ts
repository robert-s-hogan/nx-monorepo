// Run once to add adp_source to league_profiles: pnpm migrate:play2winff:league-adp-source
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
  const info = await db.execute(`PRAGMA table_info(league_profiles)`);
  const hasColumn = info.rows.some((r) => r.name === 'adp_source');
  if (hasColumn) {
    console.log('adp_source column already present, nothing to do.');
    return;
  }
  await db.execute(
    `ALTER TABLE league_profiles ADD COLUMN adp_source TEXT NOT NULL DEFAULT 'sleeper'`
  );
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
