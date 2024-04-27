import {
  createRandomizationPool,
  encounterFrequencies,
  randomSelect,
} from '../constants/timeConstants';

export const calculateRestTime = (
  shortRestNeeded: boolean[] | undefined,
  longRestNeeded: boolean
): number => {
  if (longRestNeeded) return 480;

  if (Array.isArray(shortRestNeeded) && shortRestNeeded.includes(true)) {
    return 60;
  }

  return 0;
};

export const calculateRandomTimeBetweenEncounters = (): string => {
  const randomizationPool: string[] =
    createRandomizationPool(encounterFrequencies);
  const randomEncounterTime: string = randomSelect(randomizationPool);
  return randomEncounterTime;
};

export function calculateTimeSpentResting(
  longRestNeeded: boolean,
  shortRestsAvailable: boolean[]
) {
  if (longRestNeeded) {
    return 480;
  } else if (shortRestsAvailable.includes(true)) {
    return 60;
  } else {
    return 0;
  }
}
