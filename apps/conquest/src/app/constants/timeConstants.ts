export const SHORT_REST = 60;
export const LONG_REST = 480;

export const calculateTimeBetweenEncounters = (
  shortRestNeeded: boolean,
  longRestNeeded: boolean
) => {
  if (longRestNeeded) {
    return LONG_REST;
  } else if (shortRestNeeded) {
    return SHORT_REST;
  } else {
    return Math.floor(Math.random() * 100) + 1;
  }
};

type FrequencyMap = {
  [key: string]: number;
};

export const encounterFrequencies: FrequencyMap = {
  Immediate: 2,
  '30sec': 3,
  '1min': 20,
  '9min30sec': 10,
  '10min': 20,
  '59min30sec': 10,
  '1hr': 24,
  '7hrs59min': 3,
  '8hrs': 1,
};

export function createRandomizationPool(frequencies: FrequencyMap): string[] {
  const pool: string[] = [];
  Object.entries(frequencies).forEach(([time, count]) => {
    for (let i = 0; i < count; i++) {
      pool.push(time);
    }
  });
  return pool;
}

export function randomSelect(pool: string[]): string {
  const index: number = Math.floor(Math.random() * pool.length);
  return pool[index];
}
