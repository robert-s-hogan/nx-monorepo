// Run once to replace the fixed player_flags taxonomy with custom_tags +
// player_tags + player_injuries: pnpm migrate:play2winff:custom-tags
// Requires TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
//
// The old player_flags table is dropped outright — the user explicitly
// wants a clean slate, not a preserved-but-unused table. This is
// destructive; it prints the row count being discarded so it's visible in
// the output.
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
  const existing = await db.execute(`SELECT COUNT(*) as n FROM player_flags`);
  console.log(
    `Dropping player_flags (discarding ${existing.rows[0]['n']} row(s))…`
  );
  await db.execute(`DROP TABLE IF EXISTS player_flags`);

  console.log('Creating custom_tags, player_tags, player_injuries…');

  await db.execute(`CREATE TABLE IF NOT EXISTS custom_tags (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL UNIQUE,
    icon        TEXT    NOT NULL,
    color       TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`);

  await db.execute(`CREATE TABLE IF NOT EXISTS player_tags (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name_canon  TEXT    NOT NULL,
    tag_id      INTEGER NOT NULL REFERENCES custom_tags(id) ON DELETE CASCADE,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    UNIQUE(name_canon, tag_id)
  )`);

  await db.execute(`CREATE TABLE IF NOT EXISTS player_injuries (
    name_canon      TEXT PRIMARY KEY,
    injury          TEXT NOT NULL,
    expected_return TEXT,
    updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
  )`);

  await db.execute(
    `CREATE INDEX IF NOT EXISTS idx_player_tags_name ON player_tags(name_canon)`
  );

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
