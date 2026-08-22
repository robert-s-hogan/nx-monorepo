import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchInjuryForPlayer,
  setInjuryForPlayer,
  clearInjuryForPlayer,
} from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — reading injury status is harmless on the now-public
  // draft page.
  if (req.method === 'GET') {
    const name = req.query.name;
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name query param is required' });
    }
    const injury = await fetchInjuryForPlayer(name);
    return res.status(200).json(injury);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { name, injury, expectedReturn } = req.body as {
      name: string;
      injury: string;
      expectedReturn?: string | null;
    };
    if (!name?.trim() || !injury?.trim()) {
      return res.status(400).json({ error: 'name and injury are required' });
    }
    const result = await setInjuryForPlayer(name, injury, expectedReturn ?? null);
    return res.status(200).json(result);
  }

  if (req.method === 'DELETE') {
    const { name } = req.body as { name: string };
    if (!name?.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    await clearInjuryForPlayer(name);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
