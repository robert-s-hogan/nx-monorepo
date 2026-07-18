import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import {
  fetchChecksWithOutcomes,
  insertCheckWithOutcomes,
} from '../../../../lib/server/structures';
import type { StructureCheck, StructureOutcome } from '../../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const structureId = req.query.id as string;

  // Unlike tokens/maps, this is DM-only for every method — the response
  // includes authored outcome text (narrative/damage/item per tier), which
  // would spoil the investigation if exposed on the otherwise-public map
  // page. Players only ever see a structure's outcome after it resolves, via
  // the public structure_events log.
  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'GET') {
    const checks = await fetchChecksWithOutcomes(structureId);
    return res.status(200).json(checks);
  }

  if (req.method === 'POST') {
    const { check, outcomes } = req.body as {
      check: StructureCheck;
      outcomes: Omit<StructureOutcome, 'id' | 'check_id'>[];
    };
    if (!check?.id || !check?.skill) {
      return res.status(400).json({ error: 'check.id and check.skill are required' });
    }
    const created = await insertCheckWithOutcomes(
      { ...check, structure_id: structureId },
      outcomes ?? []
    );
    return res.status(201).json(created);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}

