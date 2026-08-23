// Server-only draft-board data access. Called from pages/api/snapshots/[id].ts
// and pages/api/player-notes/*.
import { db } from './db';
import { canonName } from '../rankings';
import type { CustomTag } from '../tags';

export type PlayerInjury = {
  injury: string;
  expectedReturn: string | null;
  onIR: boolean;
};

export type DraftPlayer = {
  rank: number;
  name: string;
  name_canon: string;
  team: string | null;
  position: string | null;
  note: string | null;
  dropped: boolean;
  lastRank: number | null;
  // Rank in the Original snapshot (the `prevSnapshotId` passed to
  // loadDraftPlayers), regardless of whether the player is still present in
  // the current snapshot. Null if they weren't in the Original list at all.
  originalRank: number | null;
  tags: CustomTag[];
  injury: PlayerInjury | null;
  riskFactor: number | null;
  sleeperRank: number | null;
};

async function loadTagsByCanon(): Promise<Map<string, CustomTag[]>> {
  const result = await db.execute(`
    SELECT pt.name_canon, ct.id, ct.name, ct.icon, ct.color
    FROM player_tags pt
    JOIN custom_tags ct ON ct.id = pt.tag_id
    ORDER BY ct.name ASC
  `);
  const byCanon = new Map<string, CustomTag[]>();
  for (const r of result.rows) {
    const canon = r.name_canon as string;
    const list = byCanon.get(canon) ?? [];
    list.push({
      id: r.id as number,
      name: r.name as string,
      icon: r.icon as string,
      color: r.color as string,
    });
    byCanon.set(canon, list);
  }
  return byCanon;
}

async function loadInjuriesByCanon(): Promise<Map<string, PlayerInjury>> {
  const result = await db.execute(
    `SELECT name_canon, injury, expected_return, on_ir FROM player_injuries`
  );
  const byCanon = new Map<string, PlayerInjury>();
  for (const r of result.rows) {
    byCanon.set(r.name_canon as string, {
      injury: r.injury as string,
      expectedReturn: r.expected_return as string | null,
      onIR: Boolean(r.on_ir),
    });
  }
  return byCanon;
}

async function loadRiskByCanon(): Promise<Map<string, number>> {
  const result = await db.execute(`SELECT name_canon, value FROM player_risk`);
  const byCanon = new Map<string, number>();
  for (const r of result.rows) {
    byCanon.set(r.name_canon as string, r.value as number);
  }
  return byCanon;
}

type SleeperAdpEntry = { rank: number; team: string | null };

async function loadSleeperAdpByCanon(): Promise<Map<string, SleeperAdpEntry>> {
  const result = await db.execute(
    `SELECT name_canon, rank, team FROM player_sleeper_adp`
  );
  const byCanon = new Map<string, SleeperAdpEntry>();
  for (const r of result.rows) {
    byCanon.set(r.name_canon as string, {
      rank: r.rank as number,
      team: r.team as string | null,
    });
  }
  return byCanon;
}

type RankingRow = {
  rank: number;
  name: string;
  name_canon: string;
  team: string | null;
  position: string | null;
};

export async function loadDraftPlayers(
  snapshotId: number,
  prevSnapshotId: number | null
): Promise<DraftPlayer[]> {
  const currResult = await db.execute({
    sql: `SELECT rank, name, name_canon, team, position
          FROM rankings WHERE snapshot_id=? ORDER BY rank ASC`,
    args: [snapshotId],
  });
  const currRows = currResult.rows as unknown as RankingRow[];

  const notesResult = await db.execute(`
    SELECT name_canon, note
    FROM player_notes
    WHERE id IN (
      SELECT MAX(id) FROM player_notes GROUP BY name_canon
    )
  `);
  const notesByCanon = new Map<string, string>();
  for (const r of notesResult.rows) {
    notesByCanon.set(r.name_canon as string, r.note as string);
  }

  const tagsByCanon = await loadTagsByCanon();
  const injuriesByCanon = await loadInjuriesByCanon();
  const riskByCanon = await loadRiskByCanon();
  const sleeperAdpByCanon = await loadSleeperAdpByCanon();

  const makePlayer = (
    r: RankingRow,
    overrides: Pick<DraftPlayer, 'rank' | 'dropped' | 'lastRank' | 'originalRank'>
  ): DraftPlayer => {
    const sleeperAdp = sleeperAdpByCanon.get(r.name_canon);
    return {
      name: r.name,
      name_canon: r.name_canon,
      // The main rankings paste doesn't always carry a team column (fused
      // "RB1"-style position with no team token) — fall back to the team
      // captured from the separately-pasted Sleeper ADP list when needed.
      team: r.team ?? sleeperAdp?.team ?? null,
      position: r.position,
      note: notesByCanon.get(r.name_canon) ?? null,
      tags: tagsByCanon.get(r.name_canon) ?? [],
      injury: injuriesByCanon.get(r.name_canon) ?? null,
      riskFactor: riskByCanon.get(r.name_canon) ?? null,
      sleeperRank: sleeperAdp?.rank ?? null,
      ...overrides,
    };
  };

  if (!prevSnapshotId) {
    return currRows.map((r) =>
      makePlayer(r, {
        rank: r.rank,
        dropped: false,
        lastRank: null,
        originalRank: null,
      })
    );
  }

  const prevResult = await db.execute({
    sql: `SELECT rank, name, name_canon, team, position
          FROM rankings WHERE snapshot_id=? ORDER BY rank ASC`,
    args: [prevSnapshotId],
  });
  const prevRows = prevResult.rows as unknown as RankingRow[];
  const prevRankByCanon = new Map(prevRows.map((r) => [r.name_canon, r.rank]));

  const current: DraftPlayer[] = currRows.map((r) =>
    makePlayer(r, {
      rank: r.rank,
      dropped: false,
      lastRank: null,
      originalRank: prevRankByCanon.get(r.name_canon) ?? null,
    })
  );

  // A Latest paste doesn't have to cover the full Original range (e.g. the
  // user only pasted ranks 7-160) — so "in Original, not in Latest" is only
  // a real drop if it falls inside the range Latest actually covers.
  // Outside that range, Original wasn't updated either way, so the player
  // just carries forward at their Original rank/position unchanged.
  const currentCanons = new Set(currRows.map((r) => r.name_canon));
  const currentRanks = currRows.map((r) => r.rank);
  const minCovered = currentRanks.length ? Math.min(...currentRanks) : Infinity;
  const maxCovered = currentRanks.length ? Math.max(...currentRanks) : -Infinity;

  for (const r of prevRows) {
    if (currentCanons.has(r.name_canon)) continue;
    const inCoveredRange = r.rank >= minCovered && r.rank <= maxCovered;
    current.push(
      makePlayer(r, {
        rank: inCoveredRange ? 9999 : r.rank,
        dropped: inCoveredRange,
        lastRank: inCoveredRange ? r.rank : null,
        originalRank: r.rank,
      })
    );
  }

  return current;
}

export async function saveNote(name: string, note: string): Promise<void> {
  const canon = canonName(name);
  await db.execute({
    sql: `INSERT INTO player_notes (name_canon, note) VALUES (?, ?)`,
    args: [canon, note.trim()],
  });
}

export async function fetchNotesForPlayer(
  name: string
): Promise<{ note: string; created_at: string }[]> {
  const canon = canonName(name);
  const result = await db.execute({
    sql: `SELECT note, created_at FROM player_notes WHERE name_canon=? ORDER BY created_at DESC`,
    args: [canon],
  });
  return result.rows.map((r) => ({
    note: r.note as string,
    created_at: r.created_at as string,
  }));
}

export async function fetchTagsForPlayer(name: string): Promise<CustomTag[]> {
  const canon = canonName(name);
  const result = await db.execute({
    sql: `SELECT ct.id, ct.name, ct.icon, ct.color
          FROM player_tags pt
          JOIN custom_tags ct ON ct.id = pt.tag_id
          WHERE pt.name_canon=?
          ORDER BY ct.name ASC`,
    args: [canon],
  });
  return result.rows.map((r) => ({
    id: r.id as number,
    name: r.name as string,
    icon: r.icon as string,
    color: r.color as string,
  }));
}

// Presence of a row = tag applied; toggling off deletes the row.
export async function toggleTagForPlayer(
  name: string,
  tagId: number
): Promise<CustomTag[]> {
  const canon = canonName(name);
  const existing = await db.execute({
    sql: `SELECT 1 FROM player_tags WHERE name_canon=? AND tag_id=?`,
    args: [canon, tagId],
  });
  if (existing.rows.length > 0) {
    await db.execute({
      sql: `DELETE FROM player_tags WHERE name_canon=? AND tag_id=?`,
      args: [canon, tagId],
    });
  } else {
    await db.execute({
      sql: `INSERT INTO player_tags (name_canon, tag_id) VALUES (?, ?)`,
      args: [canon, tagId],
    });
  }
  return fetchTagsForPlayer(name);
}

export async function fetchInjuryForPlayer(
  name: string
): Promise<PlayerInjury | null> {
  const canon = canonName(name);
  const result = await db.execute({
    sql: `SELECT injury, expected_return, on_ir FROM player_injuries WHERE name_canon=?`,
    args: [canon],
  });
  if (!result.rows.length) return null;
  return {
    injury: result.rows[0]['injury'] as string,
    expectedReturn: result.rows[0]['expected_return'] as string | null,
    onIR: Boolean(result.rows[0]['on_ir']),
  };
}

export async function setInjuryForPlayer(
  name: string,
  injury: string,
  expectedReturn: string | null,
  onIR: boolean
): Promise<PlayerInjury> {
  const canon = canonName(name);
  await db.execute({
    sql: `INSERT INTO player_injuries (name_canon, injury, expected_return, on_ir, updated_at)
          VALUES (?, ?, ?, ?, datetime('now'))
          ON CONFLICT(name_canon) DO UPDATE
          SET injury=excluded.injury, expected_return=excluded.expected_return, on_ir=excluded.on_ir, updated_at=excluded.updated_at`,
    args: [canon, injury.trim(), expectedReturn?.trim() || null, onIR ? 1 : 0],
  });
  return { injury: injury.trim(), expectedReturn: expectedReturn?.trim() || null, onIR };
}

export async function clearInjuryForPlayer(name: string): Promise<void> {
  const canon = canonName(name);
  await db.execute({
    sql: `DELETE FROM player_injuries WHERE name_canon=?`,
    args: [canon],
  });
}

export async function fetchRiskForPlayer(name: string): Promise<number | null> {
  const canon = canonName(name);
  const result = await db.execute({
    sql: `SELECT value FROM player_risk WHERE name_canon=?`,
    args: [canon],
  });
  if (!result.rows.length) return null;
  return result.rows[0]['value'] as number;
}

export async function setRiskForPlayer(
  name: string,
  value: number
): Promise<number> {
  const canon = canonName(name);
  await db.execute({
    sql: `INSERT INTO player_risk (name_canon, value, updated_at)
          VALUES (?, ?, datetime('now'))
          ON CONFLICT(name_canon) DO UPDATE
          SET value=excluded.value, updated_at=excluded.updated_at`,
    args: [canon, value],
  });
  return value;
}

export async function clearRiskForPlayer(name: string): Promise<void> {
  const canon = canonName(name);
  await db.execute({
    sql: `DELETE FROM player_risk WHERE name_canon=?`,
    args: [canon],
  });
}

// Upsert, not delete-then-reinsert — a partial re-paste (e.g. just the top
// 50 of Sleeper's queue) shouldn't wipe ADP data for everyone else.
export async function replaceSleeperAdp(
  rows: { name_canon: string; rank: number; team: string | null }[]
): Promise<void> {
  const BATCH = 50;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const placeholders = chunk.map(() => `(?, ?, ?, datetime('now'))`).join(',');
    const args: (string | number | null)[] = [];
    for (const r of chunk) {
      args.push(r.name_canon, r.rank, r.team);
    }
    await db.execute({
      sql: `INSERT INTO player_sleeper_adp (name_canon, rank, team, updated_at)
            VALUES ${placeholders}
            ON CONFLICT(name_canon) DO UPDATE
            SET rank=excluded.rank, team=excluded.team, updated_at=excluded.updated_at`,
      args,
    });
  }
}

export async function fetchSleeperAdpStatus(): Promise<{
  count: number;
  lastUpdated: string | null;
}> {
  const result = await db.execute(
    `SELECT COUNT(*) as count, MAX(updated_at) as lastUpdated FROM player_sleeper_adp`
  );
  const row = result.rows[0];
  return {
    count: (row?.count as number) ?? 0,
    lastUpdated: (row?.lastUpdated as string | null) ?? null,
  };
}
