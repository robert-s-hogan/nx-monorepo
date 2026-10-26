import { useEffect, useState } from 'react';

import TheHogansLayout from '../components/TheHogansLayout';
import { ChoreEditor } from '../components/chores/ChoreEditor';
import { ChoreSheet } from '../components/chores/ChoreSheet';
import { ChartState, defaultState, formatCents } from '../components/chores/content';
import styles from '../components/chores/Chores.module.css';

// Edits live in this browser only (no database), same as /dom/car-care.
// The chart itself is meant to be printed and marked by
// hand, so nothing about the week is tracked here.
const STORAGE_KEY = 'chores-chart';

function loadState(): ChartState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState(), ...(JSON.parse(raw) as ChartState) };
  } catch {
    // private mode / blocked storage — use the original chart
  }
  return defaultState();
}

export default function Chores() {
  const [state, setState] = useState<ChartState>(defaultState);
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(false);

  // localStorage only exists in the browser, so read it after mount.
  useEffect(() => {
    setState(loadState());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // can't save in this browser — edits just won't stick
    }
  }, [state, loaded]);

  const daily = state.chores.filter((c) => c.section === 'daily').length;

  return (
    <TheHogansLayout
      title="Theodore's Chores"
      description="A printable weekly chore chart that pays for habits, not labor."
      hideNavBar
      className={styles.page}
    >
      <div className={styles.root}>
        <header className={`${styles.wrap} ${styles.hero} ${styles.noPrint}`}>
          <h1>Theodore&apos;s Chores</h1>
          <p>
            A weekly chart that pays for habits, not labor. Print it, put it on
            the fridge, and mark it by hand.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={() => window.print()}>
              Print
            </button>
            <button type="button" onClick={() => setEditing((e) => !e)} aria-pressed={editing}>
              {editing ? 'Done editing' : 'Edit chores'}
            </button>
          </div>
          <p className={styles.note}>
            Prints on one landscape letter page. Edits are saved in this browser
            on this device.
          </p>
        </header>

        <div className={styles.sheetWrap}>
          {editing && (
            <div className={styles.noPrint}>
              <ChoreEditor state={state} onChange={setState} onReset={() => setState(defaultState())} />
            </div>
          )}
          <div className={styles.sheetScroll}>
            <ChoreSheet state={state} />
          </div>
        </div>

        <article className={`${styles.wrap} ${styles.guide} ${styles.noPrint}`}>
          <section>
            <h2>The theory</h2>
            <p>
              The chart pays for habits, not labor, and it makes Theodore do the
              arithmetic.
            </p>
            <ol>
              <li>
                <b>Small amounts, repeated, beat big amounts, occasional.</b> Most
                chores pay 5¢. The money is almost beside the point: the daily
                mark is the reward. Bigger amounts are saved for jobs that are
                harder or rarer.
              </li>
              <li>
                <b>Initiative is a separate category from compliance.</b> Doing
                dishes when told and starting homework unprompted are different
                skills. &ldquo;Start it yourself&rdquo; says that out loud and
                pays more than any daily chore.
              </li>
              <li>
                <b>The math is the lesson.</b> No totals appear anywhere on the
                sheet. He adds his own rows, adds the rows together, and brings
                the number.
              </li>
              <li>
                <b>Paper on a wall beats an app.</b> The chart only works if
                it&apos;s in front of him. A phone screen has to be opened; a
                fridge doesn&apos;t.
              </li>
            </ol>
          </section>

          <section>
            <h2>The sections</h2>
            <dl className={styles.sections}>
              <dt>Every day</dt>
              <dd>Expected daily and streak-eligible. Small, fast, his to remember.</dd>
              <dt>Bigger jobs</dt>
              <dd>As needed. These pay more because they&apos;re rarer or harder, not because they take longer.</dd>
              <dt>Start it yourself</dt>
              <dd>
                Nobody had to ask. If he needed a reminder, it doesn&apos;t count.
                &ldquo;Be active&rdquo; is broad on purpose, so a bike ride, a
                backyard scrimmage, or practice all count.
              </dd>
              <dt>Above and beyond</dt>
              <dd>The flexible award, explained below.</dd>
            </dl>
          </section>

          <section>
            <h2>The streak</h2>
            <p>
              Any daily chore checked all seven days pays a{' '}
              {formatCents(state.streakBonus)} bonus, shown as the dashed coin in
              the right-hand column. The bonus is worth far more than the chore
              itself, and that&apos;s the point: it makes the small items worth
              caring about and turns the week into something to finish rather
              than a set of separate days. Every streak in one week adds up to{' '}
              {formatCents(daily * state.streakBonus)} on top.
            </p>
          </section>

          <section>
            <h2>Above and beyond</h2>
            <p>
              One tally mark each time, for something really helpful that nobody
              asked for. No cap, no fixed rules. It works best when he hears
              &ldquo;that was above and beyond&rdquo; right when it happens, with
              the mark on the chart as the record, not just a tally revealed on
              payday.
            </p>
          </section>

          <section>
            <h2>Running the week</h2>
            <p>
              Print it, put it up, mark it by hand. At the end of the week he
              totals each row, adds the rows, writes the number, and brings the
              chart in to get paid. Nothing is tracked digitally and there is no
              total anywhere on the sheet. Both are on purpose.
            </p>
          </section>
        </article>
      </div>
    </TheHogansLayout>
  );
}
