import { NextApiRequest, NextApiResponse } from 'next';

import { fetchGeneralCheckEventsForMap } from '../../../../lib/server/generalChecks';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  // Open, like structure-events/combat_events — the resolved roll is fine
  // to show publicly since it only becomes visible after it happens.
  if (req.method === 'GET') {
    const events = await fetchGeneralCheckEventsForMap(mapId);
    return res.status(200).json(events);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
