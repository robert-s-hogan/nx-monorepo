const goodConditions = [
  {
    type: 'ADV against Exhaustion',
    good: { min: 0, max: 0 },
    bad: { min: 0, max: 0 },
    advantage: true,
    disadvantage: null,
  },
  {
    type: 'Immune to being Blinded',
    good: { min: 0, max: 0 },
    bad: { min: 0, max: 0 },
    advantage: null,
    disadvantage: null,
  },
  {
    type: 'Immune to being Charmed',
    good: { min: 0, max: 0 },
    bad: { min: 0, max: 0 },
    advantage: null,
    disadvantage: null,
  },
  // ... and so on for all the other conditions
];

const sharedEffects = [
  {
    type: 'Plus Ability Score',
    good: { min: 1, max: 4 },
    bad: { min: -1, max: -4 },
    diceAmount: null,
    advantage: null,
  },
  {
    type: 'AC',
    good: { min: 1, max: 4 },
    bad: { min: -1, max: -4 },
    diceAmount: null,
    advantage: null,
  },
  {
    type: 'Initiative',
    good: { min: 1, max: 4 },
    bad: { min: -1, max: -4 },
    diceAmount: null,
    advantage: null,
  },
  {
    type: 'Set Ability Score to',
    good: { min: 13, max: 23 },
    bad: { min: 5, max: 9 },
    diceAmount: null,
    advantage: null,
  },
  {
    type: 'Thorned Armor',
    good: { min: 4, max: 8 },
    bad: { min: 4, max: 8 },
    diceAmount: {
      good: {
        min: 1,
        max: 2,
      },
      bad: {
        min: 1,
        max: 2,
      },
    },
    advantage: null,
  },
  {
    type: 'Attacks',
    good: { min: 1, max: 4 },
    bad: { min: 1, max: 4 },
    diceAmount: {
      good: {
        min: 1,
        max: 1,
      },
      bad: {
        min: 1,
        max: 1,
      },
      advantage: null,
    },
  },
  {
    type: 'Blindsight',
    good: { min: 10, max: 60 },
    bad: { min: 10, max: 60 },
    diceAmount: null,
    advantage: null,
  },
  {
    type: 'Concentration',
    good: {
      min: 0,
      max: 2,
    },
    bad: {
      min: 0,
      max: 2,
    },
    diceAmount: null,
    disadvantage: null, // true | false | null
  },
  {
    type: 'Condition',
    good: {
      min: 0,
      max: 2,
    },
    bad: {
      min: 0,
      max: 2,
    },
    diceAmount: null,
    disadvantage: null, // true | false | null
  },
  ...goodConditions,

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
