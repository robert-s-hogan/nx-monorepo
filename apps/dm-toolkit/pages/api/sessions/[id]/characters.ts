import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  addCharacterToSession,
  removeCharacterFromSession,
} from '../../../../lib/server/sessions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  const sessionId = req.query.id as string;
  const characterId = (req.body as { characterId?: string })?.characterId;

  if (!characterId) {
    return res.status(400).json({ error: 'characterId is required' });
  }

  if (req.method === 'POST') {
    await addCharacterToSession(sessionId, characterId);
    return res.status(204).end();
  }

  if (req.method === 'DELETE') {
    await removeCharacterFromSession(sessionId, characterId);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['POST', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
