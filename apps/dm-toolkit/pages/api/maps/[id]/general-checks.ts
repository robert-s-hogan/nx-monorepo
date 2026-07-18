import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { resolveGeneralCheck } from '../../../../lib/server/generalChecks';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { characterId, skill, dc, rawRoll } = req.body as {
      characterId?: string | null;
      skill?: string;
      dc?: number;
      rawRoll?: number;
    };
    if (!skill?.trim()) {
      return res.status(400).json({ error: 'skill is required' });
    }
    if (!Number.isInteger(dc)) {
      return res.status(400).json({ error: 'dc must be an integer' });
    }
    if (!Number.isInteger(rawRoll) || (rawRoll as number) < 1 || (rawRoll as number) > 20) {
      return res.status(400).json({ error: 'rawRoll must be an integer between 1 and 20' });
    }
    const event = await resolveGeneralCheck(mapId, characterId ?? null, skill.trim(), dc as number, rawRoll as number);
    return res.status(201).json(event);
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
