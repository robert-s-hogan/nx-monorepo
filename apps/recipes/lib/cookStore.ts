// Where you are in each recipe on this device (current step, checked
// ingredients, folded sections), plus display preferences.
import { createLocalStore } from './localStore';

export interface RecipeProgress {
  title: string;
  step: number;
  total: number;
  checked: number[];
  collapsed: string[];
  updatedAt: number;
}

export interface CookState {
  recipes: Record<string, RecipeProgress>;
  units: 'volume' | 'grams';
  hideChecked: boolean;
}

export const cookStore = createLocalStore<CookState>('recipes:cook:v1', {
  recipes: {},
  units: 'volume',
  hideChecked: false,
});

/** Progress older than this drops out of "Cooking now" and gets pruned. */
export const ACTIVE_FOR_MS = 12 * 60 * 60 * 1000;

export const emptyProgress = (title: string, total: number): RecipeProgress => ({
  title,
  step: 0,
  total,
  checked: [],
  collapsed: [],
  updatedAt: 0,
});

export function updateProgress(
  recipe: { id: number; title: string; steps: string[] },
  fn: (p: RecipeProgress) => Partial<RecipeProgress>
) {
  const now = Date.now();
  cookStore.set((s) => {
    const recipes: Record<string, RecipeProgress> = {};
    for (const [id, p] of Object.entries(s.recipes)) {
      if (now - p.updatedAt < ACTIVE_FOR_MS * 4) recipes[id] = p;
    }
    const current = recipes[recipe.id] ?? emptyProgress(recipe.title, recipe.steps.length);
    recipes[recipe.id] = { ...current, ...fn(current), title: recipe.title, total: recipe.steps.length, updatedAt: now };
    return { ...s, recipes };
  });
}

export function clearProgress(recipeId: number | string) {
  cookStore.set((s) => {
    const recipes = { ...s.recipes };
    delete recipes[recipeId];
    return { ...s, recipes };
  });
}
