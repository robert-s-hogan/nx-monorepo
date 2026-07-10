import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { deleteLeague, updateLeague } from '../../../lib/server/leagues';
import type { LeagueProfile } from '../../../lib/leagues';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: 'Invalid league id' });
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PUT') {
    const profile = req.body as Omit<LeagueProfile, 'id' | 'created_at'>;
    await updateLeague(id, profile);
    return res.status(204).end();
  }

  if (req.method === 'DELETE') {
    await deleteLeague(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
