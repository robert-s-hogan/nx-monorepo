import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuthedFetch } from '@with-nx/auth';

import RecipesLayout from '../components/RecipesLayout';
import QuickImportPanel from '../components/QuickImportPanel';
import RecipeForm, { RecipeFormState } from '../components/RecipeForm';
import type { RecipeInput } from '../types';

const EMPTY_FORM: RecipeFormState = {
  title: '',
  description: '',
  prepTime: '',
  cookTime: '',
  servings: '',
  ingredientsRaw: '',
  stepsRaw: '',
};

export default function AddRecipe() {
  const router = useRouter();
  const authedFetch = useAuthedFetch();
  const [form, setForm] = useState<RecipeFormState>(EMPTY_FORM);
  const titleRef = useRef<HTMLInputElement>(null);

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
    await authedFetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    router.push('/');
  }

  return (
    <RecipesLayout
      navActions={
        <Link href="/" className="bg-white text-blue-600 text-sm px-3 py-1.5 rounded font-semibold">
          Back
        </Link>
      }
    >
      <div className="container mx-auto px-4 py-4" style={{ maxWidth: 760 }}>
        <h2 className="text-2xl font-bold mb-4">Add Recipe</h2>

        <QuickImportPanel
          onParsed={(parsed) => {
            setForm((f) => ({
              ...f,
              title: parsed.title || f.title,
              description: parsed.description || f.description,
              prepTime: parsed.prep_time || f.prepTime,
              cookTime: parsed.cook_time || f.cookTime,
              servings: parsed.servings || f.servings,
              ingredientsRaw: parsed.ingredients.length ? parsed.ingredients.join('\n') : f.ingredientsRaw,
              stepsRaw: parsed.steps.length ? parsed.steps.join('\n') : f.stepsRaw,
            }));
            titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        />

        <RecipeForm
          value={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          submitLabel="Save Recipe"
          cancelHref="/"
          titleInputRef={titleRef}
        />
      </div>
    </RecipesLayout>
  );
}
