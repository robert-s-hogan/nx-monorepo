import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { deleteEncounterById } from '../../../lib/server/encounters';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'DELETE') {
    await deleteEncounterById(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
