import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchRiskForPlayer,
  setRiskForPlayer,
  clearRiskForPlayer,
} from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — reading risk factor is harmless on the now-public
  // draft page.
  if (req.method === 'GET') {
    const name = req.query.name;
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name query param is required' });
    }
    const value = await fetchRiskForPlayer(name);
    return res.status(200).json({ value });
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { name, value } = req.body as { name: string; value: number };
    if (!name?.trim() || value == null) {
      return res.status(400).json({ error: 'name and value are required' });
    }
    if (!Number.isInteger(value) || value < 0 || value > 10) {
      return res.status(400).json({ error: 'value must be an integer 0-10' });
    }
    const result = await setRiskForPlayer(name, value);
    return res.status(200).json({ value: result });
  }

  if (req.method === 'DELETE') {
    const { name } = req.body as { name: string };
    if (!name?.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    await clearRiskForPlayer(name);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
