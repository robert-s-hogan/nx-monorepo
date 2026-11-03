import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FlashcardsShell, Status } from '../../../components/flashcards/FlashcardsShell';
import { StatsStrip } from '../../../components/flashcards/StatsStrip';
import { useApi, useLoad } from '../../../components/flashcards/api';
import { DeckWithCounts } from '../../../components/flashcards/types';
import styles from '../../../components/flashcards/Flashcards.module.css';

type CustomKind = 'newLimit' | 'reviewLimit' | 'forgotten' | 'ahead' | 'preview' | 'cram';

const CUSTOM: { id: CustomKind; label: string; unit: string; initial: number }[] = [
  { id: 'newLimit', label: "Increase today's new card limit", unit: 'cards', initial: 10 },
  { id: 'reviewLimit', label: "Increase today's review limit", unit: 'cards', initial: 50 },
  { id: 'forgotten', label: 'Review forgotten cards', unit: 'days back', initial: 1 },
  { id: 'ahead', label: 'Review ahead', unit: 'days ahead', initial: 1 },
  { id: 'preview', label: 'Preview new cards', unit: 'days back', initial: 1 },
  { id: 'cram', label: 'Study by card state or tag', unit: 'cards max', initial: 100 },
];

function quoted(name: string) {
  return `deck:"${name.replace(/"/g, '')}"`;
}

function Overview({ deckId }: { deckId: string }) {
  const api = useApi();
  const router = useRouter();
  const { data, error, reload } = useLoad(
    async () => {
      const { decks } = await api.get<{ decks: DeckWithCounts[] }>('/decks');
      return { deck: decks.find((d) => d.id === deckId) };
    },
    [deckId],
  );
  const [custom, setCustom] = useState<CustomKind | null>(null);
  const [amount, setAmount] = useState(10);
  const [cramState, setCramState] = useState('');
  const [cramTag, setCramTag] = useState('');
  const [reschedule, setReschedule] = useState(false);
  const [renaming, setRenaming] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  if (error) return <Status error={error} />;
  if (!data) return <Status busy="Loading…" />;
  const { deck } = data;
  if (!deck) return <p className={styles.empty}>That deck isn&apos;t in your collection.</p>;

  const total = deck.newCount + deck.learnCount + deck.reviewCount;
  const deckQ = quoted(deck.name);

  const run = async (fn: () => Promise<unknown>) => {
    setActionError(null);
    try {
      await fn();
    } catch (e) {
      setActionError((e as Error).message);
    }
  };

  const startCustom = (e: FormEvent) => {
    e.preventDefault();
    if (!custom) return;
    const n = Math.max(1, Math.round(amount));
    const go = (q: string, title: string, cram: boolean, limit = 9999) =>
      router.push({
        pathname: '/flashcards/study',
        query: { q, title, cram: cram ? '1' : '0', limit: String(limit) },
      });
    run(async () => {
      switch (custom) {
        case 'newLimit':
          await api.patch(`/decks/${deck.id}`, { extra: { newCards: n } });
          return router.push({ pathname: '/flashcards/study', query: { deck: deck.id } });
        case 'reviewLimit':
          await api.patch(`/decks/${deck.id}`, { extra: { reviews: n } });
          return router.push({ pathname: '/flashcards/study', query: { deck: deck.id } });
        case 'forgotten':
          return go(`${deckQ} rated:${n}:1`, `Forgotten in the last ${n} day${n === 1 ? '' : 's'}`, !reschedule);
        case 'ahead':
          return go(`${deckQ} -is:new prop:due<=${n}`, `Review ahead ${n} day${n === 1 ? '' : 's'}`, !reschedule);
        case 'preview':
          return go(`${deckQ} is:new added:${n}`, 'Preview new cards', true);
        case 'cram': {
          const q = [deckQ, cramState, cramTag.trim() ? `tag:${cramTag.trim()}` : ''].filter(Boolean).join(' ');
          return go(q, `${deck.name}: custom`, !reschedule, n);
        }
      }
    });
  };

  return (
    <>
      <header className={styles.hero}>
        {renaming === null ? (
          <h1>{deck.name}</h1>
        ) : (
          <form
            className={styles.inlineForm}
            onSubmit={(e) => {
              e.preventDefault();
              run(async () => {
                await api.patch(`/decks/${deck.id}`, { name: renaming });
                setRenaming(null);
                reload();
              });
            }}
          >
            <label>
              <span className={styles.srOnly}>Deck name</span>
              <input value={renaming} onChange={(e) => setRenaming(e.target.value)} autoFocus />
            </label>
            <button type="submit" className={styles.primary}>Save</button>
            <button type="button" onClick={() => setRenaming(null)}>Cancel</button>
          </form>
        )}
      </header>

      <StatsStrip
        stats={[
          { label: 'New', value: deck.newCount },
          { label: 'Learning', value: deck.learnCount },
          { label: 'To review', value: deck.reviewCount },
          { label: 'Cards', value: deck.total },
        ]}
      />

      {total > 0 ? (
        <Link href={{ pathname: '/flashcards/study', query: { deck: deck.id } }} className={`${styles.buttonLink} ${styles.primary} ${styles.studyNow}`}>
          Study now
        </Link>
      ) : (
        <div className={styles.done}>
          <h2>All done for today</h2>
          <p>Come back tomorrow, or try a custom study session below.</p>
        </div>
      )}

      <div className={styles.toolbar}>
        <Link href={{ pathname: '/flashcards/add', query: { deck: deck.id } }} className={styles.buttonLink}>Add cards</Link>
        <Link href={{ pathname: '/flashcards/browse', query: { q: deckQ } }} className={styles.buttonLink}>Browse</Link>
        <Link href={`/flashcards/${deck.id}/options`} className={styles.buttonLink}>Options</Link>
        <button type="button" onClick={() => setRenaming(deck.name)}>Rename</button>
        <button
          type="button"
          onClick={() =>
            run(async () => {
              const res = await api.fetchRaw(`/export?deck=${deck.id}`);
              if (!res.ok) throw new Error('Export failed');
              const url = URL.createObjectURL(await res.blob());
              const a = document.createElement('a');
              a.href = url;
              a.download = `${deck.name.replace(/[^\w-]+/g, '-')}.csv`;
              a.click();
              URL.revokeObjectURL(url);
            })
          }
        >
          Export CSV
        </button>
        <button
          type="button"
          onClick={() =>
            run(async () => {
              await api.post('/bulk', { query: `${deckQ} is:buried`, op: { action: 'unbury' } });
              reload();
            })
          }
        >
          Unbury
        </button>
      </div>
      <Status error={actionError} />

      <section className={styles.panel}>
        <h2>Custom study</h2>
        <form onSubmit={startCustom} className={styles.form}>
          <fieldset className={styles.radioList}>
            <legend className={styles.srOnly}>Kind of session</legend>
            {CUSTOM.map((c) => (
              <label key={c.id} className={styles.radio}>
                <input
                  type="radio"
                  name="custom"
                  checked={custom === c.id}
                  onChange={() => {
                    setCustom(c.id);
                    setAmount(c.initial);
                  }}
                />
                {c.label}
              </label>
            ))}
          </fieldset>
          {custom && (
            <>
              <label>
                {CUSTOM.find((c) => c.id === custom)?.unit}
                <input type="number" min={1} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
              </label>
              {custom === 'cram' && (
                <>
                  <label>
                    Cards
                    <select value={cramState} onChange={(e) => setCramState(e.target.value)}>
                      <option value="">All cards</option>
                      <option value="is:new">New cards only</option>
                      <option value="-is:new">Cards I&apos;ve seen</option>
                      <option value="is:due">Due cards only</option>
                      <option value="prop:lapses>=1">Cards I&apos;ve forgotten before</option>
                    </select>
                  </label>
                  <label>
                    Tag <small>optional; * works as a wildcard</small>
                    <input value={cramTag} onChange={(e) => setCramTag(e.target.value)} />
                  </label>
                </>
              )}
              {['forgotten', 'ahead', 'cram'].includes(custom) && (
                <label className={styles.check}>
                  <input type="checkbox" checked={reschedule} onChange={(e) => setReschedule(e.target.checked)} />
                  Reschedule cards based on my answers
                </label>
              )}
              <div className={styles.formActions}>
                <button type="submit" className={styles.primary}>Start</button>
              </div>
            </>
          )}
        </form>
      </section>

      <section className={styles.dangerZone}>
        <h2>Delete deck</h2>
        <p className={styles.help}>Deletes this deck, its sub-decks and all of their cards.</p>
        <button
          type="button"
          className={styles.danger}
          onClick={() => {
            if (!window.confirm(`Delete "${deck.name}" and its ${deck.total} cards? This can't be undone.`)) return;
            run(async () => {
              await api.del(`/decks/${deck.id}`);
              router.push('/flashcards');
            });
          }}
        >
          Delete deck
        </button>
      </section>
    </>
  );
}

export default function DeckOverview() {
  const router = useRouter();
  const deckId = typeof router.query.deckId === 'string' ? router.query.deckId : null;
  return (
    <FlashcardsShell title="Deck" back={{ href: '/flashcards', label: 'All decks' }}>
      {deckId ? <Overview deckId={deckId} /> : null}
    </FlashcardsShell>
  );
}
