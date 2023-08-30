export function adpToInt(adp) {
  if (!adp) {
    console.error('Invalid ADP value:', adp);
    return null;
  }
  return (Math.floor((adp - 1) / 12) + 1) * 12 + (((adp - 1) % 12) + 1);
}

export function intToAdpString(value) {
  let round = Math.floor(value / 12) + 1;
  let pick = value % 12;

  if (pick === 0) {
    pick = 12;
    round -= 1;
  }

  return `${round}.${pick}`;
}
