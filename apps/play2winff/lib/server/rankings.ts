// Server-only DB access for rankings/snapshots. Called from pages/api/snapshots/*.
import { db } from './db';
import type { ListType, ParsedRow, RankingSnapshot } from '../rankings';

export async function commitSnapshot(
  rows: ParsedRow[],
  listType: ListType,
  label: string
): Promise<number> {
  const snapshotResult = await db.execute({
    sql: `INSERT INTO ranking_snapshots (list_type, label) VALUES (?, ?)`,
    args: [listType, label],
  });
  const snapshotId = Number(snapshotResult.lastInsertRowid);

  // Batch insert in groups of 50 to stay under SQLite limits
  const BATCH = 50;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const placeholders = chunk.map(() => '(?,?,?,?,?,?)').join(',');
    const args: (string | number | null)[] = [];
    for (const r of chunk) {
      args.push(snapshotId, r.rank, r.name, r.name_canon, r.team, r.position);
    }
    await db.execute({
      sql: `INSERT INTO rankings (snapshot_id, rank, name, name_canon, team, position)
            VALUES ${placeholders}`,
      args,
    });
  }

  return snapshotId;
}

export async function fetchSnapshots(): Promise<RankingSnapshot[]> {
  const result = await db.execute(`
    SELECT s.*, COUNT(r.id) as count
    FROM ranking_snapshots s
    LEFT JOIN rankings r ON r.snapshot_id = s.id
    GROUP BY s.id
    ORDER BY s.created_at DESC
  `);
  return result.rows.map((r) => ({
    id: r.id as number,
    list_type: r.list_type as ListType,
    label: r.label as string,
    created_at: r.created_at as string,
    count: r.count as number,
  }));
}

export async function deleteSnapshot(id: number): Promise<void> {
  await db.execute({
    sql: 'DELETE FROM ranking_snapshots WHERE id=?',
    args: [id],
  });
}
