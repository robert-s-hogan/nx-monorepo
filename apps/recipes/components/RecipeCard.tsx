import Link from 'next/link';
import type { Recipe } from '../types';

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  const truncatedDescription =
    recipe.description.length > 100
      ? `${recipe.description.substring(0, 100)}…`
      : recipe.description;

  return (
    <Link href={`/recipe/${recipe.id}`} className="no-underline">
      <div className="recipe-card h-full bg-white border border-gray-200 rounded-lg flex flex-col">
        <div className="p-4 flex-1">
          <h5 className="text-lg font-bold text-gray-900">{recipe.title}</h5>
          {recipe.description && (
            <p className="text-gray-500 text-sm mt-1">{truncatedDescription}</p>
          )}
        </div>
        <div className="px-4 py-2 border-t border-gray-100 flex gap-3 text-sm text-gray-500">
          {recipe.prep_time && <span>Prep: {recipe.prep_time}</span>}
          {recipe.cook_time && <span>Cook: {recipe.cook_time}</span>}
          {recipe.servings && <span>Serves: {recipe.servings}</span>}
        </div>
      </div>
    </Link>
  );
}
