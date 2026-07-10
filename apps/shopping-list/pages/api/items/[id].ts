import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { updateItem, deleteItemById, ItemFields } from '../../../lib/server/items';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: 'Invalid item id' });
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PATCH') {
    const fields = req.body as ItemFields;
    await updateItem(id, fields);
    return res.status(204).end();
  }

  if (req.method === 'DELETE') {
    await deleteItemById(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
