import seedrandom from 'seedrandom';

export const random = (arr: any[], seed?: number): any => {
  const rng = seed ? seedrandom(seed) : Math.random;
  return arr[Math.floor(rng() * arr.length)];
};
