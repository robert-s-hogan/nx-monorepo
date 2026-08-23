import type { DraftPlayer } from '../../lib/server/draft';
import {
  DELTA_TIER_CLASSES,
  deltaLabel,
  formatPick,
  sleeperDelta,
} from '../../lib/sleeperDelta';

export interface SleeperDeltaBadgeProps {
  player: DraftPlayer;
  teams: number;
  currentPick: number;
}

export const SleeperDeltaBadge = ({
  player,
  teams,
  currentPick,
}: SleeperDeltaBadgeProps) => {
  if (player.sleeperRank == null) return null;

  const { delta, roundsToWait, tier, pastAdp } = sleeperDelta(
    player.rank,
    player.sleeperRank,
    teams,
    currentPick
  );
  const label = deltaLabel(tier, Math.abs(roundsToWait), pastAdp);
  const sign = delta > 0 ? '+' : '';
  const title = `Your Board: ${formatPick(
    player.rank,
    teams
  )} | Sleeper Queue: ${formatPick(
    player.sleeperRank,
    teams
  )} | On the clock: ${formatPick(currentPick, teams)}${
    pastAdp ? ' | past Sleeper ADP' : ''
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
