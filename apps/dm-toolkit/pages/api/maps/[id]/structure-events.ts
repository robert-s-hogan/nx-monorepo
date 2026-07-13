import { NextApiRequest, NextApiResponse } from 'next';

import { fetchStructureEventsForMap } from '../../../../lib/server/structures';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  // Open, like combat_events — the resolved outcome (narrative/damage/item)
  // is fine to show publicly since it only becomes visible after the roll.
  if (req.method === 'GET') {
    const events = await fetchStructureEventsForMap(mapId);
    return res.status(200).json(events);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
