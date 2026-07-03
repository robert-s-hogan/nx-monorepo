export interface Recipe {
  id: number;
  title: string;
  description: string;
  servings: string;
  prep_time: string;
  cook_time: string;
  ingredients: string[];
  steps: string[];
  created_at: string;
}

export interface RecipeInput {
  title: string;
  description: string;
  servings: string;
  prep_time: string;
  cook_time: string;
  ingredients_raw: string;
  steps_raw: string;
}
