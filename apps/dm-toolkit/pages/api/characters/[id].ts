import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { updateCharacter, deleteCharacterById } from '../../../lib/server/characters';
import type { Character } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PATCH') {
    const character = req.body as Character;
    if (character.id !== id) {
      return res.status(400).json({ error: 'id mismatch' });
    }
    await updateCharacter(character);
    return res.status(200).json(character);
  }

  if (req.method === 'DELETE') {
    await deleteCharacterById(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
