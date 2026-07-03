import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import RecipesLayout from '../../components/RecipesLayout';
import type { Recipe } from '../../types';

export default function RecipeDetail() {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : '';
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/recipes/${id}`).then(async (res) => {
      if (res.status === 404) {
        setNotFound(true);
        return;
      }
      setRecipe(await res.json());
    });
  }, [id]);

  async function handleDelete() {
    await fetch(`/api/recipes/${id}`, { method: 'DELETE' });
    router.push('/');
  }

  if (notFound) {
    return (
      <RecipesLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8 text-center text-gray-500">
          Recipe not found.
        </div>
      </RecipesLayout>
    );
  }

  if (!recipe) return null;

  return (
    <RecipesLayout
      title={recipe.title}
      navActions={
        <>
          <Link href={`/recipe/${recipe.id}/edit`} className="bg-white text-blue-600 text-sm px-3 py-1.5 rounded font-semibold">
            Edit
          </Link>
          <Link href="/" className="border border-white text-white text-sm px-3 py-1.5 rounded">
            Back
          </Link>
        </>
      }
    >
      <div className="container mx-auto px-4 py-4" style={{ maxWidth: 760 }}>
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>

        {(recipe.prep_time || recipe.cook_time || recipe.servings) && (
          <div className="flex gap-4 mb-3 text-gray-500">
            {recipe.prep_time && (
              <div>
                <span className="font-semibold">Prep:</span> {recipe.prep_time}
              </div>
            )}
            {recipe.cook_time && (
              <div>
                <span className="font-semibold">Cook:</span> {recipe.cook_time}
              </div>
            )}
            {recipe.servings && (
              <div>
                <span className="font-semibold">Serves:</span> {recipe.servings}
              </div>
            )}
          </div>
        )}

        {recipe.description && <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h4 className="border-b border-gray-300 pb-2 font-bold text-lg mb-2">Ingredients</h4>
            {recipe.ingredients.length === 0 ? (
              <p className="text-gray-500">None listed.</p>
            ) : (
              <ul className="space-y-1">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 shrink-0" />
                      <span>{ing}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="md:col-span-2">
            <h4 className="border-b border-gray-300 pb-2 font-bold text-lg mb-2">Instructions</h4>
            {recipe.steps.length === 0 ? (
              <p className="text-gray-500">None listed.</p>
            ) : (
              <ol className="steps-list list-decimal list-inside space-y-3">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            )}
          </div>
        </div>

        <hr className="my-6" />

        {confirmDelete ? (
          <div className="flex items-center gap-2 text-gray-500">
            <span>Delete this recipe?</span>
            <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded font-semibold">
              Yes, delete
            </button>
            <button onClick={() => setConfirmDelete(false)} className="border border-gray-300 text-sm px-3 py-1.5 rounded">
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            className="border border-red-600 text-red-600 hover:bg-red-50 text-sm px-3 py-1.5 rounded"
          >
            Delete Recipe
          </button>
        )}
      </div>
    </RecipesLayout>
  );
}
