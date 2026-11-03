import { FormEvent, useState } from 'react';
import Link from 'next/link';

import { FlashcardsShell, Status } from '../../components/flashcards/FlashcardsShell';
import { StatsStrip } from '../../components/flashcards/StatsStrip';
import { useApi, useLoad } from '../../components/flashcards/api';
import { DECK_SEP, DeckWithCounts } from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

interface DecksResponse {
  decks: DeckWithCounts[];
  stats: { reviewedToday: number; minutesToday: number; streak: number };
}

function depth(name: string) {
  return name.split(DECK_SEP).length - 1;
}

function DeckList() {
  const api = useApi();
  const { data, error, reload } = useLoad(() => api.get<DecksResponse>('/decks'), []);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [newName, setNewName] = useState('');
  const [busyError, setBusyError] = useState<string | null>(null);

  if (error) return <Status error={error} />;
  if (!data) return <Status busy="Loading decks…" />;

  const { decks, stats } = data;
  const top = decks.filter((d) => depth(d.name) === 0);
  const due = top.reduce((n, d) => n + d.newCount + d.learnCount + d.reviewCount, 0);
  const hidden = (name: string) =>
    Array.from(collapsed).some((c) => name.startsWith(c + DECK_SEP));
  const hasChildren = (name: string) => decks.some((d) => d.name.startsWith(name + DECK_SEP));

  const create = async (e: FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    try {
      await api.post('/decks', { name: newName });
      setNewName('');
      reload();
    } catch (err) {
      setBusyError((err as Error).message);
    }
  };

  return (
    <>
      <header className={styles.hero}>
        <h1>Flashcards</h1>
        <p>Spaced repetition: cards you know come back less often, and cards you miss come back soon.</p>
      </header>

      <StatsStrip
        stats={[
          { label: 'Due today', value: due },
          { label: 'Studied today', value: stats.reviewedToday },
          { label: 'Minutes', value: stats.minutesToday },
          { label: 'Day streak', value: stats.streak },
        ]}
      />

      <table className={styles.deckTable}>
        <thead>
          <tr>
            <th scope="col">Deck</th>
            <th scope="col" className={styles.num}>New</th>
            <th scope="col" className={styles.num}>Learn</th>
            <th scope="col" className={styles.num}>Due</th>
          </tr>
        </thead>
        <tbody>
          {decks
            .filter((d) => !hidden(d.name))
            .map((d) => {
              const level = depth(d.name);
              const leaf = d.name.split(DECK_SEP).pop();
              const parent = hasChildren(d.name);
              return (
                <tr key={d.id}>
                  <th scope="row" style={{ paddingLeft: `${8 + level * 18}px` }}>
                    {parent ? (
                      <button
                        type="button"
                        className={styles.twisty}
                        aria-label={collapsed.has(d.name) ? `Expand ${leaf}` : `Collapse ${leaf}`}
                        aria-expanded={!collapsed.has(d.name)}
                        onClick={() =>
                          setCollapsed((c) => {
                            const next = new Set(c);
                            if (next.has(d.name)) next.delete(d.name);
                            else next.add(d.name);
                            return next;
                          })
                        }
                      >
                        {collapsed.has(d.name) ? '▸' : '▾'}
                      </button>
                    ) : (
                      <span className={styles.twistySpace} />
                    )}
                    <Link href={`/flashcards/${d.id}`}>{leaf}</Link>
                  </th>
                  <td className={`${styles.num} ${styles.countNew}`}>{d.newCount || '·'}</td>
                  <td className={`${styles.num} ${styles.countLearn}`}>{d.learnCount || '·'}</td>
                  <td className={`${styles.num} ${styles.countReview}`}>{d.reviewCount || '·'}</td>
                </tr>
              );
            })}
          {decks.length === 0 && (
            <tr>
              <td colSpan={4} className={styles.empty}>
                No decks yet. Create one below or <Link href="/flashcards/import">import a file</Link>.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <form className={styles.inlineForm} onSubmit={create}>
        <label>
          <span className={styles.srOnly}>New deck name</span>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="New deck (use :: for sub-decks, e.g. Spanish::Verbs)"
          />
        </label>
        <button type="submit" disabled={!newName.trim()}>
          Create deck
        </button>
      </form>
      <Status error={busyError} />

      <div className={styles.toolbar}>
        <Link href="/flashcards/add" className={styles.buttonLink}>Add cards</Link>
        <Link href="/flashcards/browse" className={styles.buttonLink}>Browse</Link>
        <Link href="/flashcards/import" className={styles.buttonLink}>Import</Link>
      </div>
    </>
  );
}

export default function FlashcardDecks() {
  return (
    <FlashcardsShell title="Flashcards">
      <DeckList />
    </FlashcardsShell>
  );
}
