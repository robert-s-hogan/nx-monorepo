import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { resolveStructureCheck } from '../../../../lib/server/structureResolution';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const structureId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { mapId, checkId, characterId, rawRoll, outcomeId, rawDamageRoll } = req.body as {
      mapId: string;
      checkId: string;
      characterId?: string | null;
      rawRoll: number;
      outcomeId?: string;
      rawDamageRoll?: number;
    };
    if (!mapId || !checkId) {
      return res.status(400).json({ error: 'mapId and checkId are required' });
    }
    if (!Number.isInteger(rawRoll) || rawRoll < 1 || rawRoll > 20) {
      return res.status(400).json({ error: 'rawRoll must be an integer between 1 and 20' });
    }
    if (rawDamageRoll !== undefined && (!Number.isInteger(rawDamageRoll) || rawDamageRoll < 1)) {
      return res.status(400).json({ error: 'rawDamageRoll must be a positive integer' });
    }
    const resolution = await resolveStructureCheck(
      mapId,
      structureId,
      checkId,
      characterId ?? null,
      rawRoll,
      outcomeId,
      rawDamageRoll
    );
    return res.status('preview' in resolution ? 200 : 201).json(resolution);
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
