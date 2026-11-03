import { useEffect, useMemo, useState } from 'react';

import { CardView } from '../../components/flashcards/CardView';
import { FlashcardsShell, Status, useMediaToken } from '../../components/flashcards/FlashcardsShell';
import { useApi, useLoad } from '../../components/flashcards/api';
import { renderCard } from '../../components/flashcards/template';
import { Note, NoteTemplate, NoteType } from '../../components/flashcards/types';
import styles from '../../components/flashcards/Flashcards.module.css';

// Anki's Manage Note Types: fields, card types (templates) and styling.
// Each field and card type remembers where it started (`old`), so the
// server can carry notes' content and cards' progress through renames,
// reorders and deletions.

interface FieldRow {
  name: string;
  old: number | null;
}

type TemplateRow = NoteTemplate & { old: number | null };

interface Draft {
  name: string;
  fields: FieldRow[];
  templates: TemplateRow[];
  css: string;
  sortField: number;
}

function toDraft(t: NoteType): Draft {
  return {
    name: t.name,
    fields: t.fields.map((name, i) => ({ name, old: i })),
    templates: t.templates.map((tpl, i) => ({ ...tpl, old: i })),
    css: t.css,
    sortField: t.sortField,
  };
}

function move<T>(list: T[], i: number, by: number): T[] {
  const j = i + by;
  if (j < 0 || j >= list.length) return list;
  const out = list.slice();
  [out[i], out[j]] = [out[j], out[i]];
  return out;
}

function Editor({ type, onSaved, onDeleted }: { type: NoteType; onSaved: (t: NoteType) => void; onDeleted: () => void }) {
  const api = useApi();
  const token = useMediaToken();
  const [d, setD] = useState<Draft>(() => toDraft(type));
  const [tplIndex, setTplIndex] = useState(0);
  const [side, setSide] = useState<'q' | 'a'>('q');
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setD(toDraft(type));
    setTplIndex(0);
  }, [type]);

  const change = (next: Partial<Draft>) => {
    setSaved(false);
    setD({ ...d, ...next });
  };

  const tpl = d.templates[Math.min(tplIndex, d.templates.length - 1)];
  const preview = useMemo(() => {
    const previewType: NoteType = { ...type, fields: d.fields.map((f) => f.name), templates: d.templates, css: d.css };
    const sample: Note = {
      id: 'preview',
      noteTypeId: type.id,
      fields: d.fields.map((f, i) =>
        type.kind === 'cloze' && i === 0 ? `This is a {{c1::cloze}} sample for (${f.name}).` : `(${f.name})`,
      ),
      tags: ['sample'],
      createdAt: '',
      updatedAt: '',
    };
    return renderCard(previewType, sample, type.kind === 'cloze' ? 0 : Math.min(tplIndex, d.templates.length - 1), side, {
      deckName: 'Sample deck',
      typed: 'sample',
    });
  }, [d, type, tplIndex, side]);

  const save = async () => {
    setError(null);
    try {
      const updated = await api.patch<NoteType>(`/note-types/${type.id}`, {
        noteType: {
          name: d.name,
          kind: type.kind,
          fields: d.fields.map((f) => f.name),
          templates: d.templates.map(({ name, front, back }) => ({ name, front, back })),
          css: d.css,
          sortField: d.sortField,
        },
        fieldMap: d.fields.map((f) => f.old),
        templateMap: d.templates.map((t) => t.old),
      });
      setSaved(true);
      onSaved(updated);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const removedTemplates = type.templates.length - d.templates.filter((t) => t.old !== null).length;
  const removedFields = type.fields.length - d.fields.filter((f) => f.old !== null).length;

  return (
    <div className={styles.form}>
      <label>
        Name
        <input value={d.name} onChange={(e) => change({ name: e.target.value })} />
      </label>

      <section className={styles.panel}>
        <h2>Fields</h2>
        <ol className={styles.editList}>
          {d.fields.map((f, i) => (
            <li key={i}>
              <input
                aria-label={`Field ${i + 1} name`}
                value={f.name}
                onChange={(e) => change({ fields: d.fields.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)) })}
              />
              <label className={styles.radioInline} title="Sort field: shown in the browser's first column">
                <input type="radio" name="sortField" checked={d.sortField === i} onChange={() => change({ sortField: i })} />
                Sort
              </label>
              <button type="button" aria-label="Move up" onClick={() => change({ fields: move(d.fields, i, -1), sortField: d.sortField === i ? i - 1 : d.sortField === i - 1 ? i : d.sortField })} disabled={i === 0}>↑</button>
              <button type="button" aria-label="Move down" onClick={() => change({ fields: move(d.fields, i, 1), sortField: d.sortField === i ? i + 1 : d.sortField === i + 1 ? i : d.sortField })} disabled={i === d.fields.length - 1}>↓</button>
              <button
                type="button"
                className={styles.danger}
                aria-label={`Delete field ${f.name}`}
                disabled={d.fields.length === 1}
                onClick={() => change({ fields: d.fields.filter((_x, j) => j !== i), sortField: Math.max(0, d.sortField > i ? d.sortField - 1 : d.sortField === i ? 0 : d.sortField) })}
              >
                ✕
              </button>
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => change({ fields: [...d.fields, { name: `Field ${d.fields.length + 1}`, old: null }] })}>
          Add field
        </button>
        {removedFields > 0 && <p className={styles.warning}>Saving deletes {removedFields} field{removedFields === 1 ? '' : 's'} and their content from every note of this type.</p>}
        <p className={styles.help}>Templates refer to fields by name, like {'{{Front}}'}. If you rename a field, update the templates too.</p>
      </section>

      <section className={styles.panel}>
        <h2>{type.kind === 'cloze' ? 'Card template' : 'Card types'}</h2>
        {type.kind === 'standard' && (
          <div className={styles.chips}>
            {d.templates.map((t, i) => (
              <button key={i} type="button" aria-pressed={i === tplIndex} onClick={() => setTplIndex(i)}>
                {t.name || `Card ${i + 1}`}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                const first = d.fields[0]?.name ?? 'Front';
                change({ templates: [...d.templates, { name: `Card ${d.templates.length + 1}`, front: `{{${first}}}`, back: '{{FrontSide}}\n\n<hr id=answer>\n\n', old: null }] });
                setTplIndex(d.templates.length);
              }}
            >
              + Card type
            </button>
          </div>
        )}
        {tpl && (
          <>
            {type.kind === 'standard' && (
              <div className={styles.inlineForm}>
                <label>
                  <span className={styles.srOnly}>Card type name</span>
                  <input value={tpl.name} onChange={(e) => change({ templates: d.templates.map((t, i) => (i === tplIndex ? { ...t, name: e.target.value } : t)) })} />
                </label>
                <button type="button" onClick={() => { change({ templates: move(d.templates, tplIndex, -1) }); setTplIndex(Math.max(0, tplIndex - 1)); }} disabled={tplIndex === 0}>←</button>
                <button type="button" onClick={() => { change({ templates: move(d.templates, tplIndex, 1) }); setTplIndex(Math.min(d.templates.length - 1, tplIndex + 1)); }} disabled={tplIndex === d.templates.length - 1}>→</button>
                <button
                  type="button"
                  className={styles.danger}
                  disabled={d.templates.length === 1}
                  onClick={() => {
                    change({ templates: d.templates.filter((_t, i) => i !== tplIndex) });
                    setTplIndex(0);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
            <label>
              Front template
              <textarea rows={5} value={tpl.front} onChange={(e) => change({ templates: d.templates.map((t, i) => (i === tplIndex ? { ...t, front: e.target.value } : t)) })} spellCheck={false} />
            </label>
            <label>
              Back template
              <textarea rows={5} value={tpl.back} onChange={(e) => change({ templates: d.templates.map((t, i) => (i === tplIndex ? { ...t, back: e.target.value } : t)) })} spellCheck={false} />
            </label>
          </>
        )}
        {removedTemplates > 0 && <p className={styles.warning}>Saving deletes {removedTemplates} card type{removedTemplates === 1 ? '' : 's'} and those cards&apos; review progress.</p>}
        <details className={styles.searchHelp}>
          <summary>Template syntax</summary>
          <p>
            <code>{'{{Field}}'}</code> inserts a field; <code>{'{{FrontSide}}'}</code> the question on the back;{' '}
            <code>{'{{#Field}}…{{/Field}}'}</code> only when the field has content (<code>^</code> for when it&apos;s empty);{' '}
            <code>{'{{cloze:Text}}'}</code>, <code>{'{{type:Back}}'}</code> (type the answer), <code>{'{{hint:Field}}'}</code>,{' '}
            <code>{'{{text:Field}}'}</code>, <code>{'{{Tags}}'}</code>, <code>{'{{Deck}}'}</code>, <code>{'{{Card}}'}</code>. A card type
            only makes a card when its front isn&apos;t empty.
          </p>
        </details>
        <label>
          Styling (CSS, shared by all card types)
          <textarea rows={6} value={d.css} onChange={(e) => change({ css: e.target.value })} spellCheck={false} />
        </label>
        <div className={styles.previewHead}>
          <h3>Preview</h3>
          <div className={styles.segmented}>
            <button type="button" aria-pressed={side === 'q'} onClick={() => setSide('q')}>Front</button>
            <button type="button" aria-pressed={side === 'a'} onClick={() => setSide('a')}>Back</button>
          </div>
        </div>
        <CardView className={styles.previewCard} html={preview.html} css={d.css} mediaToken={token} sounds={preview.sounds} />
      </section>

      <div className={styles.formActions}>
        <button type="button" className={styles.primary} onClick={save}>Save note type</button>
        <button type="button" onClick={() => { setD(toDraft(type)); setSaved(false); }}>Discard changes</button>
        {saved && <span className={styles.help} role="status">Saved.</span>}
      </div>
      <Status error={error} />

      <section className={styles.dangerZone}>
        <h2>Delete note type</h2>
        <p className={styles.help}>Only possible once no notes use it.</p>
        <button
          type="button"
          className={styles.danger}
          onClick={async () => {
            if (!window.confirm(`Delete the note type "${type.name}"?`)) return;
            try {
              await api.del(`/note-types/${type.id}`);
              onDeleted();
            } catch (e) {
              setError((e as Error).message);
            }
          }}
        >
          Delete
        </button>
      </section>
    </div>
  );
}

function NoteTypes() {
  const api = useApi();
  const { data, setData, error, reload } = useLoad(() => api.get<NoteType[]>('/note-types'), []);
  const [selected, setSelected] = useState<string | null>(null);
  const [cloneFrom, setCloneFrom] = useState('');
  const [newName, setNewName] = useState('');
  const [addError, setAddError] = useState<string | null>(null);

  if (error) return <Status error={error} />;
  if (!data) return <Status busy="Loading…" />;
  const type = data.find((t) => t.id === selected) ?? null;

  return (
    <>
      <header className={styles.hero}>
        <h1>Note types</h1>
        <p>The shape of your notes: which fields they have and which cards they make.</p>
      </header>
      <div className={styles.chips}>
        {data.map((t) => (
          <button key={t.id} type="button" aria-pressed={t.id === selected} onClick={() => setSelected(t.id)}>
            {t.name}
          </button>
        ))}
      </div>

      <form
        className={styles.inlineForm}
        onSubmit={async (e) => {
          e.preventDefault();
          setAddError(null);
          try {
            const created = await api.post<NoteType>('/note-types', { cloneFrom: cloneFrom || data[0]?.id, name: newName });
            setNewName('');
            setData([...data, created]);
            setSelected(created.id);
          } catch (err) {
            setAddError((err as Error).message);
          }
        }}
      >
        <label>
          <span className={styles.srOnly}>Copy from</span>
          <select value={cloneFrom} onChange={(e) => setCloneFrom(e.target.value)}>
            {data.map((t) => (
              <option key={t.id} value={t.id}>Copy of {t.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span className={styles.srOnly}>New note type name</span>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="New note type name" />
        </label>
        <button type="submit" disabled={!newName.trim()}>Add note type</button>
      </form>
      <Status error={addError} />

      {type && (
        <Editor
          type={type}
          onSaved={(t) => setData(data.map((x) => (x.id === t.id ? t : x)))}
          onDeleted={() => {
            setSelected(null);
            reload();
          }}
        />
      )}
    </>
  );
}

export default function NoteTypesPage() {
  return (
    <FlashcardsShell title="Note types">
      <NoteTypes />
    </FlashcardsShell>
  );
}
