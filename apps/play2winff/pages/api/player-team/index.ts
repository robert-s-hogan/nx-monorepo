import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  setTeamForPlayer,
  clearTeamForPlayer,
} from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { name, team } = req.body as { name: string; team: string };
    if (!name?.trim() || !team?.trim()) {
      return res.status(400).json({ error: 'name and team are required' });
    }
    const result = await setTeamForPlayer(name, team.trim().toUpperCase());
    return res.status(200).json({ team: result });
  }

  if (req.method === 'DELETE') {
    const { name } = req.body as { name: string };
    if (!name?.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    await clearTeamForPlayer(name);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['POST', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
