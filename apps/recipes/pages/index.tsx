import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth, useAuthedFetch } from '@with-nx/auth';

import RecipesLayout from '../components/RecipesLayout';
import RecipeCard from '../components/RecipeCard';
import CookingNow from '../components/CookingNow';
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
          <Link href="/add" className="rc-dbtn solid">
            + Add recipe
          </Link>
        )
      }
    >
      <div className="rc-wrap rc-main">
        <CookingNow />

        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(searchInput ? { pathname: '/', query: { q: searchInput } } : '/');
          }}
          className="rc-search"
        >
          <input
            type="search"
            aria-label="Search recipes"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search recipes…"
            className="rc-input"
          />
          <button type="submit" className="rc-btn rc-btn-primary">
            Search
          </button>
          {q && (
            <Link href="/" className="rc-btn">
              Clear
            </Link>
          )}
        </form>

        {!loading && recipes.length === 0 && (
          <div className="rc-empty">
            <p>{q ? 'No recipes match your search.' : 'No recipes yet.'}</p>
            {!q && canEdit && (
              <Link href="/add" className="rc-btn rc-btn-primary">
                Add your first recipe
              </Link>
            )}
          </div>
        )}

        {recipes.length > 0 && (
          <div className="rc-grid">
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
