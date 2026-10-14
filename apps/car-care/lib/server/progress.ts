// Server-only DB access for a signed-in user's guide progress. Called from
// pages/api/progress.ts. One row per email, holding the whole {fields, done}
// blob as JSON — same shape as radtech-tracker's progress table.
import { db } from './db';
import { blankState } from '../content';
import type { ProgressState } from '../../types';

export async function fetchProgress(email: string): Promise<ProgressState> {
  const result = await db.execute({
    sql: 'SELECT data FROM car_care_progress WHERE email = ?',
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
    sql: `INSERT INTO car_care_progress (email, data, updated_at)
          VALUES (?, ?, datetime('now'))
          ON CONFLICT(email) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`,
    args: [email, JSON.stringify(data)],
  });
}
