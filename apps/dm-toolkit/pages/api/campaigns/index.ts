import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchCampaigns, insertCampaign } from '../../../lib/server/campaigns';
import type { Campaign } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — it backs the now-public home page's campaign/level tile.
  if (req.method === 'GET') {
    const campaigns = await fetchCampaigns();
    return res.status(200).json(campaigns);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const campaign = req.body as Campaign;
    if (!campaign?.id || !campaign?.name) {
      return res.status(400).json({ error: 'id and name are required' });
    }
    await insertCampaign(campaign);
    return res.status(201).json(campaign);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
