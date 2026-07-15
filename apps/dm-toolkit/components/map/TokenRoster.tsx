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

const NEXT_SIDE: Record<MapToken['side'], MapToken['side']> = {
  ally: 'neutral',
  neutral: 'enemy',
  enemy: 'ally',
};

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
// new is exposed by listing it here too). The side dot doubles as a
// DM-only control: click to cycle ally -> neutral -> enemy, so an
// already-placed token can turn hostile (a backstab) or just get
// re-flagged during setup without deleting and re-adding it.
export default function TokenRoster({ canEdit }: TokenRosterProps) {
  const { tokens, setTokenSide } = useStore();

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Roster</h3>
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
                  <button
                    type="button"
                    onClick={() => setTokenSide(t.map_id, t.id, NEXT_SIDE[t.side])}
                    title={`${SIDE_LABEL[t.side]} — click to change side`}
                    className={`${SIDE_COLOR[t.side]} hover:opacity-70 transition-opacity`}
                  >
                    ●
                  </button>
                ) : (
                  <span className={SIDE_COLOR[t.side]}>●</span>
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
