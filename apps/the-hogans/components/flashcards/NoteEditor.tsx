import { ClipboardEvent, DragEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import { Api, mediaUrl } from './api';
import { useMediaToken } from './FlashcardsShell';
import { sanitizeHtml } from './sanitize';
import { clozeNumbers } from './template';
import { NoteType, splitTags } from './types';
import styles from './Flashcards.module.css';

// Field editor like Anki's: rich text with a small toolbar, cloze button,
// images/audio by file picker, paste, drag-and-drop or microphone, and an
// HTML view. Field values keep media by name (<img src="dog.jpg">,
// [sound:bark.mp3]); signed URLs only exist while a field is on screen.

export interface NoteDraft {
  fields: string[];
  tags: string[];
}

/** Turns signed media URLs in edited HTML back into plain file names. */
export function unresolveMedia(html: string): string {
  return html.replace(/src="\/api\/flashcards\/media\/([^"?]+)\?[^"]*"/g, (_m, name: string) => {
    return `src="${decodeURIComponent(name)}"`;
  });
}

const isEmpty = (html: string) => html === '<br>' || html.trim() === '';

const AUDIO_EXT: Record<string, string> = { 'audio/webm': 'webm', 'audio/ogg': 'ogg', 'audio/mp4': 'm4a', 'audio/mpeg': 'mp3' };

async function uploadMedia(api: Api, file: File | Blob, name: string): Promise<string> {
  const { name: saved } = await api.upload<{ name: string }>(`/media?name=${encodeURIComponent(name)}`, file);
  return saved;
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (html: string) => void;
  api: Api;
  cloze: boolean;
  nextCloze: () => number;
  autoFocus?: boolean;
  onError: (message: string) => void;
}

function Field({ label, value, onChange, api, cloze, nextCloze, autoFocus, onError }: FieldProps) {
  const token = useMediaToken();
  const ref = useRef<HTMLDivElement>(null);
  const lastEmitted = useRef<string | null>(null);
  const [source, setSource] = useState(false);
  const [recording, setRecording] = useState<MediaRecorder | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // Only rewrite the DOM when the value changed from outside (a new note,
  // an HTML-view edit), never in response to the person's own typing.
  useEffect(() => {
    if (source || !ref.current || value === lastEmitted.current) return;
    ref.current.innerHTML = sanitizeHtml(value, (name) => mediaUrl(token, name));
    lastEmitted.current = value;
  }, [value, source, token]);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emit = () => {
    if (!ref.current) return;
    const html = isEmpty(ref.current.innerHTML) ? '' : unresolveMedia(ref.current.innerHTML);
    lastEmitted.current = html;
    onChange(html);
  };

  const exec = (cmd: string, arg?: string) => {
    ref.current?.focus();
    document.execCommand(cmd, false, arg);
    emit();
  };

  const insertMedia = async (file: File | Blob, name: string) => {
    try {
      const saved = await uploadMedia(api, file, name);
      const isImage = (file.type || '').startsWith('image/') || /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(saved);
      if (source) {
        onChange(value + (isImage ? `<img src="${saved}">` : `[sound:${saved}]`));
        return;
      }
      ref.current?.focus();
      if (isImage) document.execCommand('insertHTML', false, `<img src="${mediaUrl(token, saved)}">`);
      else document.execCommand('insertText', false, `[sound:${saved}]`);
      emit();
    } catch (e) {
      onError((e as Error).message);
    }
  };

  const addCloze = (same: boolean) => {
    const n = same ? Math.max(1, nextCloze() - 1) : nextCloze();
    const sel = window.getSelection();
    let inner = '';
    if (sel && sel.rangeCount && ref.current?.contains(sel.anchorNode)) {
      const div = document.createElement('div');
      div.appendChild(sel.getRangeAt(0).cloneContents());
      inner = div.innerHTML;
    }
    exec('insertHTML', `{{c${n}::${inner}}}`);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.shiftKey && e.key.toLowerCase() === 'c' && cloze) {
      e.preventDefault();
      addCloze(e.altKey);
    }
  };

  const onPaste = (e: ClipboardEvent) => {
    const file = Array.from(e.clipboardData.files).find((f) => /^(image|audio)\//.test(f.type));
    if (file) {
      e.preventDefault();
      const ext = file.type.split('/')[1]?.replace('jpeg', 'jpg') ?? 'png';
      insertMedia(file, `paste-${Date.now()}.${ext}`);
      return;
    }
    // Paste as clean HTML rather than whatever styling the source had.
    const html = e.clipboardData.getData('text/html');
    if (html) {
      e.preventDefault();
      document.execCommand('insertHTML', false, sanitizeHtml(html).replace(/ style="[^"]*"/g, ''));
      emit();
    }
  };

  const onDrop = (e: DragEvent) => {
    const files = Array.from(e.dataTransfer.files).filter((f) => /^(image|audio)\//.test(f.type));
    if (!files.length) return;
    e.preventDefault();
    files.forEach((f) => insertMedia(f, f.name));
  };

  const toggleRecord = async () => {
    if (recording) {
      recording.stop();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      rec.ondataavailable = (ev) => chunks.push(ev.data);
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        setRecording(null);
        const type = (rec.mimeType || 'audio/webm').split(';')[0];
        const blob = new Blob(chunks, { type });
        insertMedia(blob, `rec-${Date.now()}.${AUDIO_EXT[type] ?? 'webm'}`);
      };
      rec.start();
      setRecording(rec);
    } catch {
      onError("Couldn't use the microphone. Check the browser's permission for this site.");
    }
  };

  return (
    <div className={styles.field}>
      <div className={styles.fieldHead}>
        <span className={styles.fieldLabel}>{label}</span>
        <div className={styles.fieldTools} role="toolbar" aria-label={`${label} formatting`}>
          <button type="button" title="Bold (Ctrl+B)" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('bold')} disabled={source}><b>B</b></button>
          <button type="button" title="Italic (Ctrl+I)" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('italic')} disabled={source}><i>I</i></button>
          <button type="button" title="Underline (Ctrl+U)" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('underline')} disabled={source}><u>U</u></button>
          <button type="button" title="Superscript" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('superscript')} disabled={source}>x²</button>
          <button type="button" title="Subscript" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('subscript')} disabled={source}>x₂</button>
          <button type="button" title="Bulleted list" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('insertUnorderedList')} disabled={source}>•≡</button>
          <button type="button" title="Clear formatting" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('removeFormat')} disabled={source}>T̸</button>
          {cloze && (
            <button type="button" title="Cloze deletion (Ctrl+Shift+C; add Alt for the same number)" onMouseDown={(e) => e.preventDefault()} onClick={(e) => addCloze(e.altKey)} disabled={source}>[…]</button>
          )}
          <button type="button" title="Attach image or audio" onClick={() => fileInput.current?.click()}>📎</button>
          <button type="button" title={recording ? 'Stop recording' : 'Record audio'} onClick={toggleRecord} aria-pressed={!!recording} className={recording ? styles.recording : undefined}>
            {recording ? '■' : '🎙'}
          </button>
          <button
            type="button"
            title="HTML editor"
            onClick={() => {
              // The rich view remounts empty; make the effect refill it.
              lastEmitted.current = null;
              setSource((s) => !s);
            }}
            aria-pressed={source}
          >
            &lt;/&gt;
          </button>
        </div>
      </div>
      <input
        ref={fileInput}
        type="file"
        accept="image/*,audio/*"
        multiple
        hidden
        onChange={(e) => {
          Array.from(e.target.files ?? []).forEach((f) => insertMedia(f, f.name));
          e.target.value = '';
        }}
      />
      {source ? (
        <textarea
          className={styles.fieldSource}
          value={value}
          rows={Math.max(3, value.split('\n').length + 1)}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`${label} HTML`}
        />
      ) : (
        <div
          ref={ref}
          className={styles.fieldInput}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label={label}
          onInput={emit}
          onBlur={emit}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          onDrop={onDrop}
        />
      )}
    </div>
  );
}

interface NoteEditorProps {
  noteType: NoteType;
  value: NoteDraft;
  onChange: (draft: NoteDraft) => void;
  api: Api;
  /** Bumped by the parent to clear and refocus after "Add". */
  resetKey?: number;
}

export function NoteEditor({ noteType, value, onChange, api, resetKey }: NoteEditorProps) {
  const [error, setError] = useState<string | null>(null);
  const [tagText, setTagText] = useState(value.tags.join(' '));
  const fieldsRef = useRef(value.fields);
  fieldsRef.current = value.fields;

  useEffect(() => {
    setTagText(value.tags.join(' '));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, noteType.id]);

  return (
    <div className={styles.noteEditor}>
      {noteType.fields.map((name, i) => (
        <Field
          key={`${noteType.id}-${i}-${resetKey ?? 0}`}
          label={name}
          value={value.fields[i] ?? ''}
          api={api}
          cloze={noteType.kind === 'cloze'}
          nextCloze={() => Math.max(0, ...clozeNumbers(fieldsRef.current)) + 1}
          autoFocus={i === 0 && resetKey !== undefined && resetKey > 0}
          onError={setError}
          onChange={(html) => {
            const fields = noteType.fields.map((_f, j) => (j === i ? html : (fieldsRef.current[j] ?? '')));
            fieldsRef.current = fields;
            onChange({ fields, tags: value.tags });
          }}
        />
      ))}
      <label className={styles.tagsField}>
        Tags <small>separated by spaces; use :: for nested tags</small>
        <input
          value={tagText}
          onChange={(e) => {
            setTagText(e.target.value);
            onChange({ fields: fieldsRef.current, tags: splitTags(e.target.value) });
          }}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
      </label>
      {error && (
        <p className={styles.errorText} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
