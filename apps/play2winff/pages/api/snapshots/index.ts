import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  commitSnapshot,
  fetchOriginalAndLatest,
  OriginalAlreadySetError,
} from '../../../lib/server/rankings';
import type { ParsedRow, ListType, SnapshotRole } from '../../../lib/rankings';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — it backs the now-public import/draft pages.
  if (req.method === 'GET') {
    const listType = req.query.listType;
    if (listType !== 'ppr' && listType !== 'superflex') {
      return res
        .status(400)
        .json({ error: 'listType query param must be ppr or superflex' });
    }
    const result = await fetchOriginalAndLatest(listType);
    return res.status(200).json(result);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { rows, listType, role } = req.body as {
      rows: ParsedRow[];
      listType: ListType;
      role: SnapshotRole;
    };
    if (!rows?.length || !listType || !role) {
      return res
        .status(400)
        .json({ error: 'rows, listType, and role are required' });
    }
    try {
      const id = await commitSnapshot(rows, listType, role);
      return res.status(201).json({ id });
    } catch (e) {
      if (e instanceof OriginalAlreadySetError) {
        return res.status(409).json({ error: e.message });
      }
      throw e;
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
