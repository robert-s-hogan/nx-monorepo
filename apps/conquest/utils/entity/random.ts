export const random = (arr: any[], seed?: number): any => {
  const rng = seed ? new Math.seedrandom(seed) : Math.random;
  return arr[Math.floor(rng() * arr.length)];
};
