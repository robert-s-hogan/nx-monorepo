// Server-only DB access for the exercise library. Called from pages/api/exercises/*.
import { db } from './db';
import type { Exercise, ExerciseInput } from '../../types';

function rowToExercise(row: Record<string, unknown>): Exercise {
  return {
    id: Number(row.id),
    name: row.name as string,
    youtube_video_id: row.youtube_video_id as string,
    notes: (row.notes as string) ?? '',
    created_at: row.created_at as string,
  };
}

export async function fetchExercises(): Promise<Exercise[]> {
  const result = await db.execute('SELECT * FROM exercises ORDER BY name ASC');
  return result.rows.map((row) => rowToExercise(row as Record<string, unknown>));
}

export async function fetchExerciseById(id: string): Promise<Exercise | null> {
  const result = await db.execute({
    sql: 'SELECT * FROM exercises WHERE id = ?',
    args: [id],
  });
  const row = result.rows[0];
  if (!row) return null;
  return rowToExercise(row as Record<string, unknown>);
}

export async function insertExercise(input: ExerciseInput): Promise<number> {
  const result = await db.execute({
    sql: 'INSERT INTO exercises (name, youtube_video_id, notes) VALUES (?, ?, ?)',
    args: [input.name, input.youtube_video_id, input.notes || ''],
  });
  return Number(result.lastInsertRowid);
}

export async function updateExercise(
  id: string,
  input: ExerciseInput
): Promise<void> {
  await db.execute({
    sql: 'UPDATE exercises SET name=?, youtube_video_id=?, notes=? WHERE id=?',
    args: [input.name, input.youtube_video_id, input.notes || '', id],
  });
}

export async function deleteExercise(id: string): Promise<void> {
  await db.execute({ sql: 'DELETE FROM exercises WHERE id = ?', args: [id] });
}
