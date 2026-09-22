// Server-only DB access for a signed-in user's tracker progress. Called
// from pages/api/progress.ts. One row per email, holding the exact
// {terms, c, ui} blob the client reads/writes as a whole — there's no
// per-course table, since only one person's data lives here and the whole
// blob is small.
import { db } from './db';
import { blankState } from '../reqMath';
import type { ProgressState } from '../../types';

export async function fetchProgress(email: string): Promise<ProgressState> {
  const result = await db.execute({
    sql: 'SELECT data FROM progress WHERE email = ?',
    args: [email],
  });
  const row = result.rows[0];
  if (!row) return blankState();
  try {
    return JSON.parse(row.data as string) as ProgressState;
  } catch {
    return blankState();
  }
}

export async function saveProgress(
  email: string,
  data: ProgressState
): Promise<void> {
  await db.execute({
    sql: `INSERT INTO progress (email, data, updated_at)
          VALUES (?, ?, datetime('now'))
          ON CONFLICT(email) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`,
    args: [email, JSON.stringify(data)],
  });
}
