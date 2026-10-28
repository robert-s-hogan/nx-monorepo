import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth, useAuthedFetch } from '@with-nx/auth';

import RecipesLayout from '../../components/RecipesLayout';
import CookingNow from '../../components/CookingNow';
import IngredientsPanel from '../../components/IngredientsPanel';
import StepsPanel from '../../components/StepsPanel';
import { cookStore, emptyProgress, updateProgress } from '../../lib/cookStore';
import { useLocalStore } from '../../lib/localStore';
import type { Recipe } from '../../types';

function RecipeDetail() {
  const router = useRouter();
  const { role } = useAuth();
  const authedFetch = useAuthedFetch();
  const canEdit = role === 'family';
  const id = typeof router.query.id === 'string' ? router.query.id : '';
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const cook = useLocalStore(cookStore);

  useEffect(() => {
    if (!id) return;
    setNotFound(false);
    fetch(`/api/recipes/${id}`).then(async (res) => {
      if (res.status === 404) {
        setNotFound(true);
        return;
      }
      setRecipe(await res.json());
    });
  }, [id]);

  // "Go to step" on a timer links here with ?step=N. Jump to it, then drop
  // the query so a reload doesn't jump again.
  const stepParam = typeof router.query.step === 'string' ? Number(router.query.step) : null;
  useEffect(() => {
    if (!recipe || String(recipe.id) !== id || stepParam === null) return;
    if (Number.isInteger(stepParam)) updateProgress(recipe, () => ({ step: stepParam }));
    router.replace(`/recipe/${recipe.id}`, undefined, { shallow: true, scroll: false });
    requestAnimationFrame(() =>
      document.getElementById(`step-${stepParam}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe, id, stepParam]);

  async function handleDelete() {
    await authedFetch(`/api/recipes/${id}`, { method: 'DELETE' });
    router.push('/');
  }

  if (notFound) {
    return (
      <RecipesLayout>
        <div className="rc-wrap rc-empty">Recipe not found.</div>
      </RecipesLayout>
    );
  }

  if (!recipe) return null;

  const progress = cook.recipes[recipe.id] ?? emptyProgress(recipe.title, recipe.steps.length);
  const meta = [
    ['Serves', recipe.servings],
    ['Prep', recipe.prep_time],
    ['Cook', recipe.cook_time],
  ].filter(([, value]) => value);

  return (
    <RecipesLayout
      title={recipe.title}
      navActions={
        <>
          {canEdit && (
            <Link href={`/recipe/${recipe.id}/edit`} className="rc-dbtn">
              Edit
            </Link>
          )}
          <Link href="/" className="rc-dbtn">
            All recipes
          </Link>
        </>
      }
    >
      <div className="rc-wrap rc-main">
        <CookingNow excludeId={recipe.id} />

        <div className="rc-rhead">
          <h1>{recipe.title}</h1>
          {meta.length > 0 && (
            <div className="rc-meta">
              {meta.map(([label, value]) => (
                <span key={label}>
                  {label} <b>{value}</b>
                </span>
              ))}
            </div>
          )}
          {recipe.description && <p className="rc-description">{recipe.description}</p>}
        </div>

        <div className="rc-cook">
          <IngredientsPanel recipe={recipe} progress={progress} units={cook.units} hideChecked={cook.hideChecked} />
          <StepsPanel recipe={recipe} progress={progress} />
        </div>

        {canEdit && (
          <div className="rc-danger">
            {confirmDelete ? (
              <>
                <span>Delete this recipe?</span>
                <button type="button" onClick={handleDelete} className="rc-btn rc-btn-danger">
                  Yes, delete
                </button>
                <button type="button" onClick={() => setConfirmDelete(false)} className="rc-btn">
                  Cancel
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setConfirmDelete(true)} className="rc-btn rc-btn-danger-outline">
                Delete recipe
              </button>
            )}
          </div>
        )}
      </div>
    </RecipesLayout>
  );
}

// Public: shareable "quick reminder of a recipe" link, no login required.
// Edit/Delete are hidden above unless canEdit (role === 'family').
RecipeDetail.isPublic = true;

export default RecipeDetail;
