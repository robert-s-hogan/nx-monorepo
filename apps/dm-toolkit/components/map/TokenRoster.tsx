import { useStore } from '../../store/useStore';
import type { MapToken } from '../../types';

const SIDE_COLOR: Record<MapToken['side'], string> = {
  ally: 'text-green-400',
  neutral: 'text-violet-400',
  enemy: 'text-red-400',
};

const SIDE_LABEL: Record<MapToken['side'], string> = {
  ally: 'Ally',
  neutral: 'Neutral',
  enemy: 'Enemy',
};

const SIDES: MapToken['side'][] = ['ally', 'neutral', 'enemy'];

function hpBarColor(pct: number): string {
  if (pct > 0.5) return 'bg-green-400';
  if (pct > 0.2) return 'bg-amber-400';
  return 'bg-red-400';
}

interface TokenRosterProps {
  canEdit: boolean;
}

// Who's on the map and how are they doing — always visible in the watch
// rail, public (HP is already visible in the activity feed today, nothing
// new is exposed by listing it here too). The side dots double as a
// DM-only 3-way control: click any of Ally/Neutral/Enemy to jump straight
// to it (the current one is highlighted), so an already-placed token can
// turn hostile (a backstab) or just get re-flagged during setup without
// deleting and re-adding it.
export default function TokenRoster({ canEdit }: TokenRosterProps) {
  const { tokens, setTokenSide } = useStore();

  return (
    <div>
      <div className="flex items-center justify-end mb-2">
        <span className="text-xs text-stone-600">{tokens.length} on map</span>
      </div>
      {tokens.length === 0 ? (
        <p className="text-xs text-stone-600">No tokens on the map yet.</p>
      ) : (
        <div className="space-y-1">
          {tokens.map((t) => {
            const pct = t.hp_max > 0 ? Math.max(0, t.hp_current / t.hp_max) : 0;
            return (
              <div
                key={t.id}
                className="flex items-center gap-2 px-2 py-1.5 bg-stone-900 border border-stone-700 rounded-lg text-sm"
              >
                {canEdit ? (
                  <div className="flex items-center gap-px shrink-0">
                    {SIDES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setTokenSide(t.map_id, t.id, s)}
                        title={s === t.side ? `${SIDE_LABEL[s]} (current)` : `Set ${SIDE_LABEL[s]}`}
                        className={`${SIDE_COLOR[s]} p-0 text-sm leading-none transition-opacity ${
                          s === t.side ? 'scale-125 opacity-100' : 'opacity-25 hover:opacity-60'
                        }`}
                      >
                        ●
                      </button>
                    ))}
                  </div>
                ) : (
                  <span className={`${SIDE_COLOR[t.side]} shrink-0`}>●</span>
                )}
                <span className="flex-1 text-stone-300 truncate">{t.label}</span>
                <div className="w-14 h-1.5 rounded-full bg-stone-700 overflow-hidden shrink-0">
                  <span className={`block h-full ${hpBarColor(pct)}`} style={{ width: `${pct * 100}%` }} />
                </div>
                <span className="w-12 text-right text-xs text-stone-500 shrink-0">
                  {t.hp_current}/{t.hp_max}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
