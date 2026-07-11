// Server-only DB access for playlists. Called from pages/api/playlists/*.
import { db } from './db';
import type {
  Playlist,
  PlaylistInput,
  PlaylistItem,
  PlaylistItemInput,
  PlaylistWithItems,
  Exercise,
  WeightUnit,
} from '../../types';

function rowToPlaylist(row: Record<string, unknown>): Playlist {
  return {
    id: Number(row.id),
    name: row.name as string,
    description: (row.description as string) ?? '',
    created_at: row.created_at as string,
  };
}

function rowToPlaylistItem(row: Record<string, unknown>): PlaylistItem {
  return {
    id: Number(row.id),
    playlist_id: Number(row.playlist_id),
    exercise_id: Number(row.exercise_id),
    position: Number(row.position),
    sets: row.sets === null ? null : Number(row.sets),
    weight: row.weight === null ? null : Number(row.weight),
    weight_unit: (row.weight_unit as WeightUnit | null) ?? null,
    duration_seconds:
      row.duration_seconds === null ? null : Number(row.duration_seconds),
    created_at: row.created_at as string,
    exercise: {
      id: Number(row.exercise_id),
      name: row.exercise_name as string,
      youtube_video_id: row.youtube_video_id as string,
      notes: (row.exercise_notes as string) ?? '',
      start_seconds:
        row.exercise_start_seconds === null
          ? null
          : Number(row.exercise_start_seconds),
      end_seconds:
        row.exercise_end_seconds === null
          ? null
          : Number(row.exercise_end_seconds),
      created_at: row.exercise_created_at as string,
    } satisfies Exercise,
  };
}

export async function fetchPlaylists(): Promise<Playlist[]> {
  const result = await db.execute(
    'SELECT * FROM playlists ORDER BY created_at DESC'
  );
  return result.rows.map((row) => rowToPlaylist(row as Record<string, unknown>));
}

export async function fetchPlaylistWithItems(
  id: string
): Promise<PlaylistWithItems | null> {
  const playlistResult = await db.execute({
    sql: 'SELECT * FROM playlists WHERE id = ?',
    args: [id],
  });
  const playlistRow = playlistResult.rows[0];
  if (!playlistRow) return null;

  const itemsResult = await db.execute({
    sql: `SELECT
        playlist_items.*,
        exercises.name AS exercise_name,
        exercises.youtube_video_id AS youtube_video_id,
        exercises.notes AS exercise_notes,
        exercises.start_seconds AS exercise_start_seconds,
        exercises.end_seconds AS exercise_end_seconds,
        exercises.created_at AS exercise_created_at
      FROM playlist_items
      JOIN exercises ON exercises.id = playlist_items.exercise_id
      WHERE playlist_items.playlist_id = ?
      ORDER BY playlist_items.position ASC`,
    args: [id],
  });

  return {
    ...rowToPlaylist(playlistRow as Record<string, unknown>),
    items: itemsResult.rows.map((row) =>
      rowToPlaylistItem(row as Record<string, unknown>)
    ),
  };
}

export async function insertPlaylist(input: PlaylistInput): Promise<number> {
  const result = await db.execute({
    sql: 'INSERT INTO playlists (name, description) VALUES (?, ?)',
    args: [input.name, input.description || ''],
  });
  return Number(result.lastInsertRowid);
}

export async function updatePlaylist(
  id: string,
  input: PlaylistInput
): Promise<void> {
  await db.execute({
    sql: 'UPDATE playlists SET name=?, description=? WHERE id=?',
    args: [input.name, input.description || '', id],
  });
}

export async function deletePlaylist(id: string): Promise<void> {
  // playlist_items rows cascade automatically (ON DELETE CASCADE).
  await db.execute({ sql: 'DELETE FROM playlists WHERE id = ?', args: [id] });
}

// Replaces the full ordered item list for a playlist in one atomic batch —
// simpler and safer than diffing adds/removes/reorders individually, and
// matches how "flexible" playlist editing is meant to work: rebuild the
// whole list on save.
export async function replacePlaylistItems(
  playlistId: string,
  items: PlaylistItemInput[]
): Promise<void> {
  await db.batch([
    {
      sql: 'DELETE FROM playlist_items WHERE playlist_id = ?',
      args: [playlistId],
    },
    ...items.map((item, index) => ({
      sql: `INSERT INTO playlist_items
          (playlist_id, exercise_id, position, sets, weight, weight_unit, duration_seconds)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        playlistId,
        item.exercise_id,
        item.position ?? index,
        item.sets ?? null,
        item.weight ?? null,
        item.weight_unit ?? null,
        item.duration_seconds ?? null,
      ],
    })),
  ]);
}
