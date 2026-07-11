import { NextApiRequest, NextApiResponse } from 'next';

import {
  fetchPlaylistWithItems,
  updatePlaylist,
  deletePlaylist,
} from '../../../lib/server/playlists';
import type { PlaylistInput } from '../../../types';

// No auth yet — see pages/api/exercises/index.ts.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'GET') {
    const playlist = await fetchPlaylistWithItems(id);
    if (!playlist) return res.status(404).json({ error: 'Playlist not found' });
    return res.status(200).json(playlist);
  }

  if (req.method === 'PATCH') {
    const input = req.body as PlaylistInput;
    if (!input?.name?.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    await updatePlaylist(id, input);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    await deletePlaylist(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
