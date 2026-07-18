import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { startCombat, advanceTurn, endCombat, joinTurnOrder } from '../../../../lib/server/maps';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { action, initiative, tokenId } = req.body as {
      action: 'start' | 'advance' | 'end' | 'join';
      initiative?: Record<string, number> | number;
      tokenId?: string;
    };

    if (action === 'start') {
      if (!initiative || typeof initiative !== 'object' || Object.keys(initiative).length === 0) {
        return res.status(400).json({ error: 'initiative is required to start combat' });
      }
      await startCombat(mapId, initiative as Record<string, number>);
      return res.status(200).end();
    }

    if (action === 'advance') {
      await advanceTurn(mapId);
      return res.status(200).end();
    }

    if (action === 'end') {
      await endCombat(mapId);
      return res.status(200).end();
    }

    if (action === 'join') {
      if (!tokenId || typeof initiative !== 'number') {
        return res.status(400).json({ error: 'tokenId and a numeric initiative are required to join' });
      }
      await joinTurnOrder(mapId, tokenId, initiative);
      return res.status(200).end();
    }

    return res.status(400).json({ error: 'action must be start, advance, end, or join' });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
