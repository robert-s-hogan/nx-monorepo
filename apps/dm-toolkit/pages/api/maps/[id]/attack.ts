import { NextApiRequest, NextApiResponse } from 'next';

import { resolveAttack } from '../../../../lib/server/combat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (req.method === 'POST') {
    const { attackerTokenId, defenderTokenId } = req.body as {
      attackerTokenId: string;
      defenderTokenId: string;
    };
    if (!attackerTokenId || !defenderTokenId) {
      return res
        .status(400)
        .json({ error: 'attackerTokenId and defenderTokenId are required' });
    }
    const event = await resolveAttack(mapId, attackerTokenId, defenderTokenId);
    return res.status(201).json(event);
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
