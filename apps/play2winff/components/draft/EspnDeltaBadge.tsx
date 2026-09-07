import type { DraftPlayer } from '../../lib/server/draft';
import {
  DELTA_TIER_CLASSES,
  deltaLabel,
  espnDelta,
  formatPick,
} from '../../lib/espnDelta';

export interface EspnDeltaBadgeProps {
  player: DraftPlayer;
  teams: number;
  currentPick: number;
}

export const EspnDeltaBadge = ({
  player,
  teams,
  currentPick,
}: EspnDeltaBadgeProps) => {
  if (player.espnRank == null) return null;

  const { delta, roundsToWait, tier, pastAdp } = espnDelta(
    player.rank,
    player.espnRank,
    teams,
    currentPick
  );
  const label = deltaLabel(tier, Math.abs(roundsToWait), pastAdp);
  const sign = delta > 0 ? '+' : '';
  const title = `Your Board: ${formatPick(
    player.rank,
    teams
  )} | ESPN Queue: ${formatPick(
    player.espnRank,
    teams
  )} | On the clock: ${formatPick(currentPick, teams)}${
    pastAdp ? ' | past ESPN ADP' : ''
  }`;

  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] tracking-wide whitespace-nowrap uppercase ${DELTA_TIER_CLASSES[tier]}`}
    >
      {sign}
      {delta} · {label}
    </span>
  );
};
