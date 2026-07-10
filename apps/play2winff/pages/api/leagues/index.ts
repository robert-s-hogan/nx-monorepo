import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchLeagues, saveLeague } from '../../../lib/server/leagues';
import type { LeagueProfile } from '../../../lib/leagues';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — it backs the now-public leagues page.
  if (req.method === 'GET') {
    const leagues = await fetchLeagues();
    return res.status(200).json(leagues);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const profile = req.body as Omit<LeagueProfile, 'id' | 'created_at'>;
    if (!profile?.name?.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    const id = await saveLeague(profile);
    return res.status(201).json({ id });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
