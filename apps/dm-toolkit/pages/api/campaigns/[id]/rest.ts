import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchRestState, upsertRestState } from '../../../../lib/server/restState';
import type { RestState } from '../../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const campaignId = req.query.id as string;

  if (req.method === 'GET') {
    const state = await fetchRestState(campaignId);
    return res.status(200).json(state);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PUT') {
    const state = req.body as RestState;
    if (state.campaign_id !== campaignId) {
      return res.status(400).json({ error: 'campaign_id mismatch' });
    }
    await upsertRestState(state);
    return res.status(200).json(state);
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
