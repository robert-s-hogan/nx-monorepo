import { readdirSync } from 'fs';
import { join } from 'path';
import { useCallback, useEffect, useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import { useAuthedFetch } from '@with-nx/auth';
import { Spinner } from '@with-nx/react-ui';

import { Photo } from '../components/Photo';
import { TaskCard } from '../components/TaskCard';
import {
  FIELDS,
  KIT_PHOTO,
  PROS,
  SCHEDULE,
  TASKS,
  blankState,
} from '../lib/content';
import { DoneKind, ProgressState } from '../types';

interface IndexProps {
  /** Photo slot name (e.g. `oil-2`) → public URL, for files present in public/photos/. */
  photos: Record<string, string>;
}

// Read at build time, so adding a photo is just dropping a file into
// public/photos/ and redeploying. Nx runs `next build` from the workspace
// root; the second path covers running from inside the app folder.
export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const dirs = [
    join(process.cwd(), 'apps/car-care/public/photos'),
    join(process.cwd(), 'public/photos'),
  ];
  let files: string[] = [];
  for (const dir of dirs) {
    try {
      // Build-time only (no revalidate), so nothing needs tracing into the
      // server bundle — without this Turbopack traces the whole repo.
      files = readdirSync(/*turbopackIgnore: true*/ dir);
      break;
    } catch {
      // try the next location
    }
  }
  const photos: Record<string, string> = {};
  for (const f of files) {
    const m = f.match(/^(.+)\.(jpe?g|png|webp)$/i);
    if (m) photos[m[1]] = `/photos/${f}`;
  }
  return { props: { photos } };
};

export default function Index({ photos }: IndexProps) {
  const authedFetch = useAuthedFetch();
  const [state, setState] = useState<ProgressState | null>(null);
  // Set right before the initial GET's setState call, so the resulting
  // render doesn't immediately PUT straight back the data we just fetched.
  const skipNextSaveRef = useRef(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      let data = blankState();
      try {
        const res = await authedFetch('/api/progress');
        if (res.ok) data = { ...blankState(), ...((await res.json()) as ProgressState) };
      } catch {
        // fall through with a blank state
      }
      if (!cancelled) {
        skipNextSaveRef.current = true;
        setState(data);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced autosave of the whole blob, same as radtech-tracker.
  useEffect(() => {
    if (!state) return;
    if (skipNextSaveRef.current) {
      skipNextSaveRef.current = false;
      return;
    }
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      authedFetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
    }, 500);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const setField = useCallback((key: string, value: string) => {
    setState((prev) => prev && { ...prev, fields: { ...prev.fields, [key]: value } });
  }, []);

  const toggleDone = useCallback((taskId: string, kind: DoneKind) => {
    const k = `${taskId}-${kind}`;
    setState((prev) => prev && { ...prev, done: { ...prev.done, [k]: !prev.done[k] } });
  }, []);

  if (!state) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Spinner />
      </div>
    );
  }

  const help = TASKS.filter((t) => state.done[`${t.id}-help`]).length;
  const solo = TASKS.filter((t) => state.done[`${t.id}-solo`]).length;

  return (
    <>
      <header className="wrap hero">
        <h1>Car care, on your own car</h1>
        <p>
          A starter guide for a new driver. Some jobs belong to a shop. The
          simple ones you&apos;ll learn to do yourself, with help the first few
          times.
        </p>
        <div className="meter">
          <div>
            <b>
              {help} / {TASKS.length}
            </b>
            <span>done with help</span>
          </div>
          <div>
            <b>
              {solo} / {TASKS.length}
            </b>
            <span>done on your own</span>
          </div>
        </div>
        <div className="bar" aria-hidden="true">
          <i style={{ width: `${(100 * solo) / TASKS.length}%` }} />
        </div>
      </header>

      <nav className="jump" aria-label="Jump to a section">
        <div className="wrap">
          <a href="#my-car">My car</a>
          <a href="#schedule">How often</a>
          <a href="#pros">Shop jobs</a>
          {TASKS.map((t) => (
            <a
              key={t.id}
              href={`#t-${t.id}`}
              className={state.done[`${t.id}-solo`] ? 'done' : undefined}
            >
              {t.short}
            </a>
          ))}
          <a href="#habits">Habits</a>
        </div>
      </nav>

      <main className="wrap">
        <section id="my-car">
          <h2>My car</h2>
          <p className="lead">
            Fill these in once. Most answers are on the driver&apos;s door
            sticker or in the owner&apos;s manual.
          </p>
          <div className="fields">
            {FIELDS.map((f) => (
              <label key={f.key} htmlFor={`f-${f.key}`}>
                {f.label}
                <input
                  type="text"
                  id={`f-${f.key}`}
                  placeholder={f.placeholder}
                  autoComplete="off"
                  value={state.fields[f.key] ?? ''}
                  onChange={(e) => setField(f.key, e.target.value)}
                />
              </label>
            ))}
          </div>
        </section>

        <section id="schedule">
          <h2>How often</h2>
          <p className="lead">The general rhythm for most cars.</p>
          <div className="scroll">
            <table>
              <thead>
                <tr>
                  <th>What</th>
                  <th>How often</th>
                  <th>Who</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map(([what, often, who]) => (
                  <tr key={what}>
                    <td>{what}</td>
                    <td>{often}</td>
                    <td>
                      <span className={`who ${who}`}>{who === 'you' ? 'You' : 'Shop'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine">
            Your owner&apos;s manual and the car&apos;s own oil-life reminder
            beat these general numbers. When they disagree, go with the car.
          </p>
        </section>

        <section id="pros">
          <h2>Leave these to a shop</h2>
          <p className="lead">
            Watch and learn, but let a shop (or your uncle) handle them.
          </p>
          <ul className="pros">
            {PROS.map(([job, why]) => (
              <li key={job}>
                <b>{job}</b>
                <span>{why}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="diy">
          <h2>Things you&apos;ll learn to do</h2>
          <p className="lead">
            Your uncle and aunt will walk you through each one the first few
            times. After that, you can do it from this page.
          </p>
          {TASKS.map((t) => (
            <TaskCard key={t.id} task={t} photos={photos} done={state.done} onToggle={toggleDone} />
          ))}
        </section>

        <section id="habits">
          <h2>Good habits</h2>
          <ul className="habits">
            <li>
              <b>Dashboard lights:</b> red usually means pull over somewhere
              safe and stop. Yellow or orange means get it checked soon. A
              flashing check-engine light means stop driving as soon as
              it&apos;s safe.
            </li>
            <li>
              <b>Weird noises or smells</b> (squealing, grinding, burning,
              sweet syrupy smell) are worth mentioning early. Small problems
              are cheaper than big ones.
            </li>
            <li>
              <b>Keep a trunk kit:</b> jumper cables, a tire gauge, rags or
              paper towels, a flashlight. Keep the owner&apos;s manual in the
              glovebox.
            </li>
            <li>
              <b>Write down the mileage</b> at every oil change so you know
              when the next one is due.
            </li>
          </ul>
          <Photo src={photos[KIT_PHOTO.slot]} caption={KIT_PHOTO.caption} />
        </section>

        <footer>
          When in doubt, open the owner&apos;s manual. It was written for this
          exact car. And if something feels off, ask before you drive on it.
        </footer>
      </main>
    </>
  );
}
