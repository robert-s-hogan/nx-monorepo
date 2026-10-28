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
  const meta = [
    ['Prep', recipe.prep_time],
    ['Cook', recipe.cook_time],
    ['Serves', recipe.servings],
  ].filter(([, value]) => value);

  return (
    <Link href={`/recipe/${recipe.id}`} className="rc-card">
      <span className="rc-card-title">{recipe.title}</span>
      {recipe.description && <span className="rc-card-desc">{truncatedDescription}</span>}
      {meta.length > 0 && (
        <span className="rc-meta">
          {meta.map(([label, value]) => (
            <span key={label}>
              {label} <b>{value}</b>
            </span>
          ))}
        </span>
      )}
    </Link>
  );
}
