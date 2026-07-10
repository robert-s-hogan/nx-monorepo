import { LeagueProfile } from '../../lib/leagues';

export interface LeagueListProps {
  leagues: LeagueProfile[];
  isLoading: boolean;
  onEdit: (league: LeagueProfile) => void;
  onDelete: (league: LeagueProfile) => void;
  canEdit: boolean;
}

export const LeagueList = ({
  leagues,
  isLoading,
  onEdit,
  onDelete,
  canEdit,
}: LeagueListProps) => {
  if (isLoading) {
    return <p className="text-sm text-slate-500">Loading…</p>;
  }

  return (
    <div className="space-y-3">
      {leagues.map((league) => (
        <div
          key={league.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-800">{league.name}</span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs uppercase text-slate-600">
                  {league.default_list_type}
                </span>
                <span className="text-xs text-slate-500">
                  {league.teams} teams · {league.bench_spots} bench
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {league.roster_config.map((slot) => (
                  <span
                    key={slot.id}
                    className="rounded border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                  >
                    {slot.label}
                    {slot.positions.length > 1 && (
                      <span className="ml-0.5 text-slate-400">
                        ({slot.positions.join('/')})
                      </span>
                    )}
                  </span>
                ))}
                {league.bench_spots > 0 && (
                  <span className="rounded border border-dashed border-slate-300 px-2 py-0.5 text-[11px] font-medium text-slate-400">
                    BN ×{league.bench_spots}
                  </span>
                )}
              </div>
            </div>
            {canEdit && (
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => onEdit(league)}
                  className="rounded border border-slate-300 px-2.5 py-1 text-xs transition hover:bg-slate-50"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(league)}
                  className="rounded border border-red-200 px-2.5 py-1 text-xs text-red-600 transition hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {leagues.length === 0 && (
        <p className="text-sm text-slate-500">
          No leagues yet — click &quot;New League&quot; to create one.
        </p>
      )}
    </div>
  );
};
