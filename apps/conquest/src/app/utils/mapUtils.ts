export function getRandomQuadrant(excludeQuadrant: number = 0): number {
  let roll;
  do {
    roll = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
  } while (roll === excludeQuadrant);
  return roll;
}
