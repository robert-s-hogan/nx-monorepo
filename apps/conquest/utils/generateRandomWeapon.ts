import { getRandomElement } from '@with-nx/utils';
import {
  dndRarities,
  dndConditions,
  dndSizes,
  dndQuadrantOptions,
  dndWeaponLootOptions,
} from '@with-nx/constants';

const generateRandomWeapon = (name, value) => {
  const rarity = getRandomElement(dndRarities);
  const condition = getRandomElement(dndConditions);
  const size = getRandomElement(dndSizes);
  const quadrant = getRandomElement(dndQuadrantOptions);
  const loot = getRandomElement(dndWeaponLootOptions);

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
