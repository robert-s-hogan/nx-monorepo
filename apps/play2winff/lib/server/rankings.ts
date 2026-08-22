// Server-only DB access for rankings/snapshots. Called from pages/api/snapshots/*.
import { db } from './db';
import type {
  ListType,
  ParsedRow,
  RankingSnapshot,
  SnapshotRole,
} from '../rankings';

function formatLabel(listType: ListType, role: SnapshotRole): string {
  const date = new Date().toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  const roleLabel = role === 'original' ? 'Original' : 'Latest';
  return `${listType.toUpperCase()} ${roleLabel} — ${date}`;
}

export class OriginalAlreadySetError extends Error {}

// role 'latest' replaces the existing latest snapshot for this list_type in
// place (delete then insert — DELETE cascades its rankings rows via the FK).
// role 'original' is insert-only: throws if one already exists for this
// list_type, since Original is meant to be set exactly once.
export async function commitSnapshot(
  rows: ParsedRow[],
  listType: ListType,
  role: SnapshotRole
): Promise<number> {
  if (role === 'original') {
    const existing = await db.execute({
      sql: `SELECT id FROM ranking_snapshots WHERE list_type=? AND role='original'`,
      args: [listType],
    });
    if (existing.rows.length > 0) {
      throw new OriginalAlreadySetError(
        `An Original ${listType} snapshot already exists`
      );
    }
  } else {
    await db.execute({
      sql: `DELETE FROM ranking_snapshots WHERE list_type=? AND role='latest'`,
      args: [listType],
    });
  }

  const label = formatLabel(listType, role);
  const snapshotResult = await db.execute({
    sql: `INSERT INTO ranking_snapshots (list_type, role, label) VALUES (?, ?, ?)`,
    args: [listType, role, label],
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

export async function fetchOriginalAndLatest(
  listType: ListType
): Promise<{ original: RankingSnapshot | null; latest: RankingSnapshot | null }> {
  const result = await db.execute({
    sql: `SELECT s.*, COUNT(r.id) as count
          FROM ranking_snapshots s
          LEFT JOIN rankings r ON r.snapshot_id = s.id
          WHERE s.list_type = ? AND s.role IN ('original','latest')
          GROUP BY s.id`,
    args: [listType],
  });
  const snapshots = result.rows.map((r) => ({
    id: r.id as number,
    list_type: r.list_type as ListType,
    role: r.role as SnapshotRole,
    label: r.label as string,
    created_at: r.created_at as string,
    count: r.count as number,
  }));
  return {
    original: snapshots.find((s) => s.role === 'original') ?? null,
    latest: snapshots.find((s) => s.role === 'latest') ?? null,
  };
}
