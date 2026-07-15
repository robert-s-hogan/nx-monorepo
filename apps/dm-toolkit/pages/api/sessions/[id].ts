import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { deleteSessionById, fetchSessionById, updateActiveMap } from '../../../lib/server/sessions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  // GET stays open — it backs the anonymous /map?session=<id> preview link,
  // which needs to look up the session's active_map_id with no login.
  if (req.method === 'GET') {
    const session = await fetchSessionById(id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    return res.status(200).json(session);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PATCH') {
    const { active_map_id } = req.body as { active_map_id: string | null };
    if (active_map_id === undefined) {
      return res.status(400).json({ error: 'active_map_id is required' });
    }
    await updateActiveMap(id, active_map_id);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    await deleteSessionById(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
