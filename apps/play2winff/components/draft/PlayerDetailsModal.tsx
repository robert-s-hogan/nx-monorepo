import { useEffect, useState } from 'react';

import type { DraftPlayer } from '../../lib/server/draft';
import {
  fetchNotesForPlayer,
  saveNote,
  deleteNote,
  PlayerNote,
} from '../../hooks/usePlayerNotes';
import {
  setInjuryForPlayer,
  clearInjuryForPlayer,
  PlayerInjury,
} from '../../hooks/usePlayerInjury';
import { setTeamForPlayer } from '../../hooks/usePlayerTeam';
import { TEAM_OPTIONS } from './teamClass';

export interface PlayerDetailsModalProps {
  player: DraftPlayer;
  onClose: () => void;
  onNoteSaved: (nameCanon: string, note: string) => void;
  onInjurySaved: (nameCanon: string, injury: PlayerInjury | null) => void;
  onTeamSaved: (nameCanon: string, team: string | null) => void;
  canEdit: boolean;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export const PlayerDetailsModal = ({
  player,
  onClose,
  onNoteSaved,
  onInjurySaved,
  onTeamSaved,
  canEdit,
}: PlayerDetailsModalProps) => {
  const [noteText, setNoteText] = useState('');
  const [history, setHistory] = useState<PlayerNote[]>([]);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [injuryText, setInjuryText] = useState(player.injury?.injury ?? '');
  const [returnText, setReturnText] = useState(player.injury?.expectedReturn ?? '');
  const [onIR, setOnIR] = useState(player.injury?.onIR ?? false);
  const [savingInjury, setSavingInjury] = useState(false);

  const [team, setTeam] = useState(player.team ?? '');
  const [savingTeam, setSavingTeam] = useState(false);

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

  async function removeNote(id: number) {
    setDeletingId(id);
    try {
      await deleteNote(id);
      setHistory((prev) => prev.filter((n) => n.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  async function submitTeam() {
    if (!team || team === player.team) return;
    setSavingTeam(true);
    try {
      const result = await setTeamForPlayer(player.name, team);
      onTeamSaved(player.name_canon, result);
    } finally {
      setSavingTeam(false);
    }
  }

  async function submitInjury() {
    if (!injuryText.trim()) return;
    setSavingInjury(true);
    try {
      const result = await setInjuryForPlayer(
        player.name,
        injuryText,
        returnText.trim() || null,
        onIR
      );
      onInjurySaved(player.name_canon, result);
    } finally {
      setSavingInjury(false);
    }
  }

  async function removeInjury() {
    setSavingInjury(true);
    try {
      await clearInjuryForPlayer(player.name);
      setInjuryText('');
      setReturnText('');
      setOnIR(false);
      onInjurySaved(player.name_canon, null);
    } finally {
      setSavingInjury(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-md space-y-4 rounded-xl border border-border-color bg-surface-color p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-text-color">{player.name}</h2>
          <button
            onClick={onClose}
            className="text-xl leading-none text-text-color opacity-60 hover:opacity-100"
          >
            ×
          </button>
        </div>

        <div className="space-y-2 border-b border-border-color pb-4">
          <p className="text-xs font-medium uppercase text-text-color opacity-70">
            Team
          </p>
          {canEdit ? (
            <div className="flex gap-2">
              <select
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                className="w-full rounded border border-border-color bg-bg-color px-3 py-1.5 text-sm text-text-color focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">— Select team —</option>
                {TEAM_OPTIONS.map((t) => (
                  <option key={t.code} value={t.code}>
                    {t.code} — {t.name}
                  </option>
                ))}
              </select>
              <button
                onClick={submitTeam}
                disabled={savingTeam || !team || team === player.team}
                className="shrink-0 rounded bg-primary px-3 py-1 text-xs font-semibold text-(--text-on-primary-color) transition hover:bg-hover-color disabled:opacity-40"
              >
                {savingTeam ? 'Saving…' : 'Save'}
              </button>
            </div>
          ) : (
            <p className="text-sm text-text-color">{player.team ?? 'Unknown'}</p>
          )}
        </div>

        <div className="space-y-2 border-b border-border-color pb-4">
          <p className="text-xs font-medium uppercase text-text-color opacity-70">
            Injury
          </p>
          {canEdit ? (
            <div className="space-y-2">
              <input
                value={injuryText}
                onChange={(e) => setInjuryText(e.target.value)}
                placeholder="Injury (e.g. Knee sprain)"
                className="w-full rounded border border-border-color bg-bg-color px-3 py-1.5 text-sm text-text-color focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                value={returnText}
                onChange={(e) => setReturnText(e.target.value)}
                placeholder="Expected return (e.g. Week 4) — optional"
                className="w-full rounded border border-border-color bg-bg-color px-3 py-1.5 text-sm text-text-color focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <label className="flex items-center gap-1.5 text-xs text-text-color">
                <input
                  type="checkbox"
                  checked={onIR}
                  onChange={(e) => setOnIR(e.target.checked)}
                  className="accent-error-color"
                />
                On IR
              </label>
              <div className="flex gap-2">
                <button
                  onClick={submitInjury}
                  disabled={savingInjury || !injuryText.trim()}
                  className="rounded bg-primary px-3 py-1 text-xs font-semibold text-(--text-on-primary-color) transition hover:bg-hover-color disabled:opacity-40"
                >
                  {savingInjury ? 'Saving…' : 'Save'}
                </button>
                {player.injury && (
                  <button
                    onClick={removeInjury}
                    disabled={savingInjury}
                    className="rounded border border-border-color px-3 py-1 text-xs text-text-color opacity-70 transition hover:bg-hover-color hover:opacity-100"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          ) : player.injury ? (
            <p className="text-sm text-text-color">
              {player.injury.onIR && (
                <span className="mr-1.5 font-semibold text-error-color">IR</span>
              )}
              {player.injury.injury}
              {player.injury.expectedReturn && ` — ${player.injury.expectedReturn}`}
            </p>
          ) : (
            <p className="text-xs text-text-color opacity-60">None reported.</p>
          )}
        </div>

        {canEdit && (
          <div className="space-y-2">
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              rows={3}
              placeholder="Add a note (e.g. camp report 6/30)"
              className="w-full resize-none rounded border border-border-color bg-bg-color px-3 py-2 text-sm text-text-color focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={submit}
              disabled={saving || !noteText.trim()}
              className="rounded bg-primary px-4 py-1.5 text-sm text-(--text-on-primary-color) transition hover:bg-hover-color disabled:opacity-40"
            >
              {saving ? 'Saving…' : 'Add note'}
            </button>
          </div>
        )}

        {history.length > 0 ? (
          <div className="space-y-2 border-t border-border-color pt-3">
            <p className="text-xs font-medium uppercase text-text-color opacity-70">
              History
            </p>
            {history.map((n) => (
              <div
                key={n.id}
                className="flex items-start justify-between gap-2 border-l-2 border-border-color pl-3 text-sm text-text-color"
              >
                <div>
                  <p>{n.note}</p>
                  <p className="mt-0.5 text-[10px] opacity-60">
                    {fmtDate(n.created_at)}
                  </p>
                </div>
                {canEdit && (
                  <button
                    onClick={() => removeNote(n.id)}
                    disabled={deletingId === n.id}
                    title="Delete note"
                    className="shrink-0 text-xs text-text-color opacity-50 transition hover:text-error-color hover:opacity-100 disabled:opacity-30"
                  >
                    {deletingId === n.id ? '…' : '×'}
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-text-color opacity-60">No notes yet.</p>
        )}
      </div>
    </div>
  );
};
