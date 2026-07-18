import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { updateMapStory } from '../../../../lib/server/maps';
import type { MapStory } from '../../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PATCH') {
    const { story } = req.body as { story: MapStory };
    if (!story?.title || !story?.clues) {
      return res.status(400).json({ error: 'story is required' });
    }
    await updateMapStory(mapId, story);
    return res.status(200).end();
  }

  res.setHeader('Allow', ['PATCH']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
