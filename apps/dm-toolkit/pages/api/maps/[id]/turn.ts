import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { startCombat, advanceTurn, endCombat } from '../../../../lib/server/maps';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { action, initiative } = req.body as {
      action: 'start' | 'advance' | 'end';
      initiative?: Record<string, number>;
    };

    if (action === 'start') {
      if (!initiative || Object.keys(initiative).length === 0) {
        return res.status(400).json({ error: 'initiative is required to start combat' });
      }
      await startCombat(mapId, initiative);
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

    return res.status(400).json({ error: 'action must be start, advance, or end' });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
