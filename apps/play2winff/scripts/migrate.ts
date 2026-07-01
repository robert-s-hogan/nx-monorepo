// Run once to create all tables: pnpm migrate:play2winff
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

const schema = [
  // Each paste import creates one snapshot
  `CREATE TABLE IF NOT EXISTS ranking_snapshots (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    list_type   TEXT    NOT NULL CHECK(list_type IN ('ppr','superflex')),
    label       TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  // One row per player per snapshot (up to 300)
  `CREATE TABLE IF NOT EXISTS rankings (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    snapshot_id INTEGER NOT NULL REFERENCES ranking_snapshots(id) ON DELETE CASCADE,
    rank        INTEGER NOT NULL,
    name        TEXT    NOT NULL,
    name_canon  TEXT    NOT NULL,
    team        TEXT,
    position    TEXT,
    UNIQUE(snapshot_id, rank)
  )`,

  // Saved league configurations
  `CREATE TABLE IF NOT EXISTS league_profiles (
    id                 INTEGER PRIMARY KEY AUTOINCREMENT,
    name               TEXT    NOT NULL,
    teams              INTEGER NOT NULL DEFAULT 12,
    bench_spots        INTEGER NOT NULL DEFAULT 6,
    roster_config      TEXT    NOT NULL,
    default_list_type  TEXT    NOT NULL DEFAULT 'ppr',
    created_at         TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  // Free-text notes on any player, added any time
  `CREATE TABLE IF NOT EXISTS player_notes (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name_canon  TEXT NOT NULL,
    note        TEXT NOT NULL,
    created_at  TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE INDEX IF NOT EXISTS idx_rankings_snapshot ON rankings(snapshot_id)`,
  `CREATE INDEX IF NOT EXISTS idx_rankings_name     ON rankings(name_canon)`,
  `CREATE INDEX IF NOT EXISTS idx_notes_name        ON player_notes(name_canon)`,
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
