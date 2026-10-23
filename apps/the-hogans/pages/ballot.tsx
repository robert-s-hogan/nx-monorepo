import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import TheHogansLayout from '../components/TheHogansLayout';
import { MeasureRow, PICK_CLASS, PICK_LABEL } from '../components/ballot/MeasureRow';
import { ballot, matrix } from '../components/ballot/content';
import { Pick, Signal, Signals } from '../components/ballot/types';
import styles from '../components/ballot/Ballot.module.css';

// A marked-up sample ballot: the voting matrix, a scored grid, a summary
// strip, then one row per measure. Content lives in components/ballot, so a
// new election only means a new data file. The filter choice is remembered
// in this browser; nothing else is stored.
const FILTER_KEY = 'ballot-filter';

type Filter = 'all' | 'flag' | Pick;
const FILTERS: Filter[] = ['all', 'flag', 'yes', 'no', 'split', 'call'];

const SIGNAL_SYMBOL: Record<Signal, string> = { y: 'Y', n: 'N', s: '±', x: '–' };
const SIGNAL_CLASS: Record<Signal, string> = {
  y: styles.sigY,
  n: styles.sigN,
  s: styles.sigS,
  x: styles.sigX,
};
const SIGNAL_COLUMNS: (keyof Signals)[] = ['money', 'labor', 'tax', 'debt'];

/** Renders [label](url) links inside plain footer text. */
function withLinks(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!link) return <Fragment key={i}>{part}</Fragment>;
    return (
      <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
        {link[1]}
      </a>
    );
  });
}

export default function BallotPage() {
  const { measures, watch } = ballot;
  const [filter, setFilter] = useState<Filter>('all');
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const [active, setActive] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const scrollTo = useRef<string | null>(null);

  // localStorage only exists in the browser, so read it after mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(FILTER_KEY) as Filter | null;
      if (saved && FILTERS.includes(saved)) setFilter(saved);
    } catch {
      // private mode / blocked storage — start on All
    }
  }, []);

  const chooseFilter = (f: Filter) => {
    setFilter(f);
    try {
      localStorage.setItem(FILTER_KEY, f);
    } catch {
      // can't save in this browser — the filter just won't stick
    }
  };

  const isHidden = (id: string) => {
    if (filter === 'all') return false;
    const m = measures.find((x) => x.id === id);
    if (!m) return true;
    return filter === 'flag' ? !m.flag : m.pick !== filter;
  };

  // Jump from the strip or grid: open the row, show it even if the filter
  // hides it, scroll to it once it has rendered open, and flash it.
  const jumpTo = (id: string) => {
    setActive(id);
    if (isHidden(id)) chooseFilter('all');
    setOpen((s) => new Set(s).add(id));
    scrollTo.current = id;
    setFlash(null);
    requestAnimationFrame(() => setFlash(id));
  };

  useEffect(() => {
    const id = scrollTo.current;
    if (!id) return;
    scrollTo.current = null;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document
      .getElementById(`m-${id}`)
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });

  const toggleRow = (id: string, isOpen: boolean) => {
    setOpen((s) => {
      const next = new Set(s);
      if (isOpen) next.add(id);
      else next.delete(id);
      return next;
    });
    if (isOpen) setActive(id);
    else if (active === id) setActive(null);
  };

  const filterLabel = (f: Filter) =>
    f === 'all' ? 'All' : f === 'flag' ? watch?.filterLabel ?? 'Flagged' : PICK_LABEL[f];

  return (
    <TheHogansLayout title={ballot.title} description={ballot.lede} hideNavBar>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..800&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.root}>
        <div className={styles.wrap}>
          <header className={styles.header}>
            <div className={styles.eyebrow}>{ballot.eyebrow}</div>
            <h1>{ballot.title}</h1>
            <p className={styles.lede}>{ballot.lede}</p>
          </header>

          <section className={styles.matrix} aria-labelledby="mx-h">
            <h2 id="mx-h">My voting matrix</h2>
            <div className={styles.mxCols}>
              <div className={styles.mxBlock}>
                <h3>What I stand for</h3>
                <ul className={styles.principles}>
                  {matrix.principles.map((p) => (
                    <li key={p.lead}>
                      <b>{p.lead}</b>
                      {p.rest && ` ${p.rest}`}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.mxBlock}>
                <h3>Priority order</h3>
                <ol className={styles.numbered}>
                  {matrix.priorities.map((p) => (
                    <li key={p.lead}>
                      <b>{p.lead}</b>
                      {p.rest && ` ${p.rest}`}
                    </li>
                  ))}
                </ol>
                <p className={styles.note}>
                  <b>{matrix.priorityNote.lead}</b> {matrix.priorityNote.rest}
                </p>
              </div>
            </div>
            <div className={styles.mxBlock}>
              <h3>Check any measure in {matrix.steps.length} steps</h3>
              <ol className={styles.numbered}>
                {matrix.steps.map((s) => (
                  <li key={s.lead}>
                    <b>{s.lead}</b> {s.rest}
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.mxBlock}>
              <h3>This ballot, scored</h3>
              <div className={styles.gridWrap}>
                <table className={styles.grid}>
                  <thead>
                    <tr>
                      <th scope="col">Measure</th>
                      {SIGNAL_COLUMNS.map((c) => (
                        <th key={c} scope="col">
                          {c}
                        </th>
                      ))}
                      <th scope="col">My vote</th>
                    </tr>
                  </thead>
                  <tbody>
                    {measures.map((m) => (
                      <tr
                        key={m.id}
                        className={`${PICK_CLASS[m.pick]} ${active === m.id ? styles.active : ''}`}
                      >
                        <td>
                          <a
                            href={`#m-${m.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              jumpTo(m.id);
                            }}
                          >
                            {m.kind === 'Measure' ? 'Meas.' : 'Prop'} {m.id}
                          </a>
                          {m.conflict && <span className={styles.conflict}>Conflict</span>}
                        </td>
                        {SIGNAL_COLUMNS.map((c) => (
                          <td key={c}>
                            <span className={`${styles.sig} ${SIGNAL_CLASS[m.signals[c]]}`}>
                              {SIGNAL_SYMBOL[m.signals[c]]}
                            </span>
                          </td>
                        ))}
                        <td>
                          <span className={styles.vote}>
                            {m.verdict?.startsWith('Leaning') ? m.verdict : PICK_LABEL[m.pick]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.note}>
                Y or N = which way that test points. ± = split. – = doesn&apos;t apply.{' '}
                <span className={styles.conflict}>Conflict</span> = your principles
                disagreed and you made the call.
              </p>
            </div>
          </section>

          <section className={styles.section} aria-label="Summary">
            <h2>At a glance</h2>
            <div className={styles.strip}>
              {measures.map((m) => (
                <a
                  key={m.id}
                  href={`#m-${m.id}`}
                  className={[
                    PICK_CLASS[m.pick],
                    m.flag && styles.flagged,
                    active === m.id && styles.active,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-label={`${m.kind} ${m.id}: ${PICK_LABEL[m.pick]}`}
                  aria-current={active === m.id ? 'true' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    jumpTo(m.id);
                  }}
                >
                  <span className={styles.stripNum}>{m.id}</span>
                  <span className={styles.stripPick}>{PICK_LABEL[m.pick]}</span>
                </a>
              ))}
            </div>
            <p className={styles.legend}>
              {watch && (
                <>
                  <b />
                  {watch.legend}{' '}
                </>
              )}
              Tap any measure to open its details.
            </p>
          </section>

          {watch && (
            <section className={styles.watch} aria-labelledby="watch-h">
              <h2 id="watch-h">{watch.title}</h2>
              <ol>
                {watch.items.map((item) => (
                  <li key={item.lead}>
                    <strong>{item.lead}</strong> {item.body}
                    {item.names && (
                      <div className={styles.names}>
                        {item.names.map((n) => (
                          <span key={n}>{n}</span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className={styles.section}>
            <h2>Measure by measure</h2>
            <p className={styles.hint}>
              Tap a measure to see what it does, who supports it and who is paying for it.
            </p>
            <div className={styles.filters} role="group" aria-label="Filter by pick">
              {FILTERS.filter((f) => f !== 'flag' || watch).map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => chooseFilter(f)}
                >
                  {filterLabel(f)}
                </button>
              ))}
            </div>
            <div className={styles.list}>
              {measures.map((m) => (
                <MeasureRow
                  key={m.id}
                  measure={m}
                  open={open.has(m.id)}
                  active={active === m.id}
                  flash={flash === m.id}
                  hidden={isHidden(m.id)}
                  onToggle={(isOpen) => toggleRow(m.id, isOpen)}
                  onFlashEnd={() => setFlash(null)}
                />
              ))}
            </div>
          </section>

          {ballot.offices.length > 0 && (
            <section className={styles.section} aria-labelledby="np-h">
              <h2 id="np-h">Nonpartisan offices</h2>
              <div className={styles.offices}>
                {ballot.offices.map((o) => (
                  <div key={o.office} className={styles.office}>
                    <div>
                      <b>{o.office}</b>
                      <span>{o.detail}</span>
                    </div>
                    <span className={`${styles.pill} ${PICK_CLASS[o.pick]}`}>{o.choice}</span>
                  </div>
                ))}
              </div>
              <p className={styles.hint}>{ballot.officesNote}</p>
            </section>
          )}

          <footer className={styles.footer}>
            <div className={styles.dates}>
              {ballot.dates.map((d) => (
                <div key={d.date}>
                  <b>{d.date}</b>
                  <span>{d.label}</span>
                </div>
              ))}
            </div>
            {ballot.fine.map((text) => (
              <p key={text} className={styles.fine}>
                {withLinks(text)}
              </p>
            ))}
          </footer>
        </div>
      </div>
    </TheHogansLayout>
  );
}
