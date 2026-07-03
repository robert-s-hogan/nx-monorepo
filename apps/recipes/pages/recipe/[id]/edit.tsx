import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import RecipesLayout from '../../../components/RecipesLayout';
import RecipeForm, { RecipeFormState } from '../../../components/RecipeForm';
import type { Recipe, RecipeInput } from '../../../types';

const EMPTY_FORM: RecipeFormState = {
  title: '',
  description: '',
  prepTime: '',
  cookTime: '',
  servings: '',
  ingredientsRaw: '',
  stepsRaw: '',
};

export default function EditRecipe() {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : '';
  const [form, setForm] = useState<RecipeFormState>(EMPTY_FORM);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data: Recipe) => {
        setRecipe(data);
        setForm({
          title: data.title,
          description: data.description,
          prepTime: data.prep_time,
          cookTime: data.cook_time,
          servings: data.servings,
          ingredientsRaw: data.ingredients.join('\n'),
          stepsRaw: data.steps.join('\n'),
        });
      });
  }, [id]);

  async function handleSubmit() {
    const input: RecipeInput = {
      title: form.title,
      description: form.description,
      servings: form.servings,
      prep_time: form.prepTime,
      cook_time: form.cookTime,
      ingredients_raw: form.ingredientsRaw,
      steps_raw: form.stepsRaw,
    };
    await fetch(`/api/recipes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    router.push(`/recipe/${id}`);
  }

  if (!recipe) return null;

  return (
    <RecipesLayout
      title={`Edit: ${recipe.title}`}
      navActions={
        <Link href={`/recipe/${id}`} className="bg-white text-blue-600 text-sm px-3 py-1.5 rounded font-semibold">
          Back
        </Link>
      }
    >
      <div className="container mx-auto px-4 py-4" style={{ maxWidth: 760 }}>
        <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
        <RecipeForm
          value={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          submitLabel="Save Changes"
          cancelHref={`/recipe/${id}`}
        />
      </div>
    </RecipesLayout>
  );
}
