import type { DraftPlayer } from '../../lib/server/draft';
import {
  BOOLEAN_FLAGS,
  BOOLEAN_FLAG_META,
  RISK_ICON,
  riskTierColor,
  riskTierLabel,
} from '../../lib/flags';

export interface PlayerFlagIconsProps {
  player: DraftPlayer;
  canEdit: boolean;
  onToggleFlag: (
    player: DraftPlayer,
    flag: (typeof BOOLEAN_FLAGS)[number]
  ) => void;
  onSetRiskFactor: (player: DraftPlayer, value: number | null) => void;
}

const RISK_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

export const PlayerFlagIcons = ({
  player,
  canEdit,
  onToggleFlag,
  onSetRiskFactor,
}: PlayerFlagIconsProps) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div
        className="flex items-center gap-0.5"
        title={riskTierLabel(player.flags.risk_factor)}
      >
        <RISK_ICON
          size={13}
          className={riskTierColor(player.flags.risk_factor)}
        />
        <select
          value={player.flags.risk_factor ?? ''}
          disabled={!canEdit}
          onChange={(e) =>
            onSetRiskFactor(player, e.target.value ? Number(e.target.value) : null)
          }
          className={`w-8 rounded border-none bg-transparent text-[10px] ${riskTierColor(
            player.flags.risk_factor
          )} ${canEdit ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <option value="">–</option>
          {RISK_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {BOOLEAN_FLAGS.map((flag) => {
        const meta = BOOLEAN_FLAG_META[flag];
        const Icon = meta.icon;
        const active = player.flags[flag];
        return (
          <button
            key={flag}
            type="button"
            disabled={!canEdit}
            onClick={() => onToggleFlag(player, flag)}
            title={meta.label}
            className={`rounded p-0.5 transition ${
              active ? meta.activeColor : 'text-slate-300'
            } ${canEdit ? 'hover:bg-slate-100' : 'cursor-default'}`}
          >
            <Icon size={13} />
          </button>
        );
      })}
    </div>
  );
};
