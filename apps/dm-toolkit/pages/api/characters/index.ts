import { NextApiRequest, NextApiResponse } from 'next';

import { fetchCharacters, insertCharacter } from '../../../lib/server/characters';
import type { Character } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const characters = await fetchCharacters();
    return res.status(200).json(characters);
  }

  if (req.method === 'POST') {
    const character = req.body as Character;
    if (!character?.id || !character?.name) {
      return res.status(400).json({ error: 'id and name are required' });
    }
    await insertCharacter(character);
    return res.status(201).json(character);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
