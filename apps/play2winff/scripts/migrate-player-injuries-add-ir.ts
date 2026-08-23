// Run once to add the `on_ir` column to an existing player_injuries table:
// pnpm migrate:play2winff:player-injuries-add-ir
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
  const info = await db.execute(`PRAGMA table_info(player_injuries)`);
  const hasColumn = info.rows.some((r) => r.name === 'on_ir');
  if (hasColumn) {
    console.log('on_ir column already present, nothing to do.');
    return;
  }
  await db.execute(
    `ALTER TABLE player_injuries ADD COLUMN on_ir INTEGER NOT NULL DEFAULT 0`
  );
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
