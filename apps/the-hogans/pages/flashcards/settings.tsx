import { FormEvent, useState } from 'react';

import { FlashcardsShell, Status } from '../../components/flashcards/FlashcardsShell';
import { useApi, useLoad } from '../../components/flashcards/api';
import { ApiKeyInfo } from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

function ApiKeys() {
  const api = useApi();
  const { data, setData, error } = useLoad(() => api.get<ApiKeyInfo[]>('/keys'), []);
  const [label, setLabel] = useState('');
  const [fresh, setFresh] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const origin = typeof window === 'undefined' ? 'https://www.the-hogans.com' : window.location.origin;
  const key = fresh ?? 'hfc_YOUR_KEY';

  const create = async (e: FormEvent) => {
    e.preventDefault();
    setActionError(null);
    try {
      const res = await api.post<{ key: string; info: ApiKeyInfo }>('/keys', { label });
      setFresh(res.key);
      setLabel('');
      setData([res.info, ...(data ?? [])]);
    } catch (err) {
      setActionError((err as Error).message);
    }
  };

  return (
    <section className={styles.panel}>
      <h2>API keys</h2>
      <p className={styles.help}>
        A key lets a script upload CSV files and media to <em>your</em> flashcards, without signing in. Treat it like a password;
        delete it here if it leaks.
      </p>
      <form className={styles.inlineForm} onSubmit={create}>
        <label>
          <span className={styles.srOnly}>Key name</span>
          <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="What it's for, e.g. laptop script" />
        </label>
        <button type="submit" disabled={!label.trim()}>Create key</button>
      </form>
      <Status error={error ?? actionError} />
      {fresh && (
        <div className={styles.notice} role="status">
          <p><strong>Copy this key now.</strong> It won&apos;t be shown again.</p>
          <p className={styles.keyRow}>
            <code>{fresh}</code>
            <button type="button" onClick={() => navigator.clipboard?.writeText(fresh)}>Copy</button>
          </p>
        </div>
      )}
      {data && data.length > 0 && (
        <ul className={styles.keyList}>
          {data.map((k) => (
            <li key={k.id}>
              <span>
                <strong>{k.label}</strong> <code>{k.prefix}…</code>
                <small>
                  {' '}made {new Date(k.createdAt).toLocaleDateString()}
                  {k.lastUsedAt ? `, last used ${new Date(k.lastUsedAt).toLocaleString()}` : ', never used'}
                </small>
              </span>
              <button
                type="button"
                className={styles.danger}
                onClick={async () => {
                  if (!window.confirm(`Delete the key "${k.label}"? Scripts using it will stop working.`)) return;
                  try {
                    await api.del(`/keys/${k.id}`);
                    setData(data.filter((x) => x.id !== k.id));
                  } catch (err) {
                    setActionError((err as Error).message);
                  }
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3 className={styles.subhead}>Uploading a CSV</h3>
      <pre className={styles.code}>{`curl -X POST \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: text/csv" \\
  --data-binary @cards.csv \\
  "${origin}/api/flashcards/import/csv?deck=Spanish::Verbs&noteType=Basic&tags=imported"`}</pre>
      <p className={styles.help}>
        Options: <code>deck</code> (created if missing), <code>noteType</code> (name, default Basic), <code>tags</code>{' '}
        (comma-separated), <code>dupes=update|skip|add</code>. Rows are the note type&apos;s fields in order, then optional tags.
        Anki headers in the file (<code>#deck:</code>, <code>#notetype:</code>, <code>#columns:</code>, <code>#deck column:3</code>…)
        work too, so one file can fill many decks. Up to 4 MB per request. The reply is JSON:{' '}
        <code>{'{"added":10,"updated":0,"skipped":0,"cards":10,"errors":[]}'}</code>.
      </p>
      <h3 className={styles.subhead}>Uploading an image or sound</h3>
      <pre className={styles.code}>{`curl -X POST \\
  -H "Authorization: Bearer ${key}" \\
  --data-binary @dog.jpg \\
  "${origin}/api/flashcards/media?name=dog.jpg"`}</pre>
      <p className={styles.help}>
        Then refer to it from a CSV field as <code>{'<img src="dog.jpg">'}</code> or <code>[sound:bark.mp3]</code>. The reply gives
        the stored name, which only differs if a different file already had that name.
      </p>
    </section>
  );
}

function Media() {
  const api = useApi();
  const { data, error, reload } = useLoad(
    () => api.get<{ name: string; size: number }[]>('/media'),
    [],
  );
  const [message, setMessage] = useState<string | null>(null);
  const size = (data ?? []).reduce((n, f) => n + f.size, 0);
  return (
    <section className={styles.panel}>
      <h2>Media</h2>
      <Status error={error} />
      {data && (
        <p>
          {data.length} file{data.length === 1 ? '' : 's'}, {(size / 1048576).toFixed(1)} MB.
        </p>
      )}
      <button
        type="button"
        onClick={async () => {
          if (!window.confirm('Delete images and sounds that no note uses any more?')) return;
          try {
            const res = await api.del<{ deleted: string[] }>('/media');
            setMessage(`Deleted ${res.deleted.length} unused file${res.deleted.length === 1 ? '' : 's'}.`);
            reload();
          } catch (e) {
            setMessage((e as Error).message);
          }
        }}
      >
        Delete unused media
      </button>
      {message && <p className={styles.help} role="status">{message}</p>}
    </section>
  );
}

export default function SettingsPage() {
  return (
    <FlashcardsShell title="Flashcard settings">
      <header className={styles.hero}>
        <h1>Settings</h1>
      </header>
      <ApiKeys />
      <Media />
    </FlashcardsShell>
  );
}
