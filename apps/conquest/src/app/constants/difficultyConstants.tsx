export function getRandomEncounterDifficulty() {
  const roll = Math.floor(Math.random() * 100) + 1;

  if (roll <= 15) {
    return 'Deadly';
  } else if (roll <= 50) {
    return 'Hard';
  } else if (roll <= 90) {
    return 'Medium';
  } else {
    return 'Easy';
  }
}
