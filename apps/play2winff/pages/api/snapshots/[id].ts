import { NextApiRequest, NextApiResponse } from 'next';

import { loadDraftPlayers } from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: 'Invalid snapshot id' });
  }

  // GET stays open — the now-public draft page loads players from it.
  if (req.method === 'GET') {
    const prev = req.query.prev ? Number(req.query.prev) : null;
    const players = await loadDraftPlayers(
      id,
      Number.isFinite(prev) ? prev : null
    );
    return res.status(200).json(players);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
