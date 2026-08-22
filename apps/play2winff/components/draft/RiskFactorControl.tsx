import { useEffect, useRef, useState } from 'react';

import type { DraftPlayer } from '../../lib/server/draft';
import { riskColor } from '../../lib/riskColors';

const RISK_OPTIONS = Array.from({ length: 11 }, (_, i) => i); // 0-10

export interface RiskFactorControlProps {
  player: DraftPlayer;
  canEdit: boolean;
  onSetRisk: (player: DraftPlayer, value: number | null) => void;
}

export const RiskFactorControl = ({
  player,
  canEdit,
  onSetRisk,
}: RiskFactorControlProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const color = riskColor(player.riskFactor);

  useEffect(() => {
    if (!menuOpen) return;
    function onClickAway(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickAway);
    return () => document.removeEventListener('mousedown', onClickAway);
  }, [menuOpen]);

  const label =
    player.riskFactor != null
      ? `Risk factor ${player.riskFactor}/10`
      : 'No risk rating';

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        disabled={!canEdit}
        onClick={() => setMenuOpen((o) => !o)}
        title={label}
        className={`flex items-center gap-0.5 ${canEdit ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <span className={`text-[10px] font-semibold ${color}`}>
          Risk LVL {player.riskFactor ?? '–'}
        </span>
      </button>

      {menuOpen && (
        <div className="absolute left-1/2 top-full z-20 mt-1 flex w-40 -translate-x-1/2 flex-wrap gap-1 rounded-lg border border-border-color bg-surface-color p-2 shadow-lg">
          {RISK_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                onSetRisk(player, n);
                setMenuOpen(false);
              }}
              className={`flex h-6 w-6 items-center justify-center rounded text-xs font-semibold transition hover:bg-hover-color ${riskColor(
                n
              )} ${player.riskFactor === n ? 'ring-1 ring-primary' : ''}`}
            >
              {n}
            </button>
          ))}
          {player.riskFactor != null && (
            <button
              type="button"
              onClick={() => {
                onSetRisk(player, null);
                setMenuOpen(false);
              }}
              className="w-full rounded px-1.5 py-1 text-left text-[10px] text-text-color opacity-70 transition hover:bg-hover-color hover:opacity-100"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
};
