import { NextApiRequest, NextApiResponse } from 'next';

import { fetchMapsForSession, insertMap } from '../../../lib/server/maps';
import type { GameMap } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const sessionId = req.query.sessionId as string;
    if (!sessionId) {
      return res.status(400).json({ error: 'sessionId is required' });
    }
    const maps = await fetchMapsForSession(sessionId);
    return res.status(200).json(maps);
  }

  if (req.method === 'POST') {
    const map = req.body as GameMap;
    if (!map?.id || !map?.session_id || !map?.name) {
      return res.status(400).json({ error: 'id, session_id and name are required' });
    }
    await insertMap(map);
    return res.status(201).json(map);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
