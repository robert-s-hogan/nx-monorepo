import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchRecipeById, updateRecipe, deleteRecipe } from '../../../lib/server/recipes';
import type { RecipeInput } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  // GET stays open — it backs the public "quick reminder" recipe page,
  // which intentionally has no login wall. Mutations still require it.
  if (req.method === 'GET') {
    const recipe = await fetchRecipeById(id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    return res.status(200).json(recipe);
  }

  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'PATCH') {
    const input = req.body as RecipeInput;
    if (!input?.title?.trim()) {
      return res.status(400).json({ error: 'title is required' });
    }
    await updateRecipe(id, input);
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    await deleteRecipe(id);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
