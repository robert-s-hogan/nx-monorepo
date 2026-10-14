import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '@with-nx/auth';

import { fetchProgress, saveProgress } from '../../lib/server/progress';
import type { ProgressState } from '../../types';

// Same private-per-user model as radtech-tracker: every verb requires a
// verified 'family' session, keyed by that session's email.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getUserFromRequest(req);
  if (!user || user.role !== 'family') {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'GET') {
    const progress = await fetchProgress(user.email);
    return res.status(200).json(progress);
  }

  if (req.method === 'PUT') {
    const body = req.body as ProgressState;
    if (
      !body ||
      typeof body.fields !== 'object' ||
      typeof body.done !== 'object'
    ) {
      return res.status(400).json({ error: 'Malformed progress payload' });
    }
    await saveProgress(user.email, body);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
