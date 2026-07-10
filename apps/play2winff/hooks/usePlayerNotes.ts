// hooks/usePlayerNotes.ts
import { authedFetch } from '../lib/authedFetch';

export type PlayerNote = { note: string; created_at: string };

export async function fetchNotesForPlayer(name: string): Promise<PlayerNote[]> {
  const res = await fetch(`/api/player-notes?name=${encodeURIComponent(name)}`);
  return res.json();
}

export async function saveNote(
  name: string,
  note: string
): Promise<PlayerNote[]> {
  const res = await authedFetch('/api/player-notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, note }),
  });
  return res.json();
}
