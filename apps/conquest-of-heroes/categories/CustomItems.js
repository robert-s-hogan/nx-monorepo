const sharedEffects = [
  {
    type: 'Ability Score',
    good: { min: 1, max: 4 },
    bad: { min: -1, max: -4 },
  },
  {
    type: 'Armor Class',
    good: { min: 1, max: 4 },
    bad: { min: -1, max: -4 },
  },
  {
    type: 'Initiative',
    good: { min: 1, max: 4 },
    bad: { min: -1, max: -4 },
  },
  // Add more effects here if needed
];

export const CustomItems = [
  {
    type: 'custom-item',
    name: 'Weapon',
    effects: [...sharedEffects],
  },
  {
    type: 'custom-item',
    name: 'Armor',
    effects: [...sharedEffects],
  },
  {
    type: 'custom-item',
    name: 'Shield',
    effects: [...sharedEffects],
  },
  {
    type: 'custom-item',
    name: 'Accessory',
    effects: [...sharedEffects],
  },
];
