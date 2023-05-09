// libs/utils/src/lib/array-utils.ts

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
