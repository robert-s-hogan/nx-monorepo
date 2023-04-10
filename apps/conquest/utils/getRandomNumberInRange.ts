export function getRandomNumberInRange(range) {
  const min = range[0];
  const max = range[range.length - 1];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
