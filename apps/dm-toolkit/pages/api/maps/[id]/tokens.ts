import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole, getRoleFromRequest } from '@with-nx/auth';

import {
  fetchTokensForMap,
  insertToken,
  updateTokenPosition,
  updateTokenSide,
  deleteTokenById,
} from '../../../../lib/server/maps';
import type { MapToken } from '../../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  // GET stays open — it backs the now-public map page (including the
  // no-login preview link) — but hidden tokens are DM-only, so a non-family
  // viewer (including an anonymous one) never receives them at all, rather
  // than just having the UI choose not to render them.
  if (req.method === 'GET') {
    const tokens = await fetchTokensForMap(mapId);
    const role = await getRoleFromRequest(req);
    const visible = role === 'family' ? tokens : tokens.filter((t) => !t.hidden);
    return res.status(200).json(visible);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
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
    const { tokenId, x, y, side } = req.body as {
      tokenId: string;
      x?: number;
      y?: number;
      side?: MapToken['side'];
    };
    if (!tokenId) {
      return res.status(400).json({ error: 'tokenId is required' });
    }
    if (side !== undefined) {
      if (!['ally', 'neutral', 'enemy'].includes(side)) {
        return res.status(400).json({ error: 'side must be ally, neutral, or enemy' });
      }
      await updateTokenSide(tokenId, side);
      return res.status(200).end();
    }
    if (typeof x !== 'number' || typeof y !== 'number') {
      return res.status(400).json({ error: 'x and y are required when side is not set' });
    }
    await updateTokenPosition(mapId, tokenId, x, y);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    const { tokenId } = req.body as { tokenId: string };
    if (!tokenId) {
      return res.status(400).json({ error: 'tokenId is required' });
    }
    await deleteTokenById(mapId, tokenId);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
