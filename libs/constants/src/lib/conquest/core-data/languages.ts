import { Language } from '@with-nx/types';
import { rarities } from '@with-nx/utils';

export const languages: Language[] = [
  {
    name: 'Common',
    description: 'The most widely spoken language',
    rarity: rarities[0],
  },
  {
    name: 'Dwarvish',
    description: 'The language of Dwarves',
    rarity: rarities[2],
  },
  { name: 'Elvish', description: 'The language of Elves', rarity: rarities[2] },
  { name: 'Giant', description: 'The language of Giants', rarity: rarities[3] },
  {
    name: 'Gnomish',
    description: 'The language of Gnomes',
    rarity: rarities[3],
  },
  {
    name: 'Goblin',
    description: 'The language of Goblins',
    rarity: rarities[3],
  },
  {
    name: 'Halfling',
    description: 'The language of Halflings',
    rarity: rarities[3],
  },
  { name: 'Orc', description: 'The language of Orcs', rarity: rarities[3] },
  {
    name: 'Abyssal',
    description: 'The language of Demons',
    rarity: rarities[4],
  },
  {
    name: 'Celestial',
    description: 'The language of Celestials',
    rarity: rarities[4],
  },
  {
    name: 'Draconic',
    description: 'The language of Dragons',
    rarity: rarities[4],
  },
  {
    name: 'Deep Speech',
    description: 'The language of aberrations',
    rarity: rarities[4],
  },
  {
    name: 'Infernal',
    description: 'The language of devils',
    rarity: rarities[4],
  },
  {
    name: 'Primordial',
    description: 'The language of elementals',
    rarity: rarities[4],
  },
  {
    name: 'Sylvan',
    description: 'The language of fey creatures',
    rarity: rarities[4],
  },
  {
    name: 'Undercommon',
    description: 'The trade language of the Underdark',
    rarity: rarities[4],
  },
  {
    name: 'Aquan',
    description: 'The language of water-based creatures',
    rarity: rarities[5],
  },
  {
    name: 'Auran',
    description: 'The language of air-based creatures',
    rarity: rarities[5],
  },
  {
    name: 'Ignan',
    description: 'The language of fire-based creatures',
    rarity: rarities[5],
  },
  {
    name: 'Terran',
    description: 'The language of earth-based creatures',
    rarity: rarities[5],
  },
  {
    name: 'Modron',
    description: 'The language of mechanical beings',
    rarity: rarities[5],
  },
  {
    name: 'Slaad',
    description: 'The language of chaotic beings',
    rarity: rarities[5],
  },
  {
    name: 'Gith',
    description: 'The language of the Gith races',
    rarity: rarities[5],
  },
  {
    name: 'Runic',
    description: 'The language of ancient runes and glyphs',
    rarity: rarities[5],
  },
  {
    name: 'Druidic',
    description: 'The secret language of druids',
    rarity: rarities[6],
  },
];
