// libs/utils/src/lib/math-utils.ts

export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export function getRandomIncrementOfTen(min: number, max: number): number {
  const minValue = Math.ceil(min / 10);
  const maxValue = Math.floor(max / 10);

  return (
    10 * (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue)
  );
}

export function getRandomNumberInRange(range: number[]): number {
  const min = range[0];
  const max = range[range.length - 1];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
