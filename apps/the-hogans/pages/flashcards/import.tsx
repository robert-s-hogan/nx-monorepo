import { useMemo, useState } from 'react';
import Link from 'next/link';

import { FlashcardsShell, Status } from '../../components/flashcards/FlashcardsShell';
import { useApi, useLoad } from '../../components/flashcards/api';
import { AnkiPackage, readAnkiPackage, renameMedia } from '../../components/flashcards/apkg';
import { csvNotes, mapToFields, parseCsv } from '../../components/flashcards/csv';
import { stripHtml } from '../../components/flashcards/template';
import { DeckWithCounts, DupeMode, ImportSummary, NoteType, splitTags } from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

const NOTE_BATCH = 400;

function SummaryBox({ s }: { s: ImportSummary }) {
  return (
    <div className={styles.notice} role="status">
      <p>
        <strong>Imported.</strong> {s.added} new note{s.added === 1 ? '' : 's'} ({s.cards} card{s.cards === 1 ? '' : 's'}),{' '}
        {s.updated} updated, {s.skipped} skipped.
      </p>
      {s.errors.length > 0 && (
        <ul className={styles.errorList}>
          {s.errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      <p>
        {s.deckId ? <Link href={`/flashcards/${s.deckId}`}>Go to the deck</Link> : <Link href="/flashcards">Go to your decks</Link>}
      </p>
    </div>
  );
}

function DupeSelect({ value, onChange }: { value: DupeMode; onChange: (v: DupeMode) => void }) {
  return (
    <label>
      When a note already exists <small>matched by its first field, or by Anki&apos;s note id</small>
      <select value={value} onChange={(e) => onChange(e.target.value as DupeMode)}>
        <option value="update">Update it</option>
        <option value="skip">Keep mine, skip the import</option>
        <option value="add">Add it again as a duplicate</option>
      </select>
    </label>
  );
}

function CsvImport({ types, decks }: { types: NoteType[]; decks: DeckWithCounts[] }) {
  const api = useApi();
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [deckChoice, setDeckChoice] = useState(decks[0]?.id ?? '__new');
  const [newDeck, setNewDeck] = useState('');
  const [noteType, setNoteType] = useState(types.find((t) => t.name === 'Basic')?.id ?? types[0]?.id ?? '');
  const [tags, setTags] = useState('');
  const [dupes, setDupes] = useState<DupeMode>('update');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<ImportSummary | null>(null);

  const parsed = useMemo(() => (text.trim() ? parseCsv(text) : null), [text]);
  const type = types.find((t) => t.id === noteType);
  const headerType = parsed?.header.notetype ? types.find((t) => t.name.toLowerCase() === parsed.header.notetype?.toLowerCase()) : undefined;
  const previewType = headerType ?? type;
  const preview = useMemo(
    () => (parsed && previewType ? csvNotes({ header: parsed.header, rows: parsed.rows.slice(0, 5) }).map((r) => mapToFields(r, previewType.fields)) : []),
    [parsed, previewType],
  );

  const run = async () => {
    if (!text.trim()) return;
    setBusy(true);
    setError(null);
    setSummary(null);
    try {
      const params = new URLSearchParams({ dupes });
      if (deckChoice === '__new') {
        if (newDeck.trim()) params.set('deck', newDeck.trim());
      } else params.set('deckId', deckChoice);
      if (noteType) params.set('noteType', noteType);
      if (tags.trim()) params.set('tags', splitTags(tags).join(','));
      const blob = new Blob([text], { type: 'text/csv' });
      setSummary(await api.upload<ImportSummary>(`/import/csv?${params}`, blob));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className={styles.panel}>
      <h2>CSV or text file</h2>
      <p className={styles.help}>
        One note per row, fields separated by commas or tabs, in the note type&apos;s field order. An extra column after the fields
        becomes tags. Anki&apos;s export headers (<code>#separator:</code>, <code>#deck:</code>, <code>#notetype column:</code>…) are
        understood.
      </p>
      <label>
        File
        <input
          type="file"
          accept=".csv,.tsv,.txt,text/csv,text/plain"
          onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            setFileName(f.name);
            setText(await f.text());
            setSummary(null);
          }}
        />
      </label>
      <label>
        …or paste rows
        <textarea rows={5} value={fileName ? '' : text} placeholder={fileName ? `Using ${fileName}` : 'front,back,tags'} onChange={(e) => { setFileName(null); setText(e.target.value); }} />
      </label>
      <div className={styles.pickers}>
        <label>
          Note type
          <select value={noteType} onChange={(e) => setNoteType(e.target.value)}>
            {types.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </label>
        <label>
          Deck
          <select value={deckChoice} onChange={(e) => setDeckChoice(e.target.value)}>
            {decks.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
            <option value="__new">New deck…</option>
          </select>
        </label>
      </div>
      {deckChoice === '__new' && (
        <label>
          New deck name
          <input value={newDeck} onChange={(e) => setNewDeck(e.target.value)} placeholder="e.g. Spanish::Verbs" />
        </label>
      )}
      <label>
        Tags for every note <small>optional</small>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />
      </label>
      <DupeSelect value={dupes} onChange={setDupes} />

      {parsed && previewType && (
        <div className={styles.preview}>
          <strong>{parsed.rows.length} row{parsed.rows.length === 1 ? '' : 's'}</strong>, as {previewType.name}:
          <div className={styles.tableScroll}>
            <table className={styles.previewTable}>
              <thead>
                <tr>
                  {previewType.fields.map((f) => (
                    <th key={f}>{f}</th>
                  ))}
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {preview.map((r, i) => (
                  <tr key={i}>
                    {r.fields.map((f, j) => (
                      <td key={j}>{stripHtml(f).slice(0, 60)}</td>
                    ))}
                    <td>{r.tags.join(' ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className={styles.formActions}>
        <button type="button" className={styles.primary} onClick={run} disabled={busy || !text.trim() || (deckChoice === '__new' && !newDeck.trim())}>
          {busy ? 'Importing…' : 'Import'}
        </button>
      </div>
      <Status error={error} />
      {summary && <SummaryBox s={summary} />}
    </section>
  );
}

function AnkiImport() {
  const api = useApi();
  const [pkg, setPkg] = useState<AnkiPackage | null>(null);
  const [reading, setReading] = useState(false);
  const [dupes, setDupes] = useState<DupeMode>('update');
  const [withScheduling, setWithScheduling] = useState(true);
  const [progress, setProgress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<ImportSummary | null>(null);

  const run = async () => {
    if (!pkg) return;
    setError(null);
    setSummary(null);
    try {
      const renames = new Map<string, string>();
      const failed: string[] = [];
      for (const [i, m] of pkg.media.entries()) {
        setProgress(`Uploading media ${i + 1} of ${pkg.media.length}…`);
        try {
          const { name } = await api.upload<{ name: string }>(`/media?name=${encodeURIComponent(m.name)}`, new Blob([m.data as BlobPart]));
          if (name !== m.name) renames.set(m.name, name);
        } catch (e) {
          failed.push(`${m.name}: ${(e as Error).message}`);
        }
      }
      const total: ImportSummary = { added: 0, updated: 0, skipped: 0, cards: 0, errors: failed.slice(0, 10) };
      for (let i = 0; i < pkg.notes.length; i += NOTE_BATCH) {
        setProgress(`Importing notes ${i + 1}–${Math.min(pkg.notes.length, i + NOTE_BATCH)} of ${pkg.notes.length}…`);
        const notes = pkg.notes.slice(i, i + NOTE_BATCH).map((n) => ({ ...n, fields: renameMedia(n.fields, renames) }));
        const keys = new Set(notes.map((n) => n.typeKey));
        const res = await api.post<ImportSummary>('/import/anki', {
          noteTypes: pkg.noteTypes.filter((t) => keys.has(t.key)),
          notes,
          dupes,
          withScheduling,
        });
        total.added += res.added;
        total.updated += res.updated;
        total.skipped += res.skipped;
        total.cards += res.cards;
        total.errors.push(...res.errors.slice(0, 25 - total.errors.length));
      }
      setSummary(total);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setProgress(null);
    }
  };

  return (
    <section className={styles.panel}>
      <h2>Anki package (.apkg)</h2>
      <p className={styles.help}>
        In Anki: File › Export, choose &quot;Anki Deck Package&quot;, and tick &quot;Include media&quot; (and &quot;Include
        scheduling information&quot; to keep your progress).
      </p>
      <label>
        Package
        <input
          type="file"
          accept=".apkg,.colpkg"
          onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            setPkg(null);
            setSummary(null);
            setError(null);
            setReading(true);
            try {
              setPkg(await readAnkiPackage(f));
            } catch (err) {
              setError((err as Error).message || "Couldn't read that package.");
            } finally {
              setReading(false);
            }
          }}
        />
      </label>
      {reading && <p className={styles.loading}>Reading the package…</p>}
      {pkg && (
        <>
          <p className={styles.preview}>
            {pkg.notes.length} notes · {pkg.notes.reduce((n, x) => n + x.cards.length, 0)} cards · {pkg.media.length} media files ·
            note types: {pkg.noteTypes.map((t) => t.name).join(', ')} · decks: {pkg.decks.join(', ')}
          </p>
          <DupeSelect value={dupes} onChange={setDupes} />
          <label className={styles.check}>
            <input type="checkbox" checked={withScheduling} onChange={(e) => setWithScheduling(e.target.checked)} />
            Keep review progress from Anki
          </label>
          <div className={styles.formActions}>
            <button type="button" className={styles.primary} onClick={run} disabled={!!progress}>
              {progress ? 'Importing…' : 'Import'}
            </button>
          </div>
        </>
      )}
      {progress && <p className={styles.loading} role="status">{progress}</p>}
      <Status error={error} />
      {summary && <SummaryBox s={summary} />}
    </section>
  );
}

function ImportPage() {
  const api = useApi();
  const { data, error } = useLoad(
    () =>
      Promise.all([
        api.get<NoteType[]>('/note-types'),
        api.get<{ decks: DeckWithCounts[] }>('/decks').then((r) => r.decks),
      ]),
    [],
  );
  if (error) return <Status error={error} />;
  if (!data) return <Status busy="Loading…" />;
  return (
    <>
      <header className={styles.hero}>
        <h1>Import</h1>
        <p>
          Scripts can post CSV files too, with a personal API key from <Link href="/flashcards/settings">Settings</Link>.
        </p>
      </header>
      <CsvImport types={data[0]} decks={data[1]} />
      <AnkiImport />
    </>
  );
}

export default function Import() {
  return (
    <FlashcardsShell title="Import flashcards">
      <ImportPage />
    </FlashcardsShell>
  );
}
