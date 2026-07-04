// Ported from apps/conquest/src/app/constants/experienceConstants.tsx
// (xpTotalToLevelTable + getLevelDetailsFromExperience). Conquest itself is
// untouched — this is a standalone copy of just the XP/leveling math, the
// first implementation of dm-toolkit's pluggable progression-system concept.
import type { LevelDetails } from '../../types';

const XP_TOTAL_TO_LEVEL_TABLE: LevelDetails[] = [
  { level: 1, xpStart: 0, xpEnd: 299, xpNeeded: 300 },
  { level: 2, xpStart: 300, xpEnd: 899, xpNeeded: 600 },
  { level: 3, xpStart: 900, xpEnd: 2699, xpNeeded: 1800 },
  { level: 4, xpStart: 2700, xpEnd: 6499, xpNeeded: 3800 },
  { level: 5, xpStart: 6500, xpEnd: 13999, xpNeeded: 7500 },
  { level: 6, xpStart: 14000, xpEnd: 22999, xpNeeded: 9000 },
  { level: 7, xpStart: 23000, xpEnd: 33999, xpNeeded: 11000 },
  { level: 8, xpStart: 34000, xpEnd: 47999, xpNeeded: 14000 },
  { level: 9, xpStart: 48000, xpEnd: 63999, xpNeeded: 16000 },
  { level: 10, xpStart: 64000, xpEnd: 84999, xpNeeded: 21000 },
  { level: 11, xpStart: 85000, xpEnd: 99999, xpNeeded: 15000 },
  { level: 12, xpStart: 100000, xpEnd: 119999, xpNeeded: 20000 },
  { level: 13, xpStart: 120000, xpEnd: 139999, xpNeeded: 20000 },
  { level: 14, xpStart: 140000, xpEnd: 164999, xpNeeded: 25000 },
  { level: 15, xpStart: 165000, xpEnd: 194999, xpNeeded: 30000 },
  { level: 16, xpStart: 195000, xpEnd: 224999, xpNeeded: 30000 },
  { level: 17, xpStart: 225000, xpEnd: 264999, xpNeeded: 40000 },
  { level: 18, xpStart: 265000, xpEnd: 304999, xpNeeded: 40000 },
  { level: 19, xpStart: 305000, xpEnd: 354999, xpNeeded: 50000 },
  { level: 20, xpStart: 355000, xpEnd: 355000, xpNeeded: 0 },
];

export function getLevelDetails(totalXp: number): LevelDetails {
  const match = XP_TOTAL_TO_LEVEL_TABLE.find(
    (entry) => totalXp >= entry.xpStart && totalXp <= entry.xpEnd
  );
  return match ?? XP_TOTAL_TO_LEVEL_TABLE[XP_TOTAL_TO_LEVEL_TABLE.length - 1];
}
