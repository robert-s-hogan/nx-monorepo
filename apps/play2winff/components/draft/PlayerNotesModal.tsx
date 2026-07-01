import { useEffect, useState } from 'react';

import type { DraftPlayer } from '../../lib/server/draft';
import { fetchNotesForPlayer, saveNote, PlayerNote } from '../../hooks/usePlayerNotes';

export interface PlayerNotesModalProps {
  player: DraftPlayer;
  onClose: () => void;
  onNoteSaved: (nameCanon: string, note: string) => void;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export const PlayerNotesModal = ({
  player,
  onClose,
  onNoteSaved,
}: PlayerNotesModalProps) => {
  const [noteText, setNoteText] = useState('');
  const [history, setHistory] = useState<PlayerNote[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchNotesForPlayer(player.name).then(setHistory);
  }, [player.name]);

  async function submit() {
    if (!noteText.trim()) return;
    setSaving(true);
    try {
      const updated = await saveNote(player.name, noteText);
      setHistory(updated);
      onNoteSaved(player.name_canon, noteText.trim());
      setNoteText('');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-md space-y-4 rounded-xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">{player.name}</h2>
          <button
            onClick={onClose}
            className="text-xl leading-none text-slate-400 hover:text-slate-600"
          >
            ×
          </button>
        </div>

        <div className="space-y-2">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            rows={3}
            placeholder="Add a note (e.g. knee injury camp report 6/30)"
            className="w-full resize-none rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <button
            onClick={submit}
            disabled={saving || !noteText.trim()}
            className="rounded bg-slate-900 px-4 py-1.5 text-sm text-white transition hover:bg-slate-700 disabled:opacity-40"
          >
            {saving ? 'Saving…' : 'Add note'}
          </button>
        </div>

        {history.length > 0 ? (
          <div className="space-y-2 border-t border-slate-100 pt-3">
            <p className="text-xs font-medium uppercase text-slate-500">
              History
            </p>
            {history.map((n, i) => (
              <div
                key={i}
                className="border-l-2 border-slate-200 pl-3 text-sm text-slate-700"
              >
                <p>{n.note}</p>
                <p className="mt-0.5 text-[10px] text-slate-400">
                  {fmtDate(n.created_at)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400">No notes yet.</p>
        )}
      </div>
    </div>
  );
};
