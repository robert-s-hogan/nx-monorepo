import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole, getRoleFromRequest } from '@with-nx/auth';

import {
  fetchStructuresForMap,
  insertStructure,
  updateStructurePosition,
  deleteStructureById,
} from '../../../../lib/server/structures';
import type { MapStructure } from '../../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mapId = req.query.id as string;

  // GET stays open — it backs the now-public map page (including the
  // no-login preview link). The client already only ever displays
  // `revealed ? name : '?'` (StructureLayer.tsx), but for a non-family
  // viewer we now also strip the real name server-side so it never exists
  // in the payload at all while unrevealed.
  if (req.method === 'GET') {
    const structures = await fetchStructuresForMap(mapId);
    const role = await getRoleFromRequest(req);
    const visible =
      role === 'family'
        ? structures
        : structures.map((s) => (s.revealed ? s : { ...s, name: '?' }));
    return res.status(200).json(visible);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'POST') {
    const structure = req.body as MapStructure;
    if (!structure?.id || !structure?.name) {
      return res.status(400).json({ error: 'id and name are required' });
    }
    await insertStructure({ ...structure, map_id: mapId });
    return res.status(201).json(structure);
  }

  if (req.method === 'PATCH') {
    const { structureId, x, y } = req.body as { structureId: string; x: number; y: number };
    if (!structureId || typeof x !== 'number' || typeof y !== 'number') {
      return res.status(400).json({ error: 'structureId, x and y are required' });
    }
    await updateStructurePosition(structureId, x, y);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    const { structureId } = req.body as { structureId: string };
    if (!structureId) {
      return res.status(400).json({ error: 'structureId is required' });
    }
    await deleteStructureById(structureId);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
