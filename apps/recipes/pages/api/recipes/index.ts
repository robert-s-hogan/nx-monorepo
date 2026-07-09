import { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '@with-nx/auth';

import { fetchRecipes, insertRecipe } from '../../../lib/server/recipes';
import type { RecipeInput } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // The full list is only ever shown on the gated index page — unlike a
  // single recipe's page, there's no "public view" case for browsing
  // everything at once.
  if (!(await requireRole(req, ['family']))) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  if (req.method === 'GET') {
    const q = typeof req.query.q === 'string' ? req.query.q : '';
    const recipes = await fetchRecipes(q);
    return res.status(200).json(recipes);
  }

  if (req.method === 'POST') {
    const input = req.body as RecipeInput;
    if (!input?.title?.trim()) {
      return res.status(400).json({ error: 'title is required' });
    }
    const id = await insertRecipe(input);
    return res.status(201).json({ id });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
