import { NextApiRequest, NextApiResponse } from 'next';

import { fetchPlaylists, insertPlaylist } from '../../../lib/server/playlists';
import type { PlaylistInput } from '../../../types';

// No auth yet — see pages/api/exercises/index.ts.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const playlists = await fetchPlaylists();
    return res.status(200).json(playlists);
  }

  if (req.method === 'POST') {
    const input = req.body as PlaylistInput;
    if (!input?.name?.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    const id = await insertPlaylist(input);
    return res.status(201).json({ id });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
