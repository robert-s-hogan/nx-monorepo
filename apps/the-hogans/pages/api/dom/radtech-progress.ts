import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchProgress,
  saveProgress,
} from '../../../lib/server/radtech/progress';
import type { ProgressState } from '../../../components/dom/radtech/types';

// Dom's RadTech tracker. Same groups as the /dom folder
// (lib/private-folders.json): family and limited. There's no public read;
// every verb needs a verified session.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(await fetchProgress());
  }

  if (req.method === 'PUT') {
    const body = req.body as ProgressState;
    if (!body || !Array.isArray(body.terms) || typeof body.c !== 'object') {
      return res.status(400).json({ error: 'Malformed progress payload' });
    }
    await saveProgress(body);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
