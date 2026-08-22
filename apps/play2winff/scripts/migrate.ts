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
  // Two pinned snapshots per list_type: one locked 'original' (set once,
  // never changed) and one 'latest' (replaced in place on every import).
  // role is nullable so legacy/one-off rows could exist, but the app only
  // ever writes 'original' or 'latest'. UNIQUE(list_type, role) is what
  // enforces "only one of each per list type" — SQLite treats each NULL as
  // distinct, so it doesn't constrain rows with role IS NULL.
  // NOTE: keep in sync with scripts/migrate-add-original-latest.ts, which
  // rebuilds this same table against an already-existing one (SQLite can't
  // ALTER a CHECK/UNIQUE constraint in place, and this CREATE TABLE IF NOT
  // EXISTS is a no-op once the table exists).
  `CREATE TABLE IF NOT EXISTS ranking_snapshots (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    list_type   TEXT    NOT NULL CHECK(list_type IN ('ppr','superflex')),
    role        TEXT    CHECK(role IN ('original','latest')),
    label       TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    UNIQUE(list_type, role)
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

  // User-defined draft-board tags. A tag is created once (name + icon key
  // into lib/tagIcons.ts + auto-assigned color), then applied to any number
  // of players via player_tags. No preset taxonomy, unlike the old
  // player_flags table this replaced.
  `CREATE TABLE IF NOT EXISTS custom_tags (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL UNIQUE,
    icon        TEXT    NOT NULL,
    color       TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  // Presence of a row = tag applied to that player.
  `CREATE TABLE IF NOT EXISTS player_tags (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name_canon  TEXT    NOT NULL,
    tag_id      INTEGER NOT NULL REFERENCES custom_tags(id) ON DELETE CASCADE,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    UNIQUE(name_canon, tag_id)
  )`,

  // One row per player; setting a new injury upserts it, clearing deletes
  // the row. expected_return is free text ("Week 4", "TBD") rather than a
  // strict date, since injury timelines are usually described that way.
  `CREATE TABLE IF NOT EXISTS player_injuries (
    name_canon      TEXT PRIMARY KEY,
    injury          TEXT NOT NULL,
    expected_return TEXT,
    updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  // One row per player; setting a new rating upserts it (0-10), clearing
  // deletes the row.
  `CREATE TABLE IF NOT EXISTS player_risk (
    name_canon  TEXT PRIMARY KEY,
    value       INTEGER NOT NULL CHECK(value BETWEEN 0 AND 10),
    updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE INDEX IF NOT EXISTS idx_rankings_snapshot ON rankings(snapshot_id)`,
  `CREATE INDEX IF NOT EXISTS idx_rankings_name     ON rankings(name_canon)`,
  `CREATE INDEX IF NOT EXISTS idx_notes_name        ON player_notes(name_canon)`,
  `CREATE INDEX IF NOT EXISTS idx_player_tags_name  ON player_tags(name_canon)`,
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
