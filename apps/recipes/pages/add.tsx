import { useRef, useState } from 'react';
import Link from 'next/link';
import { useAuthedFetch } from '@with-nx/auth';
import { copyToClipboard } from '@with-nx/utils';

import RecipesLayout from '../components/RecipesLayout';
import QuickImportPanel from '../components/QuickImportPanel';
import RecipeForm, { RecipeFormState } from '../components/RecipeForm';
import { formatRecipeText } from '../lib/recipeParser';
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

function toLines(raw: string): string[] {
  return raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
}

export default function AddRecipe() {
  const authedFetch = useAuthedFetch();
  const [form, setForm] = useState<RecipeFormState>(EMPTY_FORM);
  const [savedText, setSavedText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
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
    setSavedText(
      formatRecipeText({
        title: form.title,
        description: form.description,
        servings: form.servings,
        prep_time: form.prepTime,
        cook_time: form.cookTime,
        ingredients: toLines(form.ingredientsRaw),
        steps: toLines(form.stepsRaw),
      })
    );
  }

  if (savedText !== null) {
    return (
      <RecipesLayout>
        <div className="container mx-auto px-4 py-4" style={{ maxWidth: 760 }}>
          <h2 className="text-2xl font-bold mb-4">Recipe Saved</h2>
          <p className="text-gray-500 text-sm mb-2">
            Copy the recipe as plain text below &mdash; handy for feeding into an AI chat for formatting.
          </p>
          <textarea
            readOnly
            rows={14}
            value={savedText}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2 font-mono text-sm"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => copyToClipboard(savedText, setCopied)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <Link href="/" className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded">
              Done
            </Link>
          </div>
        </div>
      </RecipesLayout>
    );
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
