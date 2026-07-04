import { NextApiRequest, NextApiResponse } from 'next';

import {
  fetchTokensForMap,
  insertToken,
  updateTokenPosition,
  deleteTokenById,
} from '../../../../lib/server/maps';
import type { MapToken } from '../../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (req.method === 'GET') {
    const tokens = await fetchTokensForMap(mapId);
    return res.status(200).json(tokens);
  }

  if (req.method === 'POST') {
    const token = req.body as MapToken;
    if (!token?.id || !token?.label) {
      return res.status(400).json({ error: 'id and label are required' });
    }
    await insertToken({ ...token, map_id: mapId });
    return res.status(201).json(token);
  }

  if (req.method === 'PATCH') {
    const { tokenId, x, y } = req.body as { tokenId: string; x: number; y: number };
    if (!tokenId || typeof x !== 'number' || typeof y !== 'number') {
      return res.status(400).json({ error: 'tokenId, x and y are required' });
    }
    await updateTokenPosition(tokenId, x, y);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    const { tokenId } = req.body as { tokenId: string };
    if (!tokenId) {
      return res.status(400).json({ error: 'tokenId is required' });
    }
    await deleteTokenById(tokenId);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
