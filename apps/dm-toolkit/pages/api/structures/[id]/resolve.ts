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
    const { mapId, checkId, characterId } = req.body as {
      mapId: string;
      checkId: string;
      characterId?: string | null;
    };
    if (!mapId || !checkId) {
      return res.status(400).json({ error: 'mapId and checkId are required' });
    }
    const resolution = await resolveStructureCheck(mapId, structureId, checkId, characterId ?? null);
    return res.status(201).json(resolution);
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
