import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { addCampaignXp, deleteCampaign } from '../../../lib/server/campaigns';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PATCH') {
    const { delta } = req.body as { delta?: number };
    if (typeof delta !== 'number') {
      return res.status(400).json({ error: 'delta (number) is required' });
    }
    await addCampaignXp(id, delta);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    await deleteCampaign(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
