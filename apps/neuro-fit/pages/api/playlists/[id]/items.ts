import { NextApiRequest, NextApiResponse } from 'next';

import { replacePlaylistItems } from '../../../../lib/server/playlists';
import type { PlaylistItemInput } from '../../../../types';

// No auth yet — see pages/api/exercises/index.ts.
// PUT replaces the playlist's entire item list in one shot (add/remove/
// reorder/edit sets-weight-time all happen client-side, then get saved as
// one array) rather than exposing granular add/remove/reorder endpoints.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'PUT') {
    const items = req.body as PlaylistItemInput[];
    if (!Array.isArray(items)) {
      return res.status(400).json({ error: 'body must be an array of items' });
    }
    await replacePlaylistItems(id, items);
    return res.status(200).end();
  }

  res.setHeader('Allow', ['PUT']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
