// Adapted from apps/conquest's ConquestRestCalculationDisplay +
// useRestOperations — rebuilt against dm-toolkit's own component style
// (plain state, no formik/Firestore) rather than ported verbatim, since the
// original's props/data shape doesn't match this app's simpler schema.
import { useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { getLevelDetailsFor } from '../../lib/progression';
import {
  calculateRestsNeeded,
  XP_THRESHOLDS_BY_LEVEL,
  getAdventuringDayXpLimit,
} from '../../lib/rulesets/conquest/constants';
import type { Campaign } from '../../types';

export default function RestPanel({ campaign }: { campaign: Campaign }) {
  const { restState, loadConquestData, takeShortRest, takeLongRest } = useStore();

  useEffect(() => {
    loadConquestData(campaign.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaign.id]);

  if (!restState) return null;

  const levelDetails = getLevelDetailsFor(campaign.progression_system, campaign.current_xp);
  const adventuringDayXpLimit = getAdventuringDayXpLimit(
    levelDetails.level,
    campaign.number_of_players
  );
  const xpEarnedTowardLevel = campaign.current_xp - levelDetails.xpStart;
  const xpPercentage = Math.min(
    100,
    Math.max(0, (xpEarnedTowardLevel / adventuringDayXpLimit) * 100)
  );
  const longRestThresholdPct =
    (XP_THRESHOLDS_BY_LEVEL[levelDetails.level].Easy / adventuringDayXpLimit) * 100;

  const rests = calculateRestsNeeded(
    levelDetails.xpStart,
    campaign.current_xp,
    campaign.number_of_players,
    levelDetails.level,
    restState.short_rests_taken
  );

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-3">
      <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider">
        Adventuring Day
      </h3>
      <div className="relative h-5 w-full bg-stone-900 rounded-full overflow-hidden border border-stone-700">
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${xpPercentage}%` }}
        />
        <div
          className="absolute top-0 h-full w-0.5 bg-red-500"
          style={{ left: '35%' }}
          title="Short rest 1 threshold"
        />
        <div
          className="absolute top-0 h-full w-0.5 bg-red-500"
          style={{ left: '68%' }}
          title="Short rest 2 threshold"
        />
        <div
          className="absolute top-0 h-full w-0.5 bg-green-500"
          style={{ right: `${longRestThresholdPct}%` }}
          title="Long rest threshold"
        />
      </div>
      <p className="text-xs text-stone-500">
        {xpEarnedTowardLevel.toLocaleString()} / {adventuringDayXpLimit.toLocaleString()} XP
        toward today&rsquo;s limit
      </p>

      <div className="flex gap-2 pt-1">
        <button
          disabled={restState.short_rests_taken[0]}
          onClick={() => takeShortRest(campaign.id, 1)}
          className={`flex-1 px-2 py-1.5 text-xs rounded-lg border transition-colors ${
            restState.short_rests_taken[0]
              ? 'bg-stone-900 border-stone-700 text-stone-600'
              : rests.shortRestNeededFirst
              ? 'bg-amber-900 border-amber-700 text-amber-200'
              : 'bg-stone-900 border-stone-700 text-stone-400 hover:border-stone-600'
          }`}
        >
          Short Rest 1{rests.shortRestNeededFirst && !restState.short_rests_taken[0] ? ' •' : ''}
        </button>
        <button
          disabled={restState.short_rests_taken[1]}
          onClick={() => takeShortRest(campaign.id, 2)}
          className={`flex-1 px-2 py-1.5 text-xs rounded-lg border transition-colors ${
            restState.short_rests_taken[1]
              ? 'bg-stone-900 border-stone-700 text-stone-600'
              : rests.shortRestNeededSecond
              ? 'bg-amber-900 border-amber-700 text-amber-200'
              : 'bg-stone-900 border-stone-700 text-stone-400 hover:border-stone-600'
          }`}
        >
          Short Rest 2{rests.shortRestNeededSecond && !restState.short_rests_taken[1] ? ' •' : ''}
        </button>
        <button
          onClick={() => takeLongRest(campaign.id)}
          className={`flex-1 px-2 py-1.5 text-xs rounded-lg border transition-colors ${
            rests.longRestNeeded
              ? 'bg-red-900 border-red-700 text-red-200'
              : 'bg-stone-900 border-stone-700 text-stone-400 hover:border-stone-600'
          }`}
        >
          Long Rest{rests.longRestNeeded ? ' •' : ''}
        </button>
      </div>
    </div>
  );
}
