import { NextApiRequest, NextApiResponse } from 'next';

import {
  fetchExerciseById,
  updateExercise,
  deleteExercise,
} from '../../../lib/server/exercises';
import type { ExerciseInput } from '../../../types';

// No auth yet — see pages/api/exercises/index.ts.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'GET') {
    const exercise = await fetchExerciseById(id);
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
    return res.status(200).json(exercise);
  }

  if (req.method === 'PATCH') {
    const input = req.body as ExerciseInput;
    if (!input?.name?.trim() || !input?.youtube_video_id?.trim()) {
      return res
        .status(400)
        .json({ error: 'name and youtube_video_id are required' });
    }
    await updateExercise(id, input);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    await deleteExercise(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
