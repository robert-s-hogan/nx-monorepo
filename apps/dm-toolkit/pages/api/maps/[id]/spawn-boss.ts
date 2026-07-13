import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { spawnBossToken } from '../../../../lib/server/structureResolution';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { characterId, x, y } = req.body as { characterId: string; x?: number; y?: number };
    if (!characterId) {
      return res.status(400).json({ error: 'characterId is required' });
    }
    await spawnBossToken(mapId, characterId, x != null && y != null ? { x, y } : undefined);
    return res.status(201).end();
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
