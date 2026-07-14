import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { resolveAttack } from '../../../../lib/server/combat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { attackerTokenId, defenderTokenId, rawAttackRoll, rawDamageRoll } = req.body as {
      attackerTokenId: string;
      defenderTokenId: string;
      rawAttackRoll: number;
      rawDamageRoll?: number;
    };
    if (!attackerTokenId || !defenderTokenId) {
      return res
        .status(400)
        .json({ error: 'attackerTokenId and defenderTokenId are required' });
    }
    if (!Number.isInteger(rawAttackRoll) || rawAttackRoll < 1 || rawAttackRoll > 20) {
      return res.status(400).json({ error: 'rawAttackRoll must be an integer between 1 and 20' });
    }
    const damageInput = rawDamageRoll ?? 0;
    if (!Number.isInteger(damageInput) || damageInput < 0) {
      return res.status(400).json({ error: 'rawDamageRoll must be a non-negative integer' });
    }
    const event = await resolveAttack(mapId, attackerTokenId, defenderTokenId, rawAttackRoll, damageInput);
    return res.status(201).json(event);
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
