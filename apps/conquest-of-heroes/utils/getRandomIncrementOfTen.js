export function getRandomIncrementOfTen(min, max) {
  const minValue = Math.ceil(min / 10);
  const maxValue = Math.floor(max / 10);

  return (
    10 * (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue)
  );
}
