import { useMemo } from 'react';

import { cookStore, type RecipeProgress, updateProgress } from '../lib/cookStore';
import { formatGrams, groupIngredients, type ParsedIngredient } from '../lib/ingredients';
import type { Recipe } from '../types';
import Chevron from './Chevron';

interface Props {
  recipe: Recipe;
  progress: RecipeProgress;
  units: 'volume' | 'grams';
  hideChecked: boolean;
}

function IngredientText({ ingredient, units }: { ingredient: ParsedIngredient; units: Props['units'] }) {
  const { amount, name, text, unit, grams } = ingredient;
  if (!amount) {
    return (
      <span>
        {text}
        {grams !== null && <span className="rc-conv">{formatGrams(grams)}</span>}
      </span>
    );
  }
  const showGrams = units === 'grams' && grams !== null && unit !== 'g';
  const main = showGrams ? formatGrams(grams) : amount;
  const alt = showGrams ? amount : grams !== null && unit !== 'g' ? formatGrams(grams) : null;
  return (
    <span>
      <b className="rc-amt">{main}</b> {name}
      {alt && <span className="rc-conv">{alt}</span>}
    </span>
  );
}

function toggleIn<T>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

export default function IngredientsPanel({ recipe, progress, units, hideChecked }: Props) {
  const groups = useMemo(() => groupIngredients(recipe.ingredients), [recipe.ingredients]);
  const items = groups.flatMap((g) => g.items);
  const checkedCount = items.filter((i) => progress.checked.includes(i.index)).length;
  const hasGrams = items.some((i) => i.ingredient.grams !== null);
  const multi = groups.length > 1 || groups[0]?.title !== null;
  const open = !progress.collapsed.includes('ingredients');

  const toggleSection = (key: string) => updateProgress(recipe, (p) => ({ collapsed: toggleIn(p.collapsed, key) }));

  return (
    <section className="rc-ingredients" aria-label="Ingredients">
      <h2 className="rc-sec-head">
        <button
          type="button"
          className="rc-sec-toggle"
          aria-expanded={open}
          aria-controls="ingredients-body"
          onClick={() => toggleSection('ingredients')}
        >
          <span className="rc-section-label">Ingredients</span>
          <span className="rc-count">{items.length ? `${checkedCount} of ${items.length} checked` : 'None listed'}</span>
          <Chevron />
        </button>
      </h2>
      <div className="rc-mini-bar" aria-hidden="true">
        <span style={{ width: `${items.length ? (checkedCount / items.length) * 100 : 0}%` }} />
      </div>

      <div className="rc-ing-body" id="ingredients-body" hidden={!open}>
        {items.length > 0 && (
          <div className="rc-ing-tools">
            {hasGrams && (
              <div className="rc-seg" role="group" aria-label="Measure in">
                {(['volume', 'grams'] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    aria-pressed={units === u}
                    onClick={() => cookStore.set((s) => ({ ...s, units: u }))}
                  >
                    {u === 'volume' ? 'Cups & spoons' : 'Grams'}
                  </button>
                ))}
              </div>
            )}
            <button
              type="button"
              className="rc-tool"
              aria-pressed={hideChecked}
              onClick={() => cookStore.set((s) => ({ ...s, hideChecked: !s.hideChecked }))}
            >
              Hide checked
            </button>
            <button
              type="button"
              className="rc-tool"
              disabled={!checkedCount}
              onClick={() => updateProgress(recipe, () => ({ checked: [] }))}
            >
              Uncheck all
            </button>
          </div>
        )}

        {groups.map((group, gi) => {
          const key = `group-${gi}`;
          const groupOpen = !progress.collapsed.includes(key);
          const left = group.items.filter((i) => !progress.checked.includes(i.index)).length;
          const hiddenCount = hideChecked ? group.items.length - left : 0;
          return (
            <div key={key} className="rc-grp">
              {multi && (
                <button type="button" className="rc-grp-toggle" aria-expanded={groupOpen} onClick={() => toggleSection(key)}>
                  <span>{group.title ?? 'Ingredients'}</span>
                  <span className="rc-count">{left ? `${left} left` : 'All set'}</span>
                  <Chevron />
                </button>
              )}
              <ul hidden={multi && !groupOpen}>
                {group.items.map(({ index, ingredient }) => {
                  const checked = progress.checked.includes(index);
                  if (checked && hideChecked) return null;
                  return (
                    <li key={index}>
                      <label className={`rc-ing${checked ? ' is-checked' : ''}`} htmlFor={`ing-${index}`}>
                        <input
                          id={`ing-${index}`}
                          type="checkbox"
                          checked={checked}
                          onChange={() => updateProgress(recipe, (p) => ({ checked: toggleIn(p.checked, index) }))}
                        />
                        <IngredientText ingredient={ingredient} units={units} />
                      </label>
                    </li>
                  );
                })}
                {hiddenCount > 0 && (
                  <li className="rc-ing-note">{left === 0 ? 'All gathered ✓' : `${hiddenCount} checked, hidden`}</li>
                )}
              </ul>
            </div>
          );
        })}

        {hasGrams && <p className="rc-ing-foot">Grams use a typical weight for each ingredient, so treat them as close, not exact.</p>}
      </div>
    </section>
  );
}
