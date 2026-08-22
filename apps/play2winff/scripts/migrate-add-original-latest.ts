// Run once to move ranking_snapshots to the Original/Latest model:
// pnpm migrate:play2winff:add-original-latest
// Requires TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
//
// SQLite can't ALTER a CHECK/UNIQUE constraint in place, so this rebuilds
// ranking_snapshots (see scripts/migrate.ts) with the new `role` column and
// UNIQUE(list_type, role) constraint. This script refuses to run if either
// table already has rows — it's only safe as a schema-only rebuild; it does
// not attempt to preserve/migrate existing snapshot data.
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
  const snapCount = await db.execute(
    `SELECT COUNT(*) as n FROM ranking_snapshots`
  );
  const rankCount = await db.execute(`SELECT COUNT(*) as n FROM rankings`);
  const snapN = snapCount.rows[0]['n'] as number;
  const rankN = rankCount.rows[0]['n'] as number;
  console.log(
    `ranking_snapshots has ${snapN} row(s), rankings has ${rankN} row(s).`
  );

  if (snapN > 0 || rankN > 0) {
    console.error(
      'Refusing to run: this rebuild does not preserve existing rows. ' +
        'Both tables must be empty first.'
    );
    process.exit(1);
  }

  console.log('Rebuilding ranking_snapshots with the role column…');
  await db.execute(`DROP TABLE IF EXISTS rankings`);
  await db.execute(`DROP TABLE IF EXISTS ranking_snapshots`);

  await db.execute(`CREATE TABLE ranking_snapshots (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    list_type   TEXT    NOT NULL CHECK(list_type IN ('ppr','superflex')),
    role        TEXT    CHECK(role IN ('original','latest')),
    label       TEXT    NOT NULL,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    UNIQUE(list_type, role)
  )`);

  await db.execute(`CREATE TABLE rankings (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    snapshot_id INTEGER NOT NULL REFERENCES ranking_snapshots(id) ON DELETE CASCADE,
    rank        INTEGER NOT NULL,
    name        TEXT    NOT NULL,
    name_canon  TEXT    NOT NULL,
    team        TEXT,
    position    TEXT,
    UNIQUE(snapshot_id, rank)
  )`);

  await db.execute(
    `CREATE INDEX IF NOT EXISTS idx_rankings_snapshot ON rankings(snapshot_id)`
  );
  await db.execute(
    `CREATE INDEX IF NOT EXISTS idx_rankings_name ON rankings(name_canon)`
  );

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
