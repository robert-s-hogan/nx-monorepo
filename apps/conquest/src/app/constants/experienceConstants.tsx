import { Difficulty, XPLookupTable, XPThresholdsByCharLvl } from '../types';

export const xpLookupTable: XPLookupTable = {
  1: 300,
  2: 600,
  3: 1200,
  4: 1700,
  5: 3500,
  6: 4000,
  7: 5000,
  8: 6000,
  9: 7500,
  10: 9000,
  11: 10500,
  12: 11500,
  13: 13500,
  14: 15000,
  15: 18000,
  16: 20000,
  17: 25000,
  18: 27000,
  19: 27000,
  20: 40000,
};

export const getAdventuringDayXpLimit = (
  level: number,
  numberOfPlayers: number
) => {
  const numPlayers =
    typeof numberOfPlayers === 'string'
      ? parseInt(numberOfPlayers, 10)
      : numberOfPlayers;
  const xpPerPlayer = xpLookupTable[level];
  return xpPerPlayer * numPlayers;
};

export const calculateRestsNeeded = (
  xpStart: number,
  xpTotal: number,
  playerExperienceStart: number,
  numberOfPlayers: number,
  level: number
) => {
  // Calculate the Adventuring Day XP limit based on the level and number of players
  const adventuringDayXPLimit = getAdventuringDayXpLimit(
    level,
    numberOfPlayers
  );

  // Calculate the remaining XP for the day
  const xpEarnedToday = playerExperienceStart - xpStart; // XP earned today is the difference
  const remainingXP = adventuringDayXPLimit - xpEarnedToday;

  // Calculate the percentage of remaining XP
  const percentRemainingXP = (remainingXP / adventuringDayXPLimit) * 100;

  // Thresholds
  const firstRestThreshold = 68; // 68% for the first short rest
  const secondRestThreshold = 35; // 35% for the second short rest
  const easyXPThreshold = xpThresholdsByCharLvl[level].Easy;

  // Determine if rests are needed based on the remaining XP percentage
  const shortRestNeededFirst = percentRemainingXP < firstRestThreshold;
  const shortRestNeededSecond = percentRemainingXP < secondRestThreshold;

  // Determine if a long rest is needed
  const longRestNeeded = remainingXP < easyXPThreshold;

  return {
    shortRestNeededFirst,
    shortRestNeededSecond,
    longRestNeeded,
  };
};

export const xpTotalToLevelTable = [
  {
    xpStart: 0,
    xpEnd: 299,
    xpNeeded: 300,
    xpTotal: 299,
    level: 1,
  },
  {
    xpStart: 300,
    xpEnd: 899,
    xpNeeded: 600,
    xpTotal: 1199,
    level: 2,
  },
  {
    xpStart: 900,
    xpEnd: 2699,
    xpNeeded: 1800,
    xpTotal: 3599,
    level: 3,
  },
  {
    xpStart: 2700,
    xpEnd: 6499,
    xpNeeded: 3800,
    xpTotal: 9199,
    level: 4,
  },
  {
    xpStart: 6500,
    xpEnd: 13999,
    xpNeeded: 7500,
    xpTotal: 20499,
    level: 5,
  },
  {
    xpStart: 14000,
    xpEnd: 22999,
    xpNeeded: 9000,
    xpTotal: 36999,
    level: 6,
  },
  {
    xpStart: 23000,
    xpEnd: 33999,
    xpNeeded: 11000,
    xpTotal: 56999,
    level: 7,
  },
  {
    xpStart: 34000,
    xpEnd: 47999,
    xpNeeded: 14000,
    xpTotal: 81999,
    level: 8,
  },
  {
    xpStart: 48000,
    xpEnd: 63999,
    xpNeeded: 16000,
    xpTotal: 111999,
    level: 9,
  },
  {
    xpStart: 64000,
    xpEnd: 84999,
    xpNeeded: 21000,
    xpTotal: 148999,
    level: 10,
  },
  {
    xpStart: 85000,
    xpEnd: 99999,
    xpNeeded: 15000,
    xpTotal: 184999,
    level: 11,
  },
  {
    xpStart: 100000,
    xpEnd: 119999,
    xpNeeded: 20000,
    xpTotal: 219999,
    level: 12,
  },
  {
    xpStart: 120000,
    xpEnd: 139999,
    xpNeeded: 20000,
    xpTotal: 259999,
    level: 13,
  },
  {
    xpStart: 140000,
    xpEnd: 164999,
    xpNeeded: 25000,
    xpTotal: 304999,
    level: 14,
  },
  {
    xpStart: 165000,
    xpEnd: 194999,
    xpNeeded: 30000,
    xpTotal: 359999,
    level: 15,
  },
  {
    xpStart: 195000,
    xpEnd: 224999,
    xpNeeded: 30000,
    xpTotal: 419999,
    level: 16,
  },
  {
    xpStart: 225000,
    xpEnd: 264999,
    xpNeeded: 40000,
    xpTotal: 489999,
    level: 17,
  },
  {
    xpStart: 265000,
    xpEnd: 304999,
    xpNeeded: 40000,
    xpTotal: 569999,
    level: 18,
  },
  {
    xpStart: 305000,
    xpEnd: 354999,
    xpNeeded: 50000,
    xpTotal: 659999,
    level: 19,
  },
  {
    xpStart: 355000,
    xpEnd: 355000,
    xpNeeded: 0,
    xpTotal: 355000,
    level: 20,
  },
];

export const getLevelDetailsFromExperience = (experience: number) => {
  const levelDetails = xpTotalToLevelTable.find(
    (entry) => experience >= entry.xpStart && experience <= entry.xpEnd
  );

  return levelDetails || xpTotalToLevelTable[xpTotalToLevelTable.length - 1];
};

export function getRandomEncounterDifficulty(): Difficulty {
  const roll = Math.floor(Math.random() * 100) + 1;

  if (roll <= 15) {
    return 'Deadly';
  } else if (roll <= 50) {
    return 'Hard';
  } else if (roll <= 90) {
    return 'Medium';
  } else {
    return 'Easy';
  }
}

export const xpThresholdsByCharLvl: XPThresholdsByCharLvl = {
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

export const getXpThresholdForRandomDifficulty = (characterLevel: number) => {
  const difficulty = getRandomEncounterDifficulty();
  const thresholds = xpThresholdsByCharLvl[characterLevel];
  if (!thresholds) {
    throw new Error('Invalid character level');
  }
  return thresholds[difficulty];
};

export const getXPThresholds = (
  level: number,
  numberOfPlayers: number,
  encounterDifficultyOptions: Difficulty
) => {
  const thresholds = xpThresholdsByCharLvl[level] || {};
  return thresholds[encounterDifficultyOptions] * numberOfPlayers;
};

export const calculateAdventuringDayXPStart = (
  adventuringDayXPLimit: number,
  adventuringDayXPLimitDifference: number,
  percentOfAdventuringDayXPRemaining: number
) => {
  return (
    adventuringDayXPLimit +
    adventuringDayXPLimitDifference * percentOfAdventuringDayXPRemaining
  );
};
