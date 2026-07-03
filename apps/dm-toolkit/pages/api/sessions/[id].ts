import { NextApiRequest, NextApiResponse } from 'next';

import { deleteSessionById } from '../../../lib/server/sessions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await deleteSessionById(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
