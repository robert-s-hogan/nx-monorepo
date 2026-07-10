import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth, useAuthedFetch } from '@with-nx/auth';

import RecipesLayout from '../components/RecipesLayout';
import RecipeCard from '../components/RecipeCard';
import type { Recipe } from '../types';

function Home() {
  const router = useRouter();
  const { role } = useAuth();
  const authedFetch = useAuthedFetch();
  const canEdit = role === 'family';
  const q = typeof router.query.q === 'string' ? router.query.q : '';
  const [searchInput, setSearchInput] = useState(q);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchInput(q);
  }, [q]);

  useEffect(() => {
    if (!router.isReady) return;
    setLoading(true);
    authedFetch(`/api/recipes${q ? `?q=${encodeURIComponent(q)}` : ''}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, router.isReady]);

  return (
    <RecipesLayout
      navActions={
        canEdit && (
          <Link href="/add" className="bg-white text-blue-600 text-sm px-3 py-1.5 rounded font-semibold">
            + Add Recipe
          </Link>
        )
      }
    >
      <div className="container mx-auto max-w-4xl px-4 py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(searchInput ? { pathname: '/', query: { q: searchInput } } : '/');
          }}
          className="mb-4"
        >
          <div className="flex">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search recipes..."
              className="flex-1 border border-gray-300 rounded-l px-3 py-2"
            />
            <button type="submit" className="border border-gray-300 border-l-0 px-4 py-2 hover:bg-gray-100">
              Search
            </button>
            {q && (
              <Link
                href="/"
                className="border border-gray-300 border-l-0 rounded-r px-4 py-2 text-red-600 hover:bg-red-50 flex items-center"
              >
                Clear
              </Link>
            )}
          </div>
        </form>

        {!loading && recipes.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">{q ? 'No recipes match your search.' : 'No recipes yet.'}</p>
            {!q && canEdit && (
              <Link href="/add" className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Add your first recipe
              </Link>
            )}
          </div>
        )}

        {recipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </RecipesLayout>
  );
}

// Public: anyone with the link can browse the recipe box. Add/edit affordances
// are hidden above unless canEdit (role === 'family'); /add and /recipe/[id]/edit
// stay behind the login gate themselves as a second layer.
Home.isPublic = true;

export default Home;
