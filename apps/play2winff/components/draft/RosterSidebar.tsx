import type { DraftPlayer } from '../../lib/server/draft';
import { RosterEntry } from '../../hooks/useDraftSession';
import { posBadgeClass } from './posClass';

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
    <aside className="flex w-56 shrink-0 flex-col overflow-y-auto bg-secondary text-(--text-on-secondary-color)">
      <div className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wide opacity-70">
        My Team
      </div>

      <div className="space-y-1 px-2 pb-2">
        {rosterSlots.map((entry, idx) => (
          <div
            key={entry.slot.id + idx}
            className={`flex items-center justify-between rounded px-2.5 py-2 text-xs ${
              entry.player
                ? `${posBadgeClass(entry.player.position)} text-white`
                : 'bg-black/20 opacity-60'
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
                  className="ml-1 text-[10px] leading-none text-white opacity-70 hover:text-error-color hover:opacity-100"
                >
                  ✕
                </button>
              </>
            ) : (
              <span className="ml-auto">—</span>
            )}
          </div>
        ))}
      </div>

      {benchSpots > 0 && (
        <div>
          <div className="border-t border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide opacity-70">
            Bench
          </div>
          <div className="space-y-1 px-2 pb-3">
            {bench.map((p, idx) => (
              <div
                key={p.name_canon}
                className={`flex items-center justify-between rounded px-2.5 py-2 text-xs text-white ${posBadgeClass(
                  p.position
                )}`}
              >
                <span className="flex-1 truncate">{p.name}</span>
                <button
                  onClick={() => onReleaseFromBench(idx)}
                  className="ml-1 text-[10px] opacity-70 hover:text-error-color hover:opacity-100"
                >
                  ✕
                </button>
              </div>
            ))}
            {Array.from({ length: Math.max(0, benchSpots - bench.length) }).map(
              (_, n) => (
                <div
                  key={`empty-bench-${n}`}
                  className="rounded bg-black/20 px-2.5 py-2 text-[10px] opacity-60"
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
