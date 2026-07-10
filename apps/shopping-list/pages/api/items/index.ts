import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { insertItem, ItemFields } from '../../../lib/server/items';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const fields = req.body as ItemFields;
    if (!fields?.name?.trim() || !fields?.store_id) {
      return res.status(400).json({ error: 'name and store_id are required' });
    }
    const item = await insertItem(fields);
    return res.status(201).json(item);
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
