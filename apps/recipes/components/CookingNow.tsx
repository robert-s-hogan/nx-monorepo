import Link from 'next/link';

import { ACTIVE_FOR_MS, clearProgress, cookStore } from '../lib/cookStore';
import { useLocalStore } from '../lib/localStore';
import { isDone, timerStore, useNow } from '../lib/timerStore';
import { timerText } from './TimerDock';

interface Props {
  /** The recipe already on screen, left out of the strip. */
  excludeId?: number;
}

// Recipes you're partway through on this device, plus any with running
// timers — one tap to jump back to them.
export default function CookingNow({ excludeId }: Props) {
  const { recipes } = useLocalStore(cookStore);
  const { timers } = useLocalStore(timerStore);
  const now = useNow(1000, timers.length > 0);

  const ids = new Set(
    Object.entries(recipes)
      .filter(([, p]) => now - p.updatedAt < ACTIVE_FOR_MS && p.step < p.total && (p.step > 0 || p.checked.length > 0))
      .map(([id]) => id)
  );
  timers.forEach((t) => t.recipeId !== null && ids.add(String(t.recipeId)));
  if (excludeId !== undefined) ids.delete(String(excludeId));
  if (!ids.size) return null;

  return (
    <nav className="rc-switcher" aria-label="Cooking now">
      {[...ids].map((id) => {
        const progress = recipes[id];
        const recipeTimers = timers.filter((t) => String(t.recipeId) === id);
        const title = progress?.title ?? recipeTimers[0]?.label.split(' · ')[0] ?? 'Recipe';
        return (
          <div key={id} className="rc-rcard">
            <Link href={`/recipe/${id}`} className="rc-rcard-link">
              <span className="rc-rcard-name">{title}</span>
              <span className="rc-rcard-meta">
                {progress && <span>{`Step ${Math.min(progress.step + 1, progress.total)} of ${progress.total}`}</span>}
                {recipeTimers.map((t) => (
                  <span key={t.id} className={`rc-tpill${isDone(t, now) ? ' is-done' : ''}`}>
                    {timerText(t, now)}
                  </span>
                ))}
              </span>
            </Link>
            {progress && (
              <button
                type="button"
                className="rc-rcard-clear"
                aria-label={`Stop tracking ${title}`}
                onClick={() => clearProgress(id)}
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </nav>
  );
}
