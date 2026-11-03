import { PointerEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CardView, stopAudio } from '../../components/flashcards/CardView';
import { FlashcardsShell, Status, useMediaToken } from '../../components/flashcards/FlashcardsShell';
import { NoteDraft, NoteEditor } from '../../components/flashcards/NoteEditor';
import { localDayStart, useApi } from '../../components/flashcards/api';
import { formatInterval, Grade, GRADES, previewIntervals, Rating } from '../../components/flashcards/scheduler';
import {
  addLearning,
  buildSession,
  counts as queueCounts,
  nextCard,
  SessionQueue,
  without,
} from '../../components/flashcards/session';
import { renderCard } from '../../components/flashcards/template';
import {
  Card,
  CardBundle,
  CardSnapshot,
  DeckOptions,
  FLAGS,
  NoteType,
  QueueResponse,
  ReviewResponse,
} from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

// How far a revealed card has to be dragged to count as a grade.
const SWIPE_PX = 90;
// Movement below this is still a tap.
const TAP_SLOP_PX = 8;
// Anki caps answer time at 60s so a coffee break doesn't skew stats.
const MAX_ANSWER_MS = 60000;

interface UndoEntry {
  label: string;
  /** Card to put back on screen after undoing. */
  bundle: CardBundle;
  undo: () => Promise<Card | void>;
  /** The queue as it was, so the card comes back in the same place. */
  queue: SessionQueue;
}

function snapshotOf(c: Card): CardSnapshot {
  const { id, due, stability, difficulty, elapsedDays, scheduledDays, learningSteps, reps, lapses, state, lastReview, suspended, buriedUntil, flag } = c;
  return { id, due, stability, difficulty, elapsedDays, scheduledDays, learningSteps, reps, lapses, state, lastReview, suspended, buriedUntil, flag };
}

function Reviewer({ source }: { source: { deck: string } | { q: string; cram: boolean; limit: number; title: string } }) {
  const api = useApi();
  const token = useMediaToken();
  const [loadError, setLoadError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [types, setTypes] = useState<Map<string, NoteType>>(new Map());
  const [options, setOptions] = useState<DeckOptions | null>(null);
  const [queue, setQueue] = useState<SessionQueue | null>(null);
  const [current, setCurrent] = useState<CardBundle | null>(null);
  const [waitUntil, setWaitUntil] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [typed, setTyped] = useState('');
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<NoteDraft | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [undoStack, setUndoStack] = useState<UndoEntry[]>([]);
  const [doneCount, setDoneCount] = useState(0);
  const [, setTick] = useState(0);
  const shownAt = useRef(Date.now());
  const answerMs = useRef(0);
  const replay = useRef<(() => void) | null>(null);
  const typeInput = useRef<HTMLInputElement>(null);
  const cram = 'q' in source && source.cram;
  const sourceKey = JSON.stringify(source);

  const advance = useCallback((q: SessionQueue) => {
    const next = nextCard(q, Date.now());
    setRevealed(false);
    setTyped('');
    setMenuOpen(false);
    setInfoOpen(false);
    stopAudio();
    if (next.kind === 'card') {
      setCurrent(next.bundle);
      setQueue(next.queue);
      setWaitUntil(null);
      shownAt.current = Date.now();
    } else {
      setCurrent(null);
      setQueue(q);
      setWaitUntil(next.kind === 'wait' ? next.until : null);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const path =
      'deck' in source
        ? `/queue?deck=${encodeURIComponent(source.deck)}`
        : `/queue?q=${encodeURIComponent(source.q)}&limit=${source.limit}`;
    api.get<QueueResponse>(path).then(
      (res) => {
        if (cancelled) return;
        setTypes(new Map(res.noteTypes.map((t) => [t.id, t])));
        setOptions(res.options);
        advance(buildSession(res.cards, cram));
      },
      (e: Error) => !cancelled && setLoadError(e.message),
    );
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceKey]);

  // Waiting on a learning card: check again every few seconds.
  useEffect(() => {
    if (waitUntil === null || !queue) return;
    const t = setInterval(() => {
      if (Date.now() >= waitUntil) advance(queue);
      else setTick((n) => n + 1);
    }, 5000);
    return () => clearInterval(t);
  }, [waitUntil, queue, advance]);

  const type = current ? types.get(current.note.noteTypeId) : undefined;
  const question = useMemo(
    () => (current && type ? renderCard(type, current.note, current.card.ord, 'q', { deckName: current.deckName }) : null),
    [current, type],
  );
  const answerSide = useMemo(
    () =>
      current && type && revealed
        ? renderCard(type, current.note, current.card.ord, 'a', { deckName: current.deckName, typed })
        : null,
    [current, type, revealed, typed],
  );
  const intervals = useMemo(
    () => (current && options ? previewIntervals(current.card, new Date(), options) : null),
    // Recomputed when the answer is shown, so learning steps are current.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [current, options, revealed],
  );

  const pushUndo = (entry: UndoEntry) => setUndoStack((s) => [...s.slice(-49), entry]);

  const reveal = useCallback(() => {
    if (!current || revealed) return;
    answerMs.current = Math.min(MAX_ANSWER_MS, Date.now() - shownAt.current);
    setRevealed(true);
  }, [current, revealed]);

  useEffect(() => {
    if (question?.typeAnswer !== null && question?.typeAnswer !== undefined && !revealed) {
      typeInput.current?.focus();
    }
  }, [question, revealed]);

  const run = async (fn: () => Promise<void>) => {
    if (busy) return;
    setBusy(true);
    setActionError(null);
    try {
      await fn();
    } catch (e) {
      setActionError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const grade = useCallback(
    (rating: Grade) => {
      if (!current || !queue || !revealed) return;
      const before = current;
      const queueBefore = { learning: [current, ...queue.learning], main: queue.main };
      run(async () => {
        const res = await api.post<ReviewResponse>('/review', {
          cardId: before.card.id,
          rating,
          cram,
          durationMs: answerMs.current,
          dayStart: localDayStart().toISOString(),
        });
        pushUndo({
          label: 'answer',
          bundle: before,
          queue: queueBefore,
          undo: () =>
            api.post<Card>('/undo', {
              snapshot: res.snapshot,
              reviewId: res.reviewId,
              unbury: res.buried,
              leech: res.leech !== null,
            }),
        });
        setDoneCount((n) => n + 1);
        if (res.leech) setNotice(res.leech === 'suspended' ? 'Leech: this card keeps slipping, so it was suspended and tagged "leech".' : 'Leech: this card keeps slipping, so it was tagged "leech".');
        else setNotice(null);

        let q = res.buried.length ? without(queue, (b) => res.buried.includes(b.card.id)) : queue;
        const updated: CardBundle = { ...before, card: res.card };
        const dayEnd = localDayStart().getTime() + 86400000;
        if (cram) {
          // No rescheduling: missed cards come back a few cards later.
          if (rating <= Rating.Hard) {
            const main = q.main.slice();
            main.splice(Math.min(3, main.length), 0, before);
            q = { ...q, main };
          }
        } else if ((res.card.state === 1 || res.card.state === 3) && !res.card.suspended && Date.parse(res.card.due) < dayEnd) {
          q = addLearning(q, updated);
        }
        advance(q);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [current, queue, revealed, cram],
  );

  const undo = () => {
    const entry = undoStack[undoStack.length - 1];
    if (!entry) return;
    run(async () => {
      const card = await entry.undo();
      setUndoStack((s) => s.slice(0, -1));
      const bundle = card ? { ...entry.bundle, card } : entry.bundle;
      if (entry.label === 'answer') setDoneCount((n) => Math.max(0, n - 1));
      const q = entry.queue;
      // Put the card back on screen in front of everything else.
      setQueue({ learning: q.learning.filter((b) => b.card.id !== bundle.card.id), main: q.main.filter((b) => b.card.id !== bundle.card.id) });
      setCurrent(bundle);
      setRevealed(false);
      setTyped('');
      setWaitUntil(null);
      setNotice(`Undid ${entry.label}.`);
      shownAt.current = Date.now();
    });
  };

  /** Bury/suspend/flag/delete, with undo. `scope: 'note'` hits every card of the note. */
  const cardAction = (
    label: string,
    scope: 'card' | 'note',
    action: 'bury' | 'suspend' | 'flag' | 'delete',
    flag?: number,
  ) => {
    if (!current || !queue) return;
    const target = current;
    const queueBefore = { learning: [current, ...queue.learning], main: queue.main };
    setMenuOpen(false);
    run(async () => {
      if (action === 'flag') {
        const card = await api.patch<Card>(`/cards/${target.card.id}`, { flag });
        const before = snapshotOf(target.card);
        setCurrent({ ...target, card });
        pushUndo({ label, bundle: target, queue: { learning: queue.learning, main: queue.main }, undo: () => api.post<Card>('/undo', { snapshot: before }) });
        return;
      }
      if (action === 'delete') {
        if (!window.confirm('Delete this note and all of its cards? This can\'t be undone.')) return;
        await api.del(`/notes/${target.note.id}`);
        advance(without(queue, (b) => b.note.id === target.note.id));
        setNotice('Note deleted.');
        return;
      }
      const ids =
        scope === 'card'
          ? [target.card.id]
          : (await api.get<{ cards: Card[] }>(`/notes/${target.note.id}`)).cards.map((c) => c.id);
      await api.post('/bulk', { cardIds: ids, op: { action } });
      pushUndo({
        label,
        bundle: target,
        queue: queueBefore,
        undo: async () => {
          await api.post('/bulk', { cardIds: ids, op: { action: action === 'bury' ? 'unbury' : 'unsuspend' } });
        },
      });
      advance(without(queue, (b) => ids.includes(b.card.id)));
    });
  };

  const toggleMark = () => {
    if (!current) return;
    const target = current;
    const marked = target.note.tags.includes('marked');
    const tags = marked ? target.note.tags.filter((t) => t !== 'marked') : [...target.note.tags, 'marked'];
    setMenuOpen(false);
    run(async () => {
      const note = await api.patch<CardBundle['note']>(`/notes/${target.note.id}`, { tags });
      setCurrent({ ...target, note });
    });
  };

  const saveEdit = () => {
    if (!current || !editing) return;
    const target = current;
    run(async () => {
      const note = await api.patch<CardBundle['note']>(`/notes/${target.note.id}`, editing);
      setCurrent({ ...target, note });
      setEditing(null);
    });
  };

  // Keyboard shortcuts, matching Anki's where the browser allows.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (editing) {
        if (e.key === 'Escape') setEditing(null);
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') saveEdit();
        return;
      }
      const target = e.target as HTMLElement;
      const inTypeBox = target === typeInput.current;
      if (!inTypeBox && target.closest('input, textarea, select, [contenteditable]')) return;
      if (!current) {
        if (e.key.toLowerCase() === 'z' && undoStack.length) undo();
        return;
      }
      const mod = e.metaKey || e.ctrlKey;
      if (mod && /^[1-7]$/.test(e.key)) {
        e.preventDefault();
        const f = Number(e.key);
        cardAction('flag', 'card', 'flag', current.card.flag === f ? 0 : f);
        return;
      }
      if (mod && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        undo();
        return;
      }
      if (inTypeBox) {
        if (e.key === 'Enter' && !revealed) {
          e.preventDefault();
          reveal();
        }
        return;
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (revealed) grade(Rating.Good);
        else reveal();
      } else if (revealed && /^[1-4]$/.test(e.key)) {
        grade(Number(e.key) as Grade);
      } else if (e.key === 'e') {
        setEditing({ fields: current.note.fields, tags: current.note.tags });
      } else if (e.key === 'r' || e.key === 'F5') {
        e.preventDefault();
        replay.current?.();
      } else if (e.key === 'z') {
        undo();
      } else if (e.key === '-') {
        cardAction('bury', 'card', 'bury');
      } else if (e.key === '=') {
        cardAction('bury note', 'note', 'bury');
      } else if (e.key === '@') {
        cardAction('suspend', 'card', 'suspend');
      } else if (e.key === '!') {
        cardAction('suspend note', 'note', 'suspend');
      } else if (e.key === '*') {
        toggleMark();
      } else if (e.key === 'i') {
        setInfoOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Swipe on a revealed card: right = Good, left = Again.
  const [dx, setDx] = useState(0);
  const start = useRef<number | null>(null);
  const moved = useRef(false);
  const onPointerDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input')) return;
    start.current = e.clientX;
    moved.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: PointerEvent) => {
    if (start.current === null) return;
    const d = e.clientX - start.current;
    if (Math.abs(d) > TAP_SLOP_PX) moved.current = true;
    if (revealed) setDx(d);
  };
  const onPointerUp = (e: PointerEvent) => {
    if (start.current === null) return;
    const d = e.clientX - start.current;
    start.current = null;
    setDx(0);
    if (revealed && Math.abs(d) >= SWIPE_PX) grade(d > 0 ? Rating.Good : Rating.Again);
    else if (!revealed && !moved.current && question?.typeAnswer === null) reveal();
  };

  if (loadError) return <Status error={loadError} />;
  if (!queue && !current) return <Status busy="Loading cards…" />;

  const title = 'q' in source ? source.title : current?.deckName.split('::')[0] ?? 'Study';
  const c = queue ? queueCounts(queue, current) : { newCount: 0, learnCount: 0, reviewCount: 0 };
  const flag = current ? FLAGS.find((f) => f.id === current.card.flag) : undefined;
  const marked = current?.note.tags.includes('marked');
  const back = 'deck' in source ? `/flashcards/${source.deck}` : '/flashcards';

  return (
    <>
      <header className={styles.studyHeader}>
        <h1>{title}</h1>
        <Link href={back}>Done</Link>
      </header>
      <p className={styles.queueCounts} aria-label="Cards left">
        <span className={`${styles.countNew} ${current?.card.state === 0 ? styles.countActive : ''}`} title="New">{c.newCount}</span>
        {' + '}
        <span className={`${styles.countLearn} ${current && (current.card.state === 1 || current.card.state === 3) ? styles.countActive : ''}`} title="Learning">{c.learnCount}</span>
        {' + '}
        <span className={`${styles.countReview} ${current?.card.state === 2 ? styles.countActive : ''}`} title="To review">{c.reviewCount}</span>
        {cram && <span className={styles.cramBadge}>practice: not rescheduled</span>}
      </p>

      {notice && <p className={styles.notice} role="status">{notice}</p>}
      <Status error={actionError} />

      {!current ? (
        <div className={styles.done}>
          {waitUntil ? (
            <>
              <h2>Next learning card in {formatInterval(waitUntil - Date.now())}</h2>
              <p>It&apos;ll show up here on its own. You can also study it now.</p>
              <button type="button" onClick={() => queue && advance({ learning: queue.learning.map((b) => ({ ...b, card: { ...b.card, due: new Date().toISOString() } })), main: queue.main })}>
                Study it now
              </button>
            </>
          ) : (
            <>
              <h2>Congratulations!</h2>
              <p>
                You finished {doneCount ? `${doneCount} card${doneCount === 1 ? '' : 's'}` : 'this deck'} for now.
              </p>
              <Link href={back} className={styles.buttonLink}>Back to the deck</Link>
            </>
          )}
          {undoStack.length > 0 && (
            <p>
              <button type="button" onClick={undo}>Undo {undoStack[undoStack.length - 1].label}</button>
            </p>
          )}
        </div>
      ) : editing && type ? (
        <section className={styles.panel}>
          <h2>Edit note</h2>
          <NoteEditor noteType={type} value={editing} onChange={setEditing} api={api} />
          <div className={styles.formActions}>
            <button type="button" className={styles.primary} onClick={saveEdit} disabled={busy}>Save <kbd>Ctrl+Enter</kbd></button>
            <button type="button" onClick={() => setEditing(null)}>Cancel <kbd>Esc</kbd></button>
          </div>
        </section>
      ) : (
        <div className={styles.studyArea}>
          <div
            className={`${styles.card} ${revealed ? styles.cardRevealed : ''}`}
            style={{
              transform: dx ? `translateX(${dx}px) rotate(${dx / 24}deg)` : undefined,
              transition: dx ? 'none' : undefined,
              borderTopColor: flag?.color,
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              start.current = null;
              setDx(0);
            }}
          >
            {dx !== 0 && (
              <span className={`${styles.swipeHint} ${dx > 0 ? styles.hintGood : styles.hintAgain}`} style={{ opacity: Math.min(1, Math.abs(dx) / SWIPE_PX) }}>
                {dx > 0 ? 'Good' : 'Again'}
              </span>
            )}
            <div className={styles.cardMeta}>
              {flag && <span className={styles.flagDot} style={{ background: flag.color }} title={`${flag.name} flag`} />}
              {marked && <span className={styles.markStar} title="Marked">★</span>}
              {current.deckName.includes('::') && <span className={styles.cardTag}>{current.deckName.split('::').slice(1).join(' › ')}</span>}
              {current.note.tags.filter((t) => t !== 'marked').slice(0, 6).map((t) => (
                <span key={t} className={styles.cardTag}>{t}</span>
              ))}
            </div>
            {question && (
              <CardView
                key={`${current.card.id}-${revealed ? 'a' : 'q'}`}
                html={revealed && answerSide ? answerSide.html : question.html}
                css={type?.css ?? ''}
                mediaToken={token}
                sounds={revealed && answerSide ? answerSide.sounds : question.sounds}
                autoplay={options?.autoplayAudio !== false}
                skipAutoplay={revealed && type && /\{\{FrontSide\}\}/.test((type.kind === 'cloze' ? type.templates[0] : type.templates[current.card.ord])?.back ?? '') ? question.sounds.length : 0}
                replayRef={replay}
              />
            )}
            {question?.typeAnswer !== null && question?.typeAnswer !== undefined && !revealed && (
              <input
                ref={typeInput}
                className={styles.typeIn}
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                placeholder="Type the answer, then Enter"
                aria-label="Your answer"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
            )}
            {!revealed && question?.typeAnswer === null && <p className={styles.tapHint}>Tap to show the answer</p>}
          </div>

          {revealed && intervals ? (
            <div className={styles.grades}>
              {GRADES.map(({ grade: g, label, key }) => (
                <button key={g} type="button" className={styles[`grade${label}`]} onClick={() => grade(g)} disabled={busy}>
                  <span>{label}</span>
                  <small>
                    {cram ? '' : intervals[g]} <kbd>{key}</kbd>
                  </small>
                </button>
              ))}
            </div>
          ) : (
            <button type="button" className={styles.reveal} onClick={reveal}>
              Show answer <kbd>space</kbd>
            </button>
          )}

          <div className={styles.reviewBar}>
            <button type="button" onClick={undo} disabled={!undoStack.length || busy} title="Undo (Z)">
              ↶ Undo
            </button>
            <button type="button" onClick={() => setEditing({ fields: current.note.fields, tags: current.note.tags })} title="Edit (E)">
              Edit
            </button>
            {current.card && (
              <button type="button" onClick={() => replay.current?.()} title="Replay audio (R)">
                ▶ Replay
              </button>
            )}
            <div className={styles.menuWrap}>
              <button type="button" aria-expanded={menuOpen} aria-haspopup="menu" onClick={() => setMenuOpen((o) => !o)}>
                More ▾
              </button>
              {menuOpen && (
                <div className={styles.menu} role="menu">
                  <div className={styles.flagRow} role="group" aria-label="Flag">
                    {FLAGS.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        role="menuitemradio"
                        aria-checked={current.card.flag === f.id}
                        title={`${f.name} flag (Ctrl+${f.id})`}
                        style={{ background: f.color }}
                        onClick={() => cardAction('flag', 'card', 'flag', current.card.flag === f.id ? 0 : f.id)}
                      />
                    ))}
                  </div>
                  <button type="button" role="menuitem" onClick={toggleMark}>{marked ? 'Unmark note' : 'Mark note'} <kbd>*</kbd></button>
                  <button type="button" role="menuitem" onClick={() => cardAction('bury', 'card', 'bury')}>Bury card <kbd>-</kbd></button>
                  <button type="button" role="menuitem" onClick={() => cardAction('bury note', 'note', 'bury')}>Bury note <kbd>=</kbd></button>
                  <button type="button" role="menuitem" onClick={() => cardAction('suspend', 'card', 'suspend')}>Suspend card <kbd>@</kbd></button>
                  <button type="button" role="menuitem" onClick={() => cardAction('suspend note', 'note', 'suspend')}>Suspend note <kbd>!</kbd></button>
                  <button type="button" role="menuitem" onClick={() => { setMenuOpen(false); setInfoOpen((o) => !o); }}>Card info <kbd>I</kbd></button>
                  <Link role="menuitem" href={{ pathname: '/flashcards/browse', query: { q: `nid:${current.note.id}` } }}>Open in browser</Link>
                  <button type="button" role="menuitem" className={styles.danger} onClick={() => cardAction('delete', 'note', 'delete')}>Delete note</button>
                </div>
              )}
            </div>
          </div>

          {infoOpen && (
            <dl className={styles.cardInfo}>
              <div><dt>Added</dt><dd>{new Date(current.card.createdAt).toLocaleDateString()}</dd></div>
              <div><dt>Due</dt><dd>{current.card.state === 0 ? 'New' : new Date(current.card.due).toLocaleString()}</dd></div>
              <div><dt>Interval</dt><dd>{current.card.scheduledDays ? `${current.card.scheduledDays}d` : '—'}</dd></div>
              <div><dt>Reviews</dt><dd>{current.card.reps}</dd></div>
              <div><dt>Lapses</dt><dd>{current.card.lapses}</dd></div>
              <div><dt>Stability</dt><dd>{current.card.stability ? `${current.card.stability.toFixed(1)}d` : '—'}</dd></div>
              <div><dt>Difficulty</dt><dd>{current.card.difficulty ? `${(current.card.difficulty * 10).toFixed(0)}%` : '—'}</dd></div>
              <div><dt>Card type</dt><dd>{type?.kind === 'cloze' ? `Cloze ${current.card.ord + 1}` : type?.templates[current.card.ord]?.name}</dd></div>
              <div><dt>Note type</dt><dd>{type?.name}</dd></div>
              <div><dt>Deck</dt><dd>{current.deckName}</dd></div>
            </dl>
          )}

          <p className={styles.shortcutsNote}>
            Space: show / Good · 1–4: grade · E: edit · Z: undo · R: replay · -: bury · @: suspend · *: mark · Ctrl+1–7: flag
          </p>
        </div>
      )}
    </>
  );
}

export default function Study() {
  const router = useRouter();
  if (!router.isReady) {
    return <FlashcardsShell title="Study" bare>{null}</FlashcardsShell>;
  }
  const q = router.query;
  const str = (v: unknown) => (typeof v === 'string' ? v : undefined);
  const deck = str(q.deck);
  const source = deck
    ? { deck }
    : {
        q: str(q.q) ?? '',
        cram: str(q.cram) === '1',
        limit: Number(str(q.limit) ?? 100) || 100,
        title: str(q.title) ?? 'Custom study',
      };
  return (
    <FlashcardsShell title="Study" bare>
      <Reviewer source={source} />
    </FlashcardsShell>
  );
}
