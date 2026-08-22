import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchTagsForPlayer, toggleTagForPlayer } from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — reading existing tags is harmless on the now-public
  // draft page.
  if (req.method === 'GET') {
    const name = req.query.name;
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name query param is required' });
    }
    const tags = await fetchTagsForPlayer(name);
    return res.status(200).json(tags);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { name, tagId } = req.body as { name: string; tagId: number };
    if (!name?.trim() || !tagId) {
      return res.status(400).json({ error: 'name and tagId are required' });
    }
    const tags = await toggleTagForPlayer(name, tagId);
    return res.status(200).json(tags);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
