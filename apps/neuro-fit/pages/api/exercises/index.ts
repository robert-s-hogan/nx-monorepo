import { NextApiRequest, NextApiResponse } from 'next';

import { fetchExercises, insertExercise } from '../../../lib/server/exercises';
import type { ExerciseInput } from '../../../types';

// No auth yet — neuro-fit has no login system (see project_neuro_fit_rebuild
// memory). Every route is open for now; add requireRole gating here once
// auth is wired up, matching the pattern in recipes/dm-toolkit/etc.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const exercises = await fetchExercises();
    return res.status(200).json(exercises);
  }

  if (req.method === 'POST') {
    const input = req.body as ExerciseInput;
    if (!input?.name?.trim() || !input?.youtube_video_id?.trim()) {
      return res
        .status(400)
        .json({ error: 'name and youtube_video_id are required' });
    }
    const id = await insertExercise(input);
    return res.status(201).json({ id });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
