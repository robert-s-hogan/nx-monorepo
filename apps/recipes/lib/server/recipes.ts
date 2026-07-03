// Server-only DB access for recipes. Called from pages/api/recipes/*.
import { db } from './db';
import type { Recipe, RecipeInput } from '../../types';

function rowToRecipe(row: Record<string, unknown>): Recipe {
  return {
    id: Number(row.id),
    title: row.title as string,
    description: (row.description as string) ?? '',
    servings: (row.servings as string) ?? '',
    prep_time: (row.prep_time as string) ?? '',
    cook_time: (row.cook_time as string) ?? '',
    ingredients: JSON.parse((row.ingredients as string) || '[]'),
    steps: JSON.parse((row.steps as string) || '[]'),
    created_at: row.created_at as string,
  };
}

export async function fetchRecipes(query?: string): Promise<Recipe[]> {
  const result = query
    ? await db.execute({
        sql: 'SELECT * FROM recipes WHERE title LIKE ? OR description LIKE ? ORDER BY created_at DESC',
        args: [`%${query}%`, `%${query}%`],
      })
    : await db.execute('SELECT * FROM recipes ORDER BY created_at DESC');

  return result.rows.map((row) => rowToRecipe(row as Record<string, unknown>));
}

export async function fetchRecipeById(id: string): Promise<Recipe | null> {
  const result = await db.execute({
    sql: 'SELECT * FROM recipes WHERE id = ?',
    args: [id],
  });
  const row = result.rows[0];
  if (!row) return null;
  return rowToRecipe(row as Record<string, unknown>);
}

function toIngredientsAndSteps(input: RecipeInput) {
  const ingredients = (input.ingredients_raw || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const steps = (input.steps_raw || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  return { ingredients, steps };
}

export async function insertRecipe(input: RecipeInput): Promise<number> {
  const { ingredients, steps } = toIngredientsAndSteps(input);
  const result = await db.execute({
    sql: 'INSERT INTO recipes (title, description, servings, prep_time, cook_time, ingredients, steps) VALUES (?, ?, ?, ?, ?, ?, ?)',
    args: [
      input.title,
      input.description || '',
      input.servings || '',
      input.prep_time || '',
      input.cook_time || '',
      JSON.stringify(ingredients),
      JSON.stringify(steps),
    ],
  });
  return Number(result.lastInsertRowid);
}

export async function updateRecipe(id: string, input: RecipeInput): Promise<void> {
  const { ingredients, steps } = toIngredientsAndSteps(input);
  await db.execute({
    sql: 'UPDATE recipes SET title=?, description=?, servings=?, prep_time=?, cook_time=?, ingredients=?, steps=? WHERE id=?',
    args: [
      input.title,
      input.description || '',
      input.servings || '',
      input.prep_time || '',
      input.cook_time || '',
      JSON.stringify(ingredients),
      JSON.stringify(steps),
      id,
    ],
  });
}

export async function deleteRecipe(id: string): Promise<void> {
  await db.execute({ sql: 'DELETE FROM recipes WHERE id = ?', args: [id] });
}
