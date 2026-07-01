import { NextApiRequest, NextApiResponse } from 'next';

import { deleteSnapshot } from '../../../lib/server/rankings';
import { loadDraftPlayers } from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: 'Invalid snapshot id' });
  }

  if (req.method === 'GET') {
    const prev = req.query.prev ? Number(req.query.prev) : null;
    const players = await loadDraftPlayers(
      id,
      Number.isFinite(prev) ? prev : null
    );
    return res.status(200).json(players);
  }

  if (req.method === 'DELETE') {
    await deleteSnapshot(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
