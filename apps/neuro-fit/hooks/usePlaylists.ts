// hooks/usePlaylists.ts
import useSWR from 'swr';

import type {
  Playlist,
  PlaylistInput,
  PlaylistItemInput,
  PlaylistWithItems,
} from '../types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function usePlaylists() {
  const { data, error, mutate } = useSWR<Playlist[]>('/api/playlists', fetcher);

  return {
    playlists: data ?? [],
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export function usePlaylist(id: number | string | undefined) {
  const { data, error, mutate } = useSWR<PlaylistWithItems>(
    id ? `/api/playlists/${id}` : null,
    fetcher
  );

  return {
    playlist: data,
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export async function createPlaylist(input: PlaylistInput): Promise<number> {
  const res = await fetch('/api/playlists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const { id } = await res.json();
  return id;
}

export async function updatePlaylist(
  id: number,
  input: PlaylistInput
): Promise<void> {
  await fetch(`/api/playlists/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export async function deletePlaylist(id: number): Promise<void> {
  await fetch(`/api/playlists/${id}`, { method: 'DELETE' });
}

export async function savePlaylistItems(
  id: number,
  items: PlaylistItemInput[]
): Promise<void> {
  await fetch(`/api/playlists/${id}/items`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items),
  });
}
