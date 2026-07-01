import Link from 'next/link';

import { LeagueProfile } from '../../lib/leagues';
import { RankingSnapshot } from '../../lib/rankings';

export interface DraftSetupProps {
  leagues: LeagueProfile[];
  snapshots: RankingSnapshot[];
  selectedLeagueId: number | null;
  selectedSnapshotId: number | null;
  prevSnapshotId: number | null;
  draftSlot: number;
  loadingPlayers: boolean;
  onSelectLeague: (id: number) => void;
  onSelectSnapshot: (id: number | null) => void;
  onSelectPrevSnapshot: (id: number | null) => void;
  onChangeDraftSlot: (slot: number) => void;
  onLaunch: () => void;
}

export const DraftSetup = ({
  leagues,
  snapshots,
  selectedLeagueId,
  selectedSnapshotId,
  prevSnapshotId,
  draftSlot,
  loadingPlayers,
  onSelectLeague,
  onSelectSnapshot,
  onSelectPrevSnapshot,
  onChangeDraftSlot,
  onLaunch,
}: DraftSetupProps) => {
  const selectedLeague = leagues.find((l) => l.id === selectedLeagueId) ?? null;
  const filteredSnapshots = selectedLeague
    ? snapshots.filter((s) => s.list_type === selectedLeague.default_list_type)
    : snapshots;

  return (
    <div className="mx-auto max-w-lg space-y-6 p-8">
      <h1 className="text-lg font-semibold text-slate-800">
        Set up draft session
      </h1>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          League
        </label>
        <select
          value={selectedLeagueId ?? ''}
          onChange={(e) => onSelectLeague(Number(e.target.value))}
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          {leagues.map((l) => (
            <option key={l.id} value={l.id}>
              {l.name} ({l.teams} teams)
            </option>
          ))}
        </select>
        {!leagues.length && (
          <p className="mt-1 text-xs text-slate-400">
            No leagues saved —{' '}
            <Link href="/leagues" className="underline">
              create one first
            </Link>
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          Rankings
        </label>
        <select
          value={selectedSnapshotId ?? ''}
          onChange={(e) =>
            onSelectSnapshot(e.target.value ? Number(e.target.value) : null)
          }
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <option value="">— select —</option>
          {filteredSnapshots.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label} ({s.count} players)
            </option>
          ))}
        </select>
        {!filteredSnapshots.length && (
          <p className="mt-1 text-xs text-slate-400">
            No snapshots —{' '}
            <Link href="/import" className="underline">
              import rankings first
            </Link>
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          Compare vs (optional — shows dropped players)
        </label>
        <select
          value={prevSnapshotId ?? ''}
          onChange={(e) =>
            onSelectPrevSnapshot(e.target.value ? Number(e.target.value) : null)
          }
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <option value="">None</option>
          {filteredSnapshots
            .filter((s) => s.id !== selectedSnapshotId)
            .map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          My draft slot
        </label>
        <input
          type="number"
          min={1}
          max={selectedLeague?.teams ?? 16}
          value={draftSlot}
          onChange={(e) => onChangeDraftSlot(Number(e.target.value))}
          className="w-32 rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      <button
        onClick={onLaunch}
        disabled={!selectedSnapshotId || !selectedLeagueId || loadingPlayers}
        className="w-full rounded-md bg-slate-900 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-40"
      >
        {loadingPlayers ? 'Loading…' : 'Launch Draft Board'}
      </button>
    </div>
  );
};
