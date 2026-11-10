import { FormEvent, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CardView } from '../../components/flashcards/CardView';
import { FlashcardsShell, Status, useMediaToken } from '../../components/flashcards/FlashcardsShell';
import { NoteDraft, NoteEditor } from '../../components/flashcards/NoteEditor';
import { useApi, useLoad } from '../../components/flashcards/api';
import { renderCard } from '../../components/flashcards/template';
import {
  BrowserRow,
  BulkAction,
  DeckWithCounts,
  FLAGS,
  Note,
  NoteType,
  splitTags,
} from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

const PAGE = 100;

const QUICK: { label: string; q: string }[] = [
  { label: 'Whole collection', q: '' },
  { label: 'Due today', q: 'is:due' },
  { label: 'New', q: 'is:new' },
  { label: 'Learning', q: 'is:learn' },
  { label: 'Added today', q: 'added:1' },
  { label: 'Studied today', q: 'rated:1' },
  { label: 'Again today', q: 'rated:1:1' },
  { label: 'Suspended', q: 'is:suspended' },
  { label: 'Buried', q: 'is:buried' },
  { label: 'Marked', q: 'tag:marked' },
  { label: 'Leeches', q: 'tag:leech' },
  { label: 'Flagged', q: '-flag:0' },
];

const COLUMNS: { key: string; label: string }[] = [
  { key: 'sort', label: 'Sort field' },
  { key: 'deck', label: 'Deck' },
  { key: 'due', label: 'Due' },
  { key: 'interval', label: 'Interval' },
  { key: 'reps', label: 'Reviews' },
  { key: 'lapses', label: 'Lapses' },
];

function dueLabel(r: BrowserRow): string {
  if (r.card.state === 0) return `New #${r.card.ord + 1}`;
  const d = new Date(r.card.due);
  return r.card.state === 2 ? d.toLocaleDateString() : d.toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function Browser() {
  const api = useApi();
  const token = useMediaToken();
  const router = useRouter();
  const urlQ = typeof router.query.q === 'string' ? router.query.q : '';
  const [input, setInput] = useState(urlQ);
  const [query, setQuery] = useState(urlQ);
  const [sort, setSort] = useState('created');
  const [desc, setDesc] = useState(true);
  const [rows, setRows] = useState<BrowserRow[]>([]);
  // When rows were fetched; "buried" is shown as of then.
  const [loadedAt, setLoadedAt] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [allMatching, setAllMatching] = useState(false);
  const [active, setActive] = useState<BrowserRow | null>(null);
  const [draft, setDraft] = useState<NoteDraft | null>(null);
  const [previewSide, setPreviewSide] = useState<'q' | 'a'>('q');
  const [tagText, setTagText] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const meta = useLoad(
    () =>
      Promise.all([
        api.get<NoteType[]>('/note-types'),
        api.get<{ decks: DeckWithCounts[] }>('/decks').then((r) => r.decks),
      ]),
    [],
  );
  const types = useMemo(() => new Map((meta.data?.[0] ?? []).map((t) => [t.id, t])), [meta.data]);
  const decks = meta.data?.[1] ?? [];

  useEffect(() => {
    setInput(urlQ);
    setQuery(urlQ);
  }, [urlQ]);

  const load = async (offset: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get<{ rows: BrowserRow[]; total: number }>(
        `/search?q=${encodeURIComponent(query)}&sort=${sort}&desc=${desc ? 1 : 0}&limit=${PAGE}&offset=${offset}`,
      );
      setRows((r) => (offset ? [...r, ...res.rows] : res.rows));
      setLoadedAt(Date.now());
      setTotal(res.total);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSelected(new Set());
    setAllMatching(false);
    load(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, sort, desc]);

  const search = (e: FormEvent) => {
    e.preventDefault();
    router.replace({ pathname: router.pathname, query: input ? { q: input } : {} }, undefined, { shallow: true });
    setQuery(input);
  };

  const open = (r: BrowserRow) => {
    setActive(r);
    setDraft({ fields: r.note.fields, tags: r.note.tags });
    setPreviewSide('q');
  };

  const toggle = (id: string) => {
    setAllMatching(false);
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const count = allMatching ? total : selected.size;

  const runBulk = async (op: BulkAction, confirmText?: string) => {
    if (!count) return;
    if (confirmText && !window.confirm(confirmText)) return;
    setError(null);
    try {
      const body = allMatching ? { query, op } : { cardIds: Array.from(selected), op };
      const res = await api.post<{ count: number }>('/bulk', body);
      setMessage(`Done: ${res.count} card${res.count === 1 ? '' : 's'}.`);
      if (op.action === 'deleteNotes') setActive(null);
      setSelected(new Set());
      setAllMatching(false);
      load(0);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const saveNote = async () => {
    if (!active || !draft) return;
    setError(null);
    try {
      const note = await api.patch<Note>(`/notes/${active.note.id}`, draft);
      setRows((rs) => rs.map((r) => (r.note.id === note.id ? { ...r, note } : r)));
      setActive({ ...active, note });
      setMessage('Saved.');
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const activeType = active ? types.get(active.note.noteTypeId) : undefined;
  const preview = useMemo(() => {
    if (!active || !activeType || !draft) return null;
    const note = { ...active.note, fields: draft.fields, tags: draft.tags };
    return renderCard(activeType, note, active.card.ord, previewSide, { deckName: active.deckName });
  }, [active, activeType, draft, previewSide]);

  return (
    <>
      <header className={styles.hero}>
        <h1>Browse</h1>
      </header>

      <form className={styles.inlineForm} onSubmit={search} role="search">
        <label>
          <span className={styles.srOnly}>Search</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Search: dog  deck:Spanish  tag:verbs  is:due  -is:suspended  "exact phrase"'
            autoCapitalize="off"
            spellCheck={false}
          />
        </label>
        <button type="submit" className={styles.primary}>Search</button>
      </form>
      <details className={styles.searchHelp}>
        <summary>Search syntax</summary>
        <p>
          Words match any field (<code>*</code> is a wildcard). Combine with spaces (and), <code>or</code>, <code>-</code> (not) and
          parentheses. <code>deck:Name</code> (includes sub-decks), <code>tag:x</code>, <code>note:Basic</code>, <code>card:2</code>,{' '}
          <code>is:new|learn|review|due|suspended|buried</code>, <code>flag:1</code>, <code>prop:ivl&gt;=10</code>,{' '}
          <code>prop:due&lt;=1</code>, <code>prop:lapses&gt;3</code>, <code>rated:7</code>, <code>rated:1:1</code> (Again today),{' '}
          <code>added:7</code>, <code>edited:1</code>.
        </p>
      </details>

      <div className={styles.chips}>
        {QUICK.map((f) => (
          <button key={f.label} type="button" aria-pressed={query === f.q} onClick={() => { setInput(f.q); setQuery(f.q); }}>
            {f.label}
          </button>
        ))}
        <select
          aria-label="Search a deck"
          value=""
          onChange={(e) => {
            const q = `deck:"${e.target.value}"`;
            setInput(q);
            setQuery(q);
          }}
        >
          <option value="">Deck…</option>
          {decks.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>
      </div>

      <div className={styles.bulkBar}>
        <span>
          {count ? `${count} selected` : `${total} card${total === 1 ? '' : 's'}`}
          {selected.size > 0 && !allMatching && total > selected.size && (
            <button type="button" className={styles.linkButton} onClick={() => setAllMatching(true)}>
              Select all {total}
            </button>
          )}
        </span>
        {count > 0 && (
          <div className={styles.bulkActions}>
            <select aria-label="Move to deck" value="" onChange={(e) => e.target.value && runBulk({ action: 'move', deckId: e.target.value })}>
              <option value="">Move to…</option>
              {decks.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
            <select aria-label="Flag" value="" onChange={(e) => e.target.value !== '' && runBulk({ action: 'flag', flag: Number(e.target.value) })}>
              <option value="">Flag…</option>
              <option value="0">No flag</option>
              {FLAGS.map((f) => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
            <input aria-label="Tags" placeholder="tags" value={tagText} onChange={(e) => setTagText(e.target.value)} className={styles.tagBox} />
            <button type="button" disabled={!tagText.trim()} onClick={() => runBulk({ action: 'addTags', tags: splitTags(tagText) })}>+ Tags</button>
            <button type="button" disabled={!tagText.trim()} onClick={() => runBulk({ action: 'removeTags', tags: splitTags(tagText) })}>− Tags</button>
            <button type="button" onClick={() => runBulk({ action: 'suspend' })}>Suspend</button>
            <button type="button" onClick={() => runBulk({ action: 'unsuspend' })}>Unsuspend</button>
            <button type="button" onClick={() => runBulk({ action: 'bury' })}>Bury</button>
            <button type="button" onClick={() => runBulk({ action: 'unbury' })}>Unbury</button>
            <button type="button" onClick={() => runBulk({ action: 'forget' }, `Reset ${count} card(s) to new? Their review history stays.`)}>Forget</button>
            <button
              type="button"
              onClick={() => {
                const q = allMatching ? query : `cid:${Array.from(selected).join(',')}`;
                router.push({ pathname: '/flashcards/study', query: { q, title: 'Selected cards', cram: '1', limit: '9999' } });
              }}
            >
              Study these
            </button>
            <button type="button" className={styles.danger} onClick={() => runBulk({ action: 'deleteNotes' }, `Delete the notes behind ${count} card(s), with all their cards? This can't be undone.`)}>
              Delete notes
            </button>
          </div>
        )}
      </div>
      {message && <p className={styles.notice} role="status">{message}</p>}
      <Status error={error} />

      <div className={styles.browserLayout}>
        <div className={styles.tableScroll}>
          <table className={styles.browserTable}>
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    aria-label="Select all on this page"
                    checked={rows.length > 0 && rows.every((r) => selected.has(r.card.id))}
                    onChange={(e) => {
                      setAllMatching(false);
                      setSelected(e.target.checked ? new Set(rows.map((r) => r.card.id)) : new Set());
                    }}
                  />
                </th>
                {COLUMNS.map((c) => (
                  <th key={c.key} scope="col" aria-sort={sort === c.key ? (desc ? 'descending' : 'ascending') : undefined}>
                    <button
                      type="button"
                      className={styles.sortButton}
                      onClick={() => {
                        if (sort === c.key) setDesc((d) => !d);
                        else {
                          setSort(c.key);
                          setDesc(false);
                        }
                      }}
                    >
                      {c.label} {sort === c.key ? (desc ? '▾' : '▴') : ''}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const flag = FLAGS.find((f) => f.id === r.card.flag);
                const cls = [
                  active?.card.id === r.card.id ? styles.rowActive : '',
                  r.card.suspended ? styles.rowSuspended : '',
                  r.note.tags.includes('marked') ? styles.rowMarked : '',
                ].join(' ');
                return (
                  <tr key={r.card.id} className={cls} style={flag ? { boxShadow: `inset 4px 0 0 ${flag.color}` } : undefined}>
                    <td>
                      <input type="checkbox" aria-label="Select card" checked={allMatching || selected.has(r.card.id)} onChange={() => toggle(r.card.id)} />
                    </td>
                    <td>
                      <button type="button" className={styles.rowOpen} onClick={() => open(r)}>
                        {r.sortField || '(empty)'}
                      </button>
                      <small className={styles.rowSub}>
                        {r.noteTypeName}
                        {types.get(r.note.noteTypeId)?.kind === 'cloze' ? ` · c${r.card.ord + 1}` : (types.get(r.note.noteTypeId)?.templates.length ?? 1) > 1 ? ` · ${types.get(r.note.noteTypeId)?.templates[r.card.ord]?.name}` : ''}
                        {r.card.suspended ? ' · suspended' : ''}
                        {r.card.buriedUntil && Date.parse(r.card.buriedUntil) > loadedAt ? ' · buried' : ''}
                      </small>
                    </td>
                    <td>{r.deckName}</td>
                    <td>{dueLabel(r)}</td>
                    <td>{r.card.scheduledDays ? `${r.card.scheduledDays}d` : '—'}</td>
                    <td>{r.card.reps}</td>
                    <td>{r.card.lapses}</td>
                  </tr>
                );
              })}
              {!loading && rows.length === 0 && (
                <tr>
                  <td colSpan={7} className={styles.empty}>No cards match.</td>
                </tr>
              )}
            </tbody>
          </table>
          {rows.length < total && (
            <button type="button" className={styles.secondaryWide} onClick={() => load(rows.length)} disabled={loading}>
              {loading ? 'Loading…' : `Show more (${total - rows.length} left)`}
            </button>
          )}
        </div>

        {active && draft && activeType && (
          <aside className={styles.editorPane} aria-label="Edit note">
            <div className={styles.paneHead}>
              <h2>Edit note</h2>
              <button type="button" onClick={() => setActive(null)} aria-label="Close editor">✕</button>
            </div>
            <NoteEditor key={active.note.id} noteType={activeType} value={draft} onChange={setDraft} api={api} />
            <div className={styles.formActions}>
              <button type="button" className={styles.primary} onClick={saveNote}>Save</button>
              <label className={styles.inlineLabel}>
                Deck
                <select
                  value={active.card.deckId}
                  onChange={async (e) => {
                    try {
                      const card = await api.patch<BrowserRow['card']>(`/cards/${active.card.id}`, { deckId: e.target.value });
                      const deckName = decks.find((d) => d.id === card.deckId)?.name ?? active.deckName;
                      setActive({ ...active, card, deckName });
                      setRows((rs) => rs.map((r) => (r.card.id === card.id ? { ...r, card, deckName } : r)));
                    } catch (err) {
                      setError((err as Error).message);
                    }
                  }}
                >
                  {decks.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className={styles.previewHead}>
              <h3>Preview</h3>
              <div className={styles.segmented}>
                <button type="button" aria-pressed={previewSide === 'q'} onClick={() => setPreviewSide('q')}>Front</button>
                <button type="button" aria-pressed={previewSide === 'a'} onClick={() => setPreviewSide('a')}>Back</button>
              </div>
            </div>
            {preview && (
              <CardView className={styles.previewCard} html={preview.html} css={activeType.css} mediaToken={token} sounds={preview.sounds} />
            )}
            <p className={styles.help}>
              <Link href={{ pathname: '/flashcards/study', query: { q: `nid:${active.note.id}`, title: 'Preview', cram: '1' } }}>Study this note</Link>
            </p>
          </aside>
        )}
      </div>
    </>
  );
}

export default function BrowsePage() {
  const router = useRouter();
  return (
    <FlashcardsShell title="Browse cards" wide>
      {router.isReady ? <Browser /> : null}
    </FlashcardsShell>
  );
}
