import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchAllTags,
  createTag,
  DuplicateTagNameError,
  InvalidTagIconError,
} from '../../../lib/server/tags';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — the tag library backs the now-public draft page.
  if (req.method === 'GET') {
    const tags = await fetchAllTags();
    return res.status(200).json(tags);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { name, icon } = req.body as { name: string; icon: string };
    if (!name?.trim() || !icon?.trim()) {
      return res.status(400).json({ error: 'name and icon are required' });
    }
    try {
      const tag = await createTag(name.trim(), icon.trim());
      return res.status(201).json(tag);
    } catch (e) {
      if (e instanceof DuplicateTagNameError || e instanceof InvalidTagIconError) {
        return res.status(400).json({ error: e.message });
      }
      throw e;
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
