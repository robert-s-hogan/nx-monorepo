import { NextApiRequest, NextApiResponse } from 'next';

import { deleteEncounterById } from '../../../lib/server/encounters';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await deleteEncounterById(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
