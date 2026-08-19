// Server-only draft-board data access. Called from pages/api/snapshots/[id].ts
// and pages/api/player-notes/*.
import { db } from './db';
import { canonName } from '../rankings';
import {
  BooleanFlag,
  FlagType,
  PlayerFlags,
  emptyFlags,
} from '../flags';

export type DraftPlayer = {
  rank: number;
  name: string;
  name_canon: string;
  team: string | null;
  position: string | null;
  note: string | null;
  dropped: boolean;
  lastRank: number | null;
  flags: PlayerFlags;
};

async function loadFlagsByCanon(): Promise<Map<string, PlayerFlags>> {
  const result = await db.execute(
    `SELECT name_canon, flag, value FROM player_flags`
  );
  const byCanon = new Map<string, PlayerFlags>();
  for (const r of result.rows) {
    const canon = r.name_canon as string;
    const flag = r.flag as FlagType;
    const flags = byCanon.get(canon) ?? emptyFlags();
    if (flag === 'risk_factor') {
      flags.risk_factor = r.value as number;
    } else {
      flags[flag as BooleanFlag] = true;
    }
    byCanon.set(canon, flags);
  }
  return byCanon;
}

export async function loadDraftPlayers(
  snapshotId: number,
  prevSnapshotId: number | null
): Promise<DraftPlayer[]> {
  const currResult = await db.execute({
    sql: `SELECT rank, name, name_canon, team, position
          FROM rankings WHERE snapshot_id=? ORDER BY rank ASC`,
    args: [snapshotId],
  });

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

  const flagsByCanon = await loadFlagsByCanon();

  const current: DraftPlayer[] = currResult.rows.map((r) => ({
    rank: r.rank as number,
    name: r.name as string,
    name_canon: r.name_canon as string,
    team: r.team as string | null,
    position: r.position as string | null,
    note: notesByCanon.get(r.name_canon as string) ?? null,
    dropped: false,
    lastRank: null,
    flags: flagsByCanon.get(r.name_canon as string) ?? emptyFlags(),
  }));

  if (!prevSnapshotId) return current;

  const prevResult = await db.execute({
    sql: `SELECT rank, name, name_canon, team, position
          FROM rankings WHERE snapshot_id=? ORDER BY rank ASC`,
    args: [prevSnapshotId],
  });

  const currentCanons = new Set(current.map((p) => p.name_canon));

  for (const r of prevResult.rows) {
    const canon = r.name_canon as string;
    if (!currentCanons.has(canon)) {
      current.push({
        rank: 9999,
        name: r.name as string,
        name_canon: canon,
        team: r.team as string | null,
        position: r.position as string | null,
        note: notesByCanon.get(canon) ?? null,
        dropped: true,
        lastRank: r.rank as number,
        flags: flagsByCanon.get(canon) ?? emptyFlags(),
      });
    }
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

export async function fetchFlagsForPlayer(name: string): Promise<PlayerFlags> {
  const canon = canonName(name);
  const result = await db.execute({
    sql: `SELECT flag, value FROM player_flags WHERE name_canon=?`,
    args: [canon],
  });
  const flags = emptyFlags();
  for (const r of result.rows) {
    const flag = r.flag as FlagType;
    if (flag === 'risk_factor') {
      flags.risk_factor = r.value as number;
    } else {
      flags[flag as BooleanFlag] = true;
    }
  }
  return flags;
}

// Presence of a row = on; toggling off deletes the row.
export async function toggleBooleanFlag(
  name: string,
  flag: BooleanFlag
): Promise<PlayerFlags> {
  const canon = canonName(name);
  const existing = await db.execute({
    sql: `SELECT 1 FROM player_flags WHERE name_canon=? AND flag=?`,
    args: [canon, flag],
  });
  if (existing.rows.length > 0) {
    await db.execute({
      sql: `DELETE FROM player_flags WHERE name_canon=? AND flag=?`,
      args: [canon, flag],
    });
  } else {
    await db.execute({
      sql: `INSERT INTO player_flags (name_canon, flag) VALUES (?, ?)`,
      args: [canon, flag],
    });
  }
  return fetchFlagsForPlayer(name);
}

export async function setRiskFactor(
  name: string,
  value: number | null
): Promise<PlayerFlags> {
  const canon = canonName(name);
  if (value == null) {
    await db.execute({
      sql: `DELETE FROM player_flags WHERE name_canon=? AND flag='risk_factor'`,
      args: [canon],
    });
  } else {
    await db.execute({
      sql: `INSERT INTO player_flags (name_canon, flag, value) VALUES (?, 'risk_factor', ?)
            ON CONFLICT(name_canon, flag) DO UPDATE SET value=excluded.value`,
      args: [canon, value],
    });
  }
  return fetchFlagsForPlayer(name);
}
