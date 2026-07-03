// Run once to create the recipes table (safe no-op if it already exists,
// which it does — this app reuses the existing turso-recipe-app database):
//   pnpm migrate:recipes
// Requires RECIPES_TURSO_DATABASE_URL / RECIPES_TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.RECIPES_TURSO_DATABASE_URL;
const authToken = process.env.RECIPES_TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing RECIPES_TURSO_DATABASE_URL or RECIPES_TURSO_AUTH_TOKEN — set them in .env.local.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

const schema = [
  `CREATE TABLE IF NOT EXISTS recipes (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT    NOT NULL,
    description TEXT    DEFAULT '',
    servings    TEXT    DEFAULT '',
    prep_time   TEXT    DEFAULT '',
    cook_time   TEXT    DEFAULT '',
    ingredients TEXT    DEFAULT '[]',
    steps       TEXT    DEFAULT '[]',
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
];

async function main() {
  console.log('Running migrations…');
  for (const sql of schema) {
    await db.execute(sql);
    const label = sql.match(/TABLE\s+IF NOT EXISTS\s+(\w+)/i)?.[1] ?? 'stmt';
    console.log(`  ✓ ${label}`);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
