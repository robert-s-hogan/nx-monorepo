//libs/utils/src/lib/rarity.ts

export const rarities: Rarity[] = [
  { level: 1, name: 'Common', frequency: 50 },
  { level: 2, name: 'Uncommon', frequency: 30 },
  { level: 3, name: 'Rare', frequency: 15 },
  { level: 4, name: 'Very Rare', frequency: 4.5 },
  { level: 5, name: 'Legendary', frequency: 0.5 },
  // You can continue this up to level 10.
];

// Get a random rarity based on its frequency.
export function getRandomRarity(): Rarity {
  const total = rarities.reduce((sum, rarity) => sum + rarity.frequency, 0);
  let rand = Math.random() * total;

  for (let i = 0; i < rarities.length; i++) {
    if (rand < rarities[i].frequency) return rarities[i];
    rand -= rarities[i].frequency;
  }

  return rarities[rarities.length - 1]; // Return the highest rarity if none was selected.
}
