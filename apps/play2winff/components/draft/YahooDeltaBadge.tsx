import type { DraftPlayer } from '../../lib/server/draft';
import {
  DELTA_TIER_CLASSES,
  deltaLabel,
  formatPick,
  yahooDelta,
} from '../../lib/yahooDelta';

export interface YahooDeltaBadgeProps {
  player: DraftPlayer;
  teams: number;
  currentPick: number;
}

export const YahooDeltaBadge = ({
  player,
  teams,
  currentPick,
}: YahooDeltaBadgeProps) => {
  if (player.yahooRank == null) return null;

  const { delta, roundsToWait, tier, pastAdp } = yahooDelta(
    player.rank,
    player.yahooRank,
    teams,
    currentPick
  );
  const label = deltaLabel(tier, Math.abs(roundsToWait), pastAdp);
  const sign = delta > 0 ? '+' : '';
  const title = `Your Board: ${formatPick(
    player.rank,
    teams
  )} | Yahoo Queue: ${formatPick(
    player.yahooRank,
    teams
  )} | On the clock: ${formatPick(currentPick, teams)}${
    pastAdp ? ' | past Yahoo ADP' : ''
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
