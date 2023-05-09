import { getRandomElement } from '@with-nx/utils';

const weaponRarities = ['common', 'uncommon', 'rare', 'very rare', 'legendary'];
const weaponConditions = ['new', 'good', 'used', 'damaged', 'broken'];
const weaponSizes = ['small', 'medium', 'large'];
const quadrantOptions = [0, 1, 2, 3];
const lootOptions = [
  'elvish engraving',
  'dwarven engraving',
  'orcish engraving',
];

const generateRandomWeapon = (name, value) => {
  const rarity = getRandomElement(weaponRarities);
  const condition = getRandomElement(weaponConditions);
  const size = getRandomElement(weaponSizes);
  const quadrant = getRandomElement(quadrantOptions);
  const loot = getRandomElement(lootOptions);

  let rarityMultiplier;
  switch (rarity) {
    case 'common':
      rarityMultiplier = 1;
      break;
    case 'uncommon':
      rarityMultiplier = 1.5;
      break;
    case 'rare':
      rarityMultiplier = 2;
      break;
    case 'very rare':
      rarityMultiplier = 2.5;
      break;
    case 'legendary':
      rarityMultiplier = 3;
      break;
    default:
      rarityMultiplier = 1;
  }

  let conditionMultiplier;
  switch (condition) {
    case 'new':
      conditionMultiplier = 4;
      break;
    case 'good':
      conditionMultiplier = 3;
      break;
    case 'used':
      conditionMultiplier = 2;
      break;
    case 'damaged':
      conditionMultiplier = 0.7;
      break;
    case 'broken':
      conditionMultiplier = 0.5;
      break;
    default:
      conditionMultiplier = 1;
  }

  const calculatedValue = Math.floor(
    value * rarityMultiplier * conditionMultiplier
  );

  const description = `This ${condition} ${name} is a ${size} weapon with a ${rarity} rarity.`;

  return {
    type: 'weapon',
    name,
    description,
    location: quadrant,
    interactable: true,
    loot: loot,
    rarity,
    condition,
    size,
    value: calculatedValue,
  };
};

export default generateRandomWeapon;
