import { NextApiRequest, NextApiResponse } from 'next';

import { fetchNotesForPlayer, saveNote } from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const name = req.query.name;
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name query param is required' });
    }
    const notes = await fetchNotesForPlayer(name);
    return res.status(200).json(notes);
  }

  if (req.method === 'POST') {
    const { name, note } = req.body as { name: string; note: string };
    if (!name?.trim() || !note?.trim()) {
      return res.status(400).json({ error: 'name and note are required' });
    }
    await saveNote(name, note);
    const notes = await fetchNotesForPlayer(name);
    return res.status(201).json(notes);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
