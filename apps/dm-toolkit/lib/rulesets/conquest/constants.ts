// Ported from apps/conquest/src/app/constants/experienceConstants.tsx.
// The xp-to-level table itself is NOT re-ported here — dm-toolkit already has
// it in lib/progression/dnd5e.ts (getLevelDetails), ported for the same
// reason during that earlier phase. This module only carries the
// adventuring-day/rest/encounter-difficulty math that's specific to
// conquest mode.
import type { EncounterDifficulty } from '../../../types';

// Average XP a single character earns per adventuring day, by level.
const XP_LOOKUP_TABLE: Record<number, number> = {
  1: 300, 2: 600, 3: 1200, 4: 1700, 5: 3500, 6: 4000, 7: 5000, 8: 6000,
  9: 7500, 10: 9000, 11: 10500, 12: 11500, 13: 13500, 14: 15000, 15: 18000,
  16: 20000, 17: 25000, 18: 27000, 19: 27000, 20: 40000,
};

export const XP_THRESHOLDS_BY_LEVEL: Record<
  number,
  Record<EncounterDifficulty, number>
> = {
  1: { Easy: 25, Medium: 50, Hard: 75, Deadly: 100 },
  2: { Easy: 50, Medium: 100, Hard: 150, Deadly: 200 },
  3: { Easy: 75, Medium: 150, Hard: 225, Deadly: 400 },
  4: { Easy: 125, Medium: 250, Hard: 375, Deadly: 500 },
  5: { Easy: 250, Medium: 500, Hard: 750, Deadly: 1100 },
  6: { Easy: 300, Medium: 600, Hard: 900, Deadly: 1400 },
  7: { Easy: 350, Medium: 750, Hard: 1100, Deadly: 1700 },
  8: { Easy: 450, Medium: 900, Hard: 1400, Deadly: 2100 },
  9: { Easy: 550, Medium: 1100, Hard: 1600, Deadly: 2400 },
  10: { Easy: 600, Medium: 1200, Hard: 1900, Deadly: 2800 },
  11: { Easy: 800, Medium: 1600, Hard: 2400, Deadly: 3600 },
  12: { Easy: 1000, Medium: 2000, Hard: 3000, Deadly: 4500 },
  13: { Easy: 1100, Medium: 2200, Hard: 3400, Deadly: 5100 },
  14: { Easy: 1250, Medium: 2500, Hard: 3800, Deadly: 5700 },
  15: { Easy: 1400, Medium: 2800, Hard: 4300, Deadly: 6400 },
  16: { Easy: 1600, Medium: 3200, Hard: 4800, Deadly: 7200 },
  17: { Easy: 2000, Medium: 3900, Hard: 5900, Deadly: 8800 },
  18: { Easy: 2100, Medium: 4200, Hard: 6300, Deadly: 9500 },
  19: { Easy: 2400, Medium: 4900, Hard: 7300, Deadly: 10900 },
  20: { Easy: 2800, Medium: 5700, Hard: 8500, Deadly: 12700 },
};

export function getAdventuringDayXpLimit(
  level: number,
  numberOfPlayers: number
): number {
  return XP_LOOKUP_TABLE[level] * numberOfPlayers;
}

export function getXpThreshold(
  level: number,
  numberOfPlayers: number,
  difficulty: EncounterDifficulty
): number {
  return XP_THRESHOLDS_BY_LEVEL[level][difficulty] * numberOfPlayers;
}

export function getRandomEncounterDifficulty(): EncounterDifficulty {
  const roll = Math.floor(Math.random() * 100) + 1;
  if (roll <= 15) return 'Deadly';
  if (roll <= 50) return 'Hard';
  if (roll <= 90) return 'Medium';
  return 'Easy';
}

export interface RestsNeeded {
  shortRestNeededFirst: boolean;
  shortRestNeededSecond: boolean;
  longRestNeeded: boolean;
}

// xpStart/xpEnd come from the level's range (lib/progression's
// getLevelDetailsFor); currentXp is the campaign's running total XP.
export function calculateRestsNeeded(
  xpStart: number,
  currentXp: number,
  numberOfPlayers: number,
  level: number,
  shortRestsTaken: boolean[]
): RestsNeeded {
  const adventuringDayXpLimit = getAdventuringDayXpLimit(level, numberOfPlayers);
  const xpEarnedTowardLevel = currentXp - xpStart;
  const remainingXp = adventuringDayXpLimit - xpEarnedTowardLevel;
  const percentRemaining = (remainingXp / adventuringDayXpLimit) * 100;

  const shortRestNeededFirst = !shortRestsTaken[0] && percentRemaining < 68;
  const shortRestNeededSecond =
    !shortRestsTaken[1] && shortRestsTaken[0] && percentRemaining < 35;
  const longRestNeeded = remainingXp < XP_THRESHOLDS_BY_LEVEL[level].Easy;

  return { shortRestNeededFirst, shortRestNeededSecond, longRestNeeded };
}
