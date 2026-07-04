import { NextApiRequest, NextApiResponse } from 'next';

import { fetchCampaigns, insertCampaign } from '../../../lib/server/campaigns';
import type { Campaign } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const campaigns = await fetchCampaigns();
    return res.status(200).json(campaigns);
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
