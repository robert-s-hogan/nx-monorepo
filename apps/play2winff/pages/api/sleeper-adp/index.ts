import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  replaceSleeperAdp,
  fetchSleeperAdpStatus,
} from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — reading the ADP status is harmless on the now-public
  // draft/import pages.
  if (req.method === 'GET') {
    const status = await fetchSleeperAdpStatus();
    return res.status(200).json(status);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { rows } = req.body as {
      rows: { name_canon: string; rank: number; team?: string | null }[];
    };
    if (!Array.isArray(rows) || rows.length === 0) {
      return res.status(400).json({ error: 'rows is required' });
    }
    const clean = rows
      .filter((r) => r?.name_canon?.trim() && Number.isFinite(r.rank) && r.rank > 0)
      .map((r) => ({
        name_canon: r.name_canon,
        rank: r.rank,
        team: r.team?.trim() || null,
      }));
    if (!clean.length) {
      return res.status(400).json({ error: 'No valid rows provided' });
    }
    await replaceSleeperAdp(clean);
    return res.status(200).json({ count: clean.length });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
