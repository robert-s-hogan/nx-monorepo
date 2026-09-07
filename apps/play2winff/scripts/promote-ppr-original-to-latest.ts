// One-off: the 9/4 PPR update landed in the locked Original snapshot (200
// players) while Latest — the snapshot the draft board and every ADP
// comparison actually reads from — was still stuck on the 9/1 paste (160
// players). Copies Original's rows into a fresh Latest snapshot, mirroring
// commitSnapshot()'s role='latest' path in lib/server/rankings.ts (delete
// existing latest, insert new snapshot + rows) so behavior matches a normal
// Import Rankings paste.
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
  const original = await db.execute(
    `SELECT id FROM ranking_snapshots WHERE list_type='ppr' AND role='original'`
  );
  if (original.rows.length === 0) {
    console.error('No PPR Original snapshot found.');
    process.exit(1);
  }
  const originalId = original.rows[0].id as number;

  const rows = await db.execute({
    sql: `SELECT rank, name, name_canon, team, position FROM rankings WHERE snapshot_id=? ORDER BY rank ASC`,
    args: [originalId],
  });
  console.log(`Copying ${rows.rows.length} rows from PPR Original (snapshot ${originalId}) into a new PPR Latest snapshot...`);

  await db.execute(`DELETE FROM ranking_snapshots WHERE list_type='ppr' AND role='latest'`);

  const date = new Date().toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  const snapshotResult = await db.execute({
    sql: `INSERT INTO ranking_snapshots (list_type, role, label) VALUES ('ppr', 'latest', ?)`,
    args: [`PPR Latest — ${date}`],
  });
  const newLatestId = Number(snapshotResult.lastInsertRowid);

  const BATCH = 50;
  for (let i = 0; i < rows.rows.length; i += BATCH) {
    const chunk = rows.rows.slice(i, i + BATCH);
    const placeholders = chunk.map(() => '(?,?,?,?,?,?)').join(',');
    const args: (string | number | null)[] = [];
    for (const r of chunk) {
      args.push(newLatestId, r.rank as number, r.name as string, r.name_canon as string, r.team as string | null, r.position as string | null);
    }
    await db.execute({
      sql: `INSERT INTO rankings (snapshot_id, rank, name, name_canon, team, position) VALUES ${placeholders}`,
      args,
    });
  }

  console.log(`Done. New PPR Latest snapshot id: ${newLatestId}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
