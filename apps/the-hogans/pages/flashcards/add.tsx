import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FlashcardsShell, Status } from '../../components/flashcards/FlashcardsShell';
import { NoteDraft, NoteEditor } from '../../components/flashcards/NoteEditor';
import { useApi, useLoad } from '../../components/flashcards/api';
import { cardOrds, stripHtml } from '../../components/flashcards/template';
import { DeckWithCounts, Note, NoteType } from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

const LAST_KEY = 'flashcards:add';

function readLast(): { noteTypeId?: string; deckId?: string } {
  try {
    return JSON.parse(localStorage.getItem(LAST_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function AddNote() {
  const api = useApi();
  const router = useRouter();
  const { data, error } = useLoad(
    () =>
      Promise.all([
        api.get<NoteType[]>('/note-types'),
        api.get<{ decks: DeckWithCounts[] }>('/decks').then((r) => r.decks),
      ]),
    [],
  );
  const [noteTypeId, setNoteTypeId] = useState('');
  const [deckId, setDeckId] = useState('');
  const [draft, setDraft] = useState<NoteDraft>({ fields: [], tags: [] });
  const [resetKey, setResetKey] = useState(0);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [recent, setRecent] = useState<Note[]>([]);

  useEffect(() => {
    if (!data) return;
    const [types, decks] = data;
    const last = readLast();
    const q = typeof router.query.deck === 'string' ? router.query.deck : undefined;
    const t = types.find((x) => x.id === last.noteTypeId) ?? types[0];
    setNoteTypeId(t?.id ?? '');
    setDeckId(decks.find((d) => d.id === q)?.id ?? decks.find((d) => d.id === last.deckId)?.id ?? decks[0]?.id ?? '');
    setDraft({ fields: (t?.fields ?? []).map(() => ''), tags: [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (error) return <Status error={error} />;
  if (!data) return <Status busy="Loading…" />;
  const [types, decks] = data;
  const type = types.find((t) => t.id === noteTypeId);

  const remember = (next: { noteTypeId?: string; deckId?: string }) => {
    try {
      localStorage.setItem(LAST_KEY, JSON.stringify({ ...readLast(), ...next }));
    } catch {
      // storage blocked; just won't remember
    }
  };

  const cardsMade = type ? cardOrds(type, draft).length : 0;

  const add = async () => {
    if (!type || busy) return;
    if (!deckId) {
      setSaveError('Create a deck first, on the Decks page.');
      return;
    }
    setBusy(true);
    setSaveError(null);
    try {
      const note = await api.post<Note>('/notes', { noteTypeId: type.id, deckId, ...draft });
      setRecent((r) => [note, ...r].slice(0, 8));
      // Keep tags (Anki does), clear the fields.
      setDraft({ fields: type.fields.map(() => ''), tags: draft.tags });
      setResetKey((k) => k + 1);
    } catch (e) {
      setSaveError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      onKeyDown={(e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
          e.preventDefault();
          add();
        }
      }}
    >
      <header className={styles.hero}>
        <h1>Add</h1>
      </header>
      <div className={styles.pickers}>
        <label>
          Type
          <select
            value={noteTypeId}
            onChange={(e) => {
              const t = types.find((x) => x.id === e.target.value);
              setNoteTypeId(e.target.value);
              remember({ noteTypeId: e.target.value });
              // Carry matching content across, like Anki's note type switch.
              setDraft((d) => ({ fields: (t?.fields ?? []).map((_f, i) => d.fields[i] ?? ''), tags: d.tags }));
              setResetKey((k) => k + 1);
            }}
          >
            {types.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </label>
        <label>
          Deck
          <select
            value={deckId}
            onChange={(e) => {
              setDeckId(e.target.value);
              remember({ deckId: e.target.value });
            }}
          >
            {decks.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </label>
      </div>

      {type && (
        <NoteEditor noteType={type} value={draft} onChange={setDraft} api={api} resetKey={resetKey} />
      )}

      <div className={styles.formActions}>
        <button type="button" className={styles.primary} onClick={add} disabled={busy || !cardsMade}>
          Add <kbd>Ctrl+Enter</kbd>
        </button>
        <span className={styles.help}>
          {cardsMade
            ? `Makes ${cardsMade} card${cardsMade === 1 ? '' : 's'}.`
            : type?.kind === 'cloze'
              ? 'Select text and press […] (Ctrl+Shift+C) to make a cloze.'
              : 'Fill in the first field.'}
        </span>
      </div>
      <Status error={saveError} />

      {recent.length > 0 && (
        <section className={styles.panel}>
          <h2>Added just now</h2>
          <ul className={styles.recentList}>
            {recent.map((n) => (
              <li key={n.id}>
                <Link href={{ pathname: '/flashcards/browse', query: { q: `nid:${n.id}` } }}>
                  {stripHtml(n.fields[0] ?? '').slice(0, 80) || '(empty)'}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default function AddPage() {
  return (
    <FlashcardsShell title="Add cards">
      <AddNote />
    </FlashcardsShell>
  );
}
