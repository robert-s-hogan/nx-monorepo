import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { commitSnapshot, fetchSnapshots } from '../../../lib/server/rankings';
import type { ParsedRow, ListType } from '../../../lib/rankings';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — it backs the now-public import/draft pages.
  if (req.method === 'GET') {
    const snapshots = await fetchSnapshots();
    return res.status(200).json(snapshots);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { rows, listType, label } = req.body as {
      rows: ParsedRow[];
      listType: ListType;
      label: string;
    };
    if (!rows?.length || !label?.trim()) {
      return res.status(400).json({ error: 'rows and label are required' });
    }
    const id = await commitSnapshot(rows, listType, label.trim());
    return res.status(201).json({ id });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
