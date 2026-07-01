// Server-only DB access for league profiles. Called from pages/api/leagues/*.
import { db } from './db';
import type { LeagueProfile } from '../leagues';

export async function fetchLeagues(): Promise<LeagueProfile[]> {
  const result = await db.execute(
    'SELECT * FROM league_profiles ORDER BY created_at ASC'
  );
  return result.rows.map((r) => ({
    id: r.id as number,
    name: r.name as string,
    teams: r.teams as number,
    bench_spots: r.bench_spots as number,
    roster_config: JSON.parse(r.roster_config as string),
    default_list_type: r.default_list_type as 'ppr' | 'superflex',
    created_at: r.created_at as string,
  }));
}

export async function saveLeague(
  profile: Omit<LeagueProfile, 'id' | 'created_at'>
): Promise<number> {
  const result = await db.execute({
    sql: `INSERT INTO league_profiles (name, teams, bench_spots, roster_config, default_list_type)
          VALUES (?, ?, ?, ?, ?)`,
    args: [
      profile.name,
      profile.teams,
      profile.bench_spots,
      JSON.stringify(profile.roster_config),
      profile.default_list_type,
    ],
  });
  return Number(result.lastInsertRowid);
}

export async function updateLeague(
  id: number,
  profile: Omit<LeagueProfile, 'id' | 'created_at'>
): Promise<void> {
  await db.execute({
    sql: `UPDATE league_profiles
          SET name=?, teams=?, bench_spots=?, roster_config=?, default_list_type=?
          WHERE id=?`,
    args: [
      profile.name,
      profile.teams,
      profile.bench_spots,
      JSON.stringify(profile.roster_config),
      profile.default_list_type,
      id,
    ],
  });
}

export async function deleteLeague(id: number): Promise<void> {
  await db.execute({
    sql: 'DELETE FROM league_profiles WHERE id=?',
    args: [id],
  });
}
