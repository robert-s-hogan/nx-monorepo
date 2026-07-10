import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchSessions, insertSession } from '../../../lib/server/sessions';
import type { Session } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — session names/dates are read by the now-public
  // home and map pages, even though session.tsx itself stays gated.
  if (req.method === 'GET') {
    const sessions = await fetchSessions();
    return res.status(200).json(sessions);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const session = req.body as Session;
    if (!session?.id || !session?.name) {
      return res.status(400).json({ error: 'id and name are required' });
    }
    await insertSession(session);
    return res.status(201).json(session);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
