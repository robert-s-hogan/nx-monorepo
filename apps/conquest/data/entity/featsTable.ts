import { random } from './random';

export const featsTable = [
  'Alert',
  'Athlete',
  'Actor',
  'Charger',
  'Crossbow Expert',
  'Defensive Duelist',
  'Dual Wielder',
  'Dungeon Delver',
  'Durable',
  'Elemental Adept',
  'Grappler',
  'Great Weapon Master',
  'Healer',
  'Heavy Armor Master',
  'Inspiring Leader',
  'Keen Mind',
  'Lightly Armored',
  'Linguist',
  'Lucky',
  'Mage Slayer',
  'Magic Initiate',
  'Martial Adept',
  'Medium Armor Master',
  'Mobile',
  'Moderately Armored',
  'Mounted Combatant',
  'Observant',
  'Polearm Master',
  'Resilient',
  'Ritual Caster',
  'Savage Attacker',
  'Sentinel',
  'Sharpshooter',
  'Shield Master',
  'Skilled',
  'Skulker',
  'Spell Sniper',
  'Tavern Brawler',
  'Tough',
  'War Caster',
  'Weapon Focus',
  'Weapon Master',
];

export function generateFeats(numFeats = 1, seed?: number) {
  const selectedFeats = [];
  const featsRemaining = featsTable.slice();

  for (let i = 0; i < numFeats; i++) {
    if (featsRemaining.length === 0) {
      break;
    }

    const randomFeat = random(featsRemaining, seed);
    selectedFeats.push(randomFeat);
    featsRemaining.splice(featsRemaining.indexOf(randomFeat), 1);
  }

  return selectedFeats;
}
