import { useMemo } from 'react';

import { type RecipeProgress, updateProgress } from '../lib/cookStore';
import { useLocalStore } from '../lib/localStore';
import { findStepTimers, formatClock } from '../lib/stepTimers';
import { isDone, startTimer, timerStore, useNow } from '../lib/timerStore';
import type { Recipe } from '../types';
import Chevron from './Chevron';
import { timerText } from './TimerDock';

interface Props {
  recipe: Recipe;
  progress: RecipeProgress;
}

function TimerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="14" r="7" />
      <path d="M12 14v-3.5M9.5 3h5M12 3v4" />
    </svg>
  );
}

export default function StepsPanel({ recipe, progress }: Props) {
  const stepTimers = useMemo(() => recipe.steps.map(findStepTimers), [recipe.steps]);
  const { timers } = useLocalStore(timerStore);
  const recipeTimers = timers.filter((t) => t.recipeId === recipe.id);
  const now = useNow(500, recipeTimers.length > 0);

  const total = recipe.steps.length;
  const current = Math.min(progress.step, total);
  const open = !progress.collapsed.includes('steps');
  const setStep = (step: number) => updateProgress(recipe, () => ({ step }));

  return (
    <section className="rc-steps" aria-label="Steps">
      <h2 className="rc-sec-head">
        <button
          type="button"
          className="rc-sec-toggle"
          aria-expanded={open}
          aria-controls="steps-body"
          onClick={() =>
            updateProgress(recipe, (p) => ({
              collapsed: p.collapsed.includes('steps') ? p.collapsed.filter((k) => k !== 'steps') : [...p.collapsed, 'steps'],
            }))
          }
        >
          <span className="rc-section-label">Steps</span>
          <span className="rc-count">
            {!total ? 'None listed' : current >= total ? 'All done' : `Step ${current + 1} of ${total}`}
          </span>
          <Chevron />
        </button>
      </h2>

      <div id="steps-body" hidden={!open}>
        {total > 0 && current >= total && (
          <div className="rc-finished">
            <b>{recipe.title} is done.</b>
            <button type="button" className="rc-btn" onClick={() => updateProgress(recipe, () => ({ step: 0, checked: [] }))}>
              Start over
            </button>
          </div>
        )}

        <ol className="rc-step-list">
          {recipe.steps.map((text, i) => {
            const active = i === current;
            const found = stepTimers[i];
            const timerControls = found.map((st) => {
              const label = `${recipe.title} · ${st.action ?? `step ${i + 1}`}`;
              const running = recipeTimers.find((t) => t.step === i && t.label === label);
              if (running) {
                const done = isDone(running, now);
                return (
                  <span key={st.seconds} className={`rc-timer-status${done ? ' is-done' : ''}`}>
                    <TimerIcon />
                    {done ? 'Done' : running.paused ? 'Paused' : 'Running'} <span className="rc-t">{timerText(running, now)}</span>
                  </span>
                );
              }
              return (
                <button
                  key={st.seconds}
                  type="button"
                  className={`rc-btn${active ? ' rc-btn-primary rc-btn-big' : ' rc-btn-small'}`}
                  onClick={() => {
                    startTimer({ label, seconds: st.seconds, recipeId: recipe.id, step: i });
                    // Registers the recipe in "Cooking now" even if nothing else was touched.
                    updateProgress(recipe, () => ({}));
                  }}
                >
                  <TimerIcon />
                  Start {formatClock(st.seconds * 1000)}
                  {found.length > 1 && st.action ? ` · ${st.action}` : ' timer'}
                </button>
              );
            });

            return (
              <li
                key={i}
                id={`step-${i}`}
                className={`rc-step${active ? ' is-active' : i < current ? ' is-past' : ''}`}
                aria-current={active ? 'step' : undefined}
              >
                <span className="rc-num">{i + 1}</span>
                <div className="rc-step-body">
                  {active ? (
                    <>
                      <span className="rc-step-count">
                        Step {i + 1} of {total}
                      </span>
                      <p className="rc-step-text">{text}</p>
                      {timerControls.length > 0 && <div className="rc-step-timers">{timerControls}</div>}
                      <div className="rc-step-nav">
                        <button type="button" className="rc-btn" disabled={i === 0} onClick={() => setStep(i - 1)}>
                          ← Back
                        </button>
                        <button type="button" className="rc-btn rc-btn-primary" onClick={() => setStep(i + 1)}>
                          {i === total - 1 ? 'Finish' : 'Next step →'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <button type="button" className="rc-step-jump" onClick={() => setStep(i)}>
                        {text}
                      </button>
                      {timerControls.length > 0 && <div className="rc-step-timers">{timerControls}</div>}
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
