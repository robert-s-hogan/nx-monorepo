import { useState } from 'react';
import { useStore } from '../../store/useStore';
import DiePicker from './DiePicker';
import { modifier, formatModifier } from '../../lib/dice';

const SIDE_COLOR: Record<'ally' | 'neutral' | 'enemy', string> = {
  ally: 'text-green-400',
  neutral: 'text-violet-400',
  enemy: 'text-red-400',
};

// Same threshold TokenLayer.tsx's HP bar already uses for its red state.
const CRITICAL_HP_PCT = 0.2;

interface MapStatusBarProps {
  mapId: string;
  canEdit: boolean;
}

// Always-visible strip — round/turn state and anything worth a glance
// without opening the act drawer below. Public (not canEdit-gated), same
// as the turn banner already was before this was its own component; only
// the "roll initiative"/"Next Turn"/"End Combat" controls are DM-only.
export default function MapStatusBar({ mapId, canEdit }: MapStatusBarProps) {
  const { maps, tokens, characters, startCombat, advanceTurn, endCombat } = useStore();

  const [initiativeRolls, setInitiativeRolls] = useState<Record<string, number>>({});
  const [startingCombat, setStartingCombat] = useState(false);
  const [advancing, setAdvancing] = useState(false);

  const map = maps.find((m) => m.id === mapId) ?? null;

  // Tokens with no linked character roll flat (mod 0) — same convention as
  // attack rolls and structure checks elsewhere in the app.
  const initiativeModFor = (tokenId: string): number => {
    const token = tokens.find((t) => t.id === tokenId);
    const character = token?.character_id ? characters.find((c) => c.id === token.character_id) : null;
    return character ? modifier(character.stats.dex) : 0;
  };

  const handleStartCombat = async () => {
    const entries = Object.entries(initiativeRolls);
    if (entries.length === 0) return;
    setStartingCombat(true);
    try {
      const totals = Object.fromEntries(
        entries.map(([tokenId, roll]) => [tokenId, roll + initiativeModFor(tokenId)])
      );
      await startCombat(mapId, totals);
      setInitiativeRolls({});
    } finally {
      setStartingCombat(false);
    }
  };

  const handleAdvance = async () => {
    setAdvancing(true);
    try {
      await advanceTurn(mapId);
    } finally {
      setAdvancing(false);
    }
  };

  const criticalTokens = tokens.filter(
    (t) => t.hp_max > 0 && t.hp_current > 0 && t.hp_current / t.hp_max <= CRITICAL_HP_PCT
  );

  if (!map?.combat_active) {
    return (
      <div className="bg-stone-800 border border-stone-700 rounded-xl px-4 py-3">
        {canEdit && tokens.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs text-stone-600">Roll initiative for each combatant, then start combat.</p>
            <div className="space-y-1.5">
              {tokens.map((t) => (
                <div key={t.id} className="flex items-center gap-2">
                  <span className={SIDE_COLOR[t.side]}>●</span>
                  <span className="flex-1 text-sm text-stone-300">{t.label}</span>
                  <DiePicker
                    sides={20}
                    value={initiativeRolls[t.id] ?? null}
                    onSelect={(v) => setInitiativeRolls((prev) => ({ ...prev, [t.id]: v }))}
                  />
                  <span className="w-14 text-xs text-stone-500">
                    {initiativeRolls[t.id] != null
                      ? `= ${initiativeRolls[t.id] + initiativeModFor(t.id)}`
                      : formatModifier(initiativeModFor(t.id))}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={handleStartCombat}
              disabled={Object.keys(initiativeRolls).length === 0 || startingCombat}
              className="w-full px-3 py-1.5 bg-amber-800 hover:bg-amber-700 disabled:opacity-40 text-amber-100 text-xs rounded-lg transition-colors"
            >
              {startingCombat ? 'Starting…' : 'Start Combat'}
            </button>
          </div>
        ) : (
          <p className="text-xs text-stone-600">No combat active.</p>
        )}
      </div>
    );
  }

  const currentTurnTokenId = map.turn_order[map.current_turn_index];
  const currentTurnToken = tokens.find((t) => t.id === currentTurnTokenId) ?? null;

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 flex items-center gap-4">
      <span className="text-xs text-stone-500 shrink-0">
        Round <b className="text-stone-200 font-bold">{map.round_number}</b>
      </span>

      <div className="flex-1 flex items-center gap-1.5 overflow-x-auto">
        {map.turn_order.map((tokenId) => {
          const t = tokens.find((tok) => tok.id === tokenId);
          if (!t) return null;
          const isCurrent = tokenId === currentTurnTokenId;
          return (
            <span
              key={tokenId}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] whitespace-nowrap border ${
                isCurrent
                  ? 'bg-sky-950 border-sky-500 text-stone-100 font-semibold'
                  : 'bg-stone-900 border-stone-700 text-stone-500'
              }`}
            >
              <span className={SIDE_COLOR[t.side]}>●</span>
              {t.label}
              {t.initiative != null && <span className="text-stone-600">{t.initiative}</span>}
            </span>
          );
        })}
      </div>

      {criticalTokens.length > 0 && (
        <span className="text-[11px] text-red-400 shrink-0">
          ⚠ {criticalTokens.map((t) => `${t.label} ${t.hp_current}/${t.hp_max}`).join(', ')}
        </span>
      )}

      {canEdit && (
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleAdvance}
            disabled={advancing}
            className="px-3 py-1.5 bg-amber-800 hover:bg-amber-700 disabled:opacity-40 text-amber-100 text-xs rounded-lg transition-colors"
          >
            Next Turn
          </button>
          <button
            onClick={() => endCombat(mapId)}
            className="px-2 py-1.5 bg-stone-900 border border-stone-700 text-stone-400 text-xs rounded-lg transition-colors hover:border-stone-600"
          >
            End Combat
          </button>
        </div>
      )}

      {!currentTurnToken && (
        <span className="text-xs text-stone-600 shrink-0">Unknown token&apos;s turn</span>
      )}
    </div>
  );
}
