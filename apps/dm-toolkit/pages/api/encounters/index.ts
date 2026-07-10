import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchEncountersForCampaign,
  insertEncounter,
} from '../../../lib/server/encounters';
import type { Encounter } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const campaignId = req.query.campaignId as string;
    if (!campaignId) {
      return res.status(400).json({ error: 'campaignId is required' });
    }
    const encounters = await fetchEncountersForCampaign(campaignId);
    return res.status(200).json(encounters);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const encounter = req.body as Encounter;
    if (!encounter?.id || !encounter?.campaign_id) {
      return res.status(400).json({ error: 'id and campaign_id are required' });
    }
    await insertEncounter(encounter);
    return res.status(201).json(encounter);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
