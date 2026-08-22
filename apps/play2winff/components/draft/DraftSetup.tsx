import Link from 'next/link';

import { LeagueProfile } from '../../lib/leagues';
import { RankingSnapshot } from '../../lib/rankings';

export interface DraftSetupProps {
  leagues: LeagueProfile[];
  selectedLeagueId: number | null;
  original: RankingSnapshot | null;
  latest: RankingSnapshot | null;
  rankingsLoading: boolean;
  draftSlot: number;
  loadingPlayers: boolean;
  onSelectLeague: (id: number) => void;
  onChangeDraftSlot: (slot: number) => void;
  onLaunch: () => void;
}

export const DraftSetup = ({
  leagues,
  selectedLeagueId,
  original,
  latest,
  rankingsLoading,
  draftSlot,
  loadingPlayers,
  onSelectLeague,
  onChangeDraftSlot,
  onLaunch,
}: DraftSetupProps) => {
  const selectedLeague = leagues.find((l) => l.id === selectedLeagueId) ?? null;
  const listType = selectedLeague?.default_list_type ?? 'ppr';

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
          Rankings ({listType.toUpperCase()})
        </label>
        {rankingsLoading ? (
          <p className="text-xs text-slate-400">Loading…</p>
        ) : !latest ? (
          <p className="text-xs text-slate-400">
            No Latest {listType.toUpperCase()} rankings imported yet —{' '}
            <Link href="/import" className="underline">
              import rankings first
            </Link>
          </p>
        ) : (
          <div className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <p>
              Latest: {latest.count} players, updated{' '}
              {new Date(latest.created_at).toLocaleDateString()}
            </p>
            {original ? (
              <p>
                Comparing against Original from{' '}
                {new Date(original.created_at).toLocaleDateString()}
              </p>
            ) : (
              <p className="text-amber-600">
                No Original set yet — rank changes will not be shown.
              </p>
            )}
          </div>
        )}
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
        disabled={!latest || !selectedLeagueId || loadingPlayers}
        className="w-full rounded-md bg-slate-900 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-40"
      >
        {loadingPlayers ? 'Loading…' : 'Launch Draft Board'}
      </button>
    </div>
  );
};
