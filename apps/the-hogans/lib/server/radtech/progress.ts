// Server-only DB access for Dom's RadTech tracker. Called from
// pages/api/dom/radtech-progress.ts. It's one shared tracker: everyone who
// can open /dom reads and writes the same row, holding the whole
// {terms, c, ui} blob as JSON.
//
// Table (created by the old radtech-tracker app's migration):
//   CREATE TABLE progress (
//     email      TEXT PRIMARY KEY,  -- row key; holds TRACKER_KEY now
//     data       TEXT NOT NULL,
//     updated_at TEXT NOT NULL DEFAULT (datetime('now'))
//   )
// Rows from the per-email era are left in place as a backup.
import { getDb } from './db';
import { blankState } from '../../../components/dom/radtech/reqMath';
import type { ProgressState } from '../../../components/dom/radtech/types';

const TRACKER_KEY = 'shared:dom';

export async function fetchProgress(): Promise<ProgressState> {
  const result = await getDb().execute({
    sql: 'SELECT data FROM progress WHERE email = ?',
    args: [TRACKER_KEY],
  });
  const row = result.rows[0];
  if (!row) return blankState();
  try {
    return JSON.parse(row.data as string) as ProgressState;
  } catch {
    return blankState();
  }
}

export async function saveProgress(data: ProgressState): Promise<void> {
  await getDb().execute({
    sql: `INSERT INTO progress (email, data, updated_at)
          VALUES (?, ?, datetime('now'))
          ON CONFLICT(email) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`,
    args: [TRACKER_KEY, JSON.stringify(data)],
  });
}
