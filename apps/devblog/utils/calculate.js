export function calculateHitPoints(challengeRating) {
  return Math.round((challengeRating / 30) * 290 + 10);
}

export function calculateStat(challengeRating) {
  return Math.round((challengeRating / 30) * 19 + 1);
}

export function calculateActions(challengeRating) {
  return Math.round((challengeRating / 30) * 9 + 1);
}

export function calculateSpecialAbilities(challengeRating) {
  return Math.round((challengeRating / 30) * 9 + 1);
}
