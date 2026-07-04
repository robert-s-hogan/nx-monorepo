import { NextApiRequest, NextApiResponse } from 'next';

import { fetchCombatEventsForMap } from '../../../../lib/server/maps';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  if (req.method === 'GET') {
    const events = await fetchCombatEventsForMap(mapId);
    return res.status(200).json(events);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
