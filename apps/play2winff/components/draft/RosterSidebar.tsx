import type { DraftPlayer } from '../../lib/server/draft';
import { RosterEntry } from '../../hooks/useDraftSession';
import { posClass } from './posClass';

export interface RosterSidebarProps {
  rosterSlots: RosterEntry[];
  bench: DraftPlayer[];
  benchSpots: number;
  onReleaseFromRoster: (idx: number) => void;
  onReleaseFromBench: (idx: number) => void;
}

export const RosterSidebar = ({
  rosterSlots,
  bench,
  benchSpots,
  onReleaseFromRoster,
  onReleaseFromBench,
}: RosterSidebarProps) => {
  return (
    <aside className="flex w-56 shrink-0 flex-col overflow-y-auto bg-slate-900 text-white">
      <div className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        My Team
      </div>

      <div className="space-y-1 px-2 pb-2">
        {rosterSlots.map((entry, idx) => (
          <div
            key={entry.slot.id + idx}
            className={`flex items-center justify-between rounded px-2.5 py-2 text-xs ${
              entry.player
                ? `${posClass(entry.player.position)} text-slate-900`
                : 'bg-slate-700 text-slate-400'
            }`}
          >
            <span className="text-[10px] font-semibold uppercase">
              {entry.slot.label}
            </span>
            {entry.player ? (
              <>
                <span className="mx-1 max-w-[7rem] truncate">
                  {entry.player.name}
                </span>
                <button
                  onClick={() => onReleaseFromRoster(idx)}
                  className="ml-1 text-[10px] leading-none text-slate-500 hover:text-red-500"
                >
                  ✕
                </button>
              </>
            ) : (
              <span className="ml-auto text-slate-500">—</span>
            )}
          </div>
        ))}
      </div>

      {benchSpots > 0 && (
        <div>
          <div className="border-t border-slate-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Bench
          </div>
          <div className="space-y-1 px-2 pb-3">
            {bench.map((p, idx) => (
              <div
                key={p.name_canon}
                className={`flex items-center justify-between rounded px-2.5 py-2 text-xs ${posClass(
                  p.position
                )} text-slate-900`}
              >
                <span className="flex-1 truncate">{p.name}</span>
                <button
                  onClick={() => onReleaseFromBench(idx)}
                  className="ml-1 text-[10px] text-slate-500 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
            {Array.from({ length: Math.max(0, benchSpots - bench.length) }).map(
              (_, n) => (
                <div
                  key={`empty-bench-${n}`}
                  className="rounded bg-slate-700 px-2.5 py-2 text-[10px] text-slate-500"
                >
                  BN —
                </div>
              )
            )}
          </div>
        </div>
      )}
    </aside>
  );
};
