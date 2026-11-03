import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { FlashcardsShell, Status } from '../../../components/flashcards/FlashcardsShell';
import { useApi, useLoad } from '../../../components/flashcards/api';
import { cleanSteps } from '../../../components/flashcards/scheduler';
import { Deck, DeckOptions, defaultDeckOptions } from '../../../components/flashcards/types';
import styles from '../../../components/flashcards/Flashcards.module.css';

function Options({ deckId }: { deckId: string }) {
  const api = useApi();
  const { data, error } = useLoad(() => api.get<Deck>(`/decks/${deckId}`), [deckId]);
  const [o, setO] = useState<DeckOptions | null>(null);
  const [learning, setLearning] = useState('');
  const [relearning, setRelearning] = useState('');
  const [subdecks, setSubdecks] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!data) return;
    setO(data.options);
    setLearning(data.options.learningSteps.join(' '));
    setRelearning(data.options.relearningSteps.join(' '));
  }, [data]);

  if (error) return <Status error={error} />;
  if (!data || !o) return <Status busy="Loading…" />;

  const set = <K extends keyof DeckOptions>(key: K, value: DeckOptions[K]) => {
    setSaved(false);
    setO({ ...o, [key]: value });
  };
  const num = (key: keyof DeckOptions) => ({
    type: 'number',
    value: String(o[key]),
    onChange: (e: { target: { value: string } }) => set(key, Number(e.target.value) as never),
  });

  const badSteps = (s: string) => s.trim() !== '' && cleanSteps(s.split(/\s+/)).length !== s.trim().split(/\s+/).length;

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setSaveError(null);
    if (badSteps(learning) || badSteps(relearning)) {
      setSaveError('Steps look like 1m 10m 1h 1d (minutes, hours or days).');
      return;
    }
    try {
      await api.patch(`/decks/${deckId}`, {
        options: {
          ...o,
          learningSteps: learning.split(/\s+/).filter(Boolean),
          relearningSteps: relearning.split(/\s+/).filter(Boolean),
        },
        applyToSubdecks: subdecks,
      });
      setSaved(true);
    } catch (err) {
      setSaveError((err as Error).message);
    }
  };

  return (
    <form onSubmit={save} className={styles.form}>
      <header className={styles.hero}>
        <h1>Options</h1>
        <p>{data.name}</p>
      </header>

      <section className={styles.panel}>
        <h2>Daily limits</h2>
        <label>
          New cards per day
          <input min={0} {...num('newPerDay')} />
        </label>
        <label>
          Maximum reviews per day
          <input min={0} {...num('reviewsPerDay')} />
        </label>
        <p className={styles.help}>Sub-decks are counted inside this deck&apos;s limits when you study from here.</p>
      </section>

      <section className={styles.panel}>
        <h2>New cards</h2>
        <label>
          Learning steps <small>e.g. 1m 10m. Cards repeat at each step before moving to longer gaps.</small>
          <input value={learning} onChange={(e) => { setLearning(e.target.value); setSaved(false); }} aria-invalid={badSteps(learning)} />
        </label>
        <label>
          Order
          <select value={o.newOrder} onChange={(e) => set('newOrder', e.target.value as DeckOptions['newOrder'])}>
            <option value="added">In the order added</option>
            <option value="random">Random</option>
          </select>
        </label>
        <label className={styles.check}>
          <input type="checkbox" checked={o.burySiblings} onChange={(e) => set('burySiblings', e.target.checked)} />
          Bury sibling cards until tomorrow (e.g. the reverse of a card you just answered)
        </label>
      </section>

      <section className={styles.panel}>
        <h2>Lapses</h2>
        <label>
          Relearning steps <small>for cards you forget</small>
          <input value={relearning} onChange={(e) => { setRelearning(e.target.value); setSaved(false); }} aria-invalid={badSteps(relearning)} />
        </label>
        <label>
          Leech threshold <small>lapses before a card is treated as a leech</small>
          <input min={1} {...num('leechThreshold')} />
        </label>
        <label>
          Leech action
          <select value={o.leechAction} onChange={(e) => set('leechAction', e.target.value as DeckOptions['leechAction'])}>
            <option value="tag">Tag only</option>
            <option value="suspend">Suspend card</option>
          </select>
        </label>
      </section>

      <section className={styles.panel}>
        <h2>Scheduling (FSRS)</h2>
        <label>
          Desired retention <small>{Math.round(o.desiredRetention * 100)}%: higher means more reviews, fewer forgotten cards</small>
          <input
            type="range"
            min={0.7}
            max={0.99}
            step={0.01}
            value={o.desiredRetention}
            onChange={(e) => set('desiredRetention', Number(e.target.value))}
          />
        </label>
        <label>
          Maximum interval (days)
          <input min={1} {...num('maxIntervalDays')} />
        </label>
      </section>

      <section className={styles.panel}>
        <h2>Audio</h2>
        <label className={styles.check}>
          <input type="checkbox" checked={o.autoplayAudio} onChange={(e) => set('autoplayAudio', e.target.checked)} />
          Play audio automatically
        </label>
      </section>

      <label className={styles.check}>
        <input type="checkbox" checked={subdecks} onChange={(e) => setSubdecks(e.target.checked)} />
        Also apply to all sub-decks
      </label>
      <div className={styles.formActions}>
        <button type="submit" className={styles.primary}>Save</button>
        <button
          type="button"
          onClick={() => {
            const d = defaultDeckOptions();
            setO(d);
            setLearning(d.learningSteps.join(' '));
            setRelearning(d.relearningSteps.join(' '));
            setSaved(false);
          }}
        >
          Restore defaults
        </button>
        {saved && <span className={styles.help} role="status">Saved.</span>}
      </div>
      <Status error={saveError} />
    </form>
  );
}

export default function DeckOptionsPage() {
  const router = useRouter();
  const deckId = typeof router.query.deckId === 'string' ? router.query.deckId : null;
  return (
    <FlashcardsShell title="Deck options" back={deckId ? { href: `/flashcards/${deckId}`, label: 'Deck' } : undefined}>
      {deckId ? <Options deckId={deckId} /> : null}
    </FlashcardsShell>
  );
}
