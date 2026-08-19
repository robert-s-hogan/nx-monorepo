import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchFlagsForPlayer,
  toggleBooleanFlag,
  setRiskFactor,
} from '../../../lib/server/draft';
import { BOOLEAN_FLAGS, BooleanFlag, FlagType } from '../../../lib/flags';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET stays open — reading existing flags is harmless on the now-public
  // draft page.
  if (req.method === 'GET') {
    const name = req.query.name;
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name query param is required' });
    }
    const flags = await fetchFlagsForPlayer(name);
    return res.status(200).json(flags);
  }

  if (!(await requireRole(req, ['family', 'limited']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const { name, flag, value } = req.body as {
      name: string;
      flag: FlagType;
      value?: number | null;
    };
    if (!name?.trim() || !flag) {
      return res.status(400).json({ error: 'name and flag are required' });
    }

    if (flag === 'risk_factor') {
      if (value != null && (value < 1 || value > 10)) {
        return res.status(400).json({ error: 'value must be 1-10' });
      }
      const flags = await setRiskFactor(name, value ?? null);
      return res.status(200).json(flags);
    }

    if (!BOOLEAN_FLAGS.includes(flag as BooleanFlag)) {
      return res.status(400).json({ error: 'Unknown flag' });
    }
    const flags = await toggleBooleanFlag(name, flag as BooleanFlag);
    return res.status(200).json(flags);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
