import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchNotesForPlayer,
  saveNote,
  deleteNote,
} from '../../../lib/server/draft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — reading existing notes is harmless on the now-public
  // draft page.
  if (req.method === 'GET') {
    const name = req.query.name;
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name query param is required' });
    }
    const notes = await fetchNotesForPlayer(name);
    return res.status(200).json(notes);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
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

  if (req.method === 'DELETE') {
    const { id } = req.body as { id: number };
    if (!Number.isInteger(id)) {
      return res.status(400).json({ error: 'id is required' });
    }
    await deleteNote(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
