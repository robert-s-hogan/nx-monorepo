import { random } from './random';

export const languagesTable = [
  'Abyssal',
  'Aklo',
  'Aboleth',
  'Aquan',
  'Auran',
  'Beholder',
  'Celestial',
  'Celestial Sign Language',
  'Cyclops',
  'Deep Gnome',
  'Deep Speech',
  'Druidic',
  'Duergar',
  'Draconic',
  'Dwarvish',
  'Elvish',
  'Giant',
  'Giant Eagle',
  'Gith',
  'Gnomish',
  'Goblin',
  'Halfling',
  'Harpy',
  'Ignan',
  'Infernal',
  'Infernal Sign Language',
  'Kraken',
  'Primordial',
  'Sphinx',
  'Sylvan',
  'Terran',
  'Thieves Cant',
  'Undercommon',
];

export const getRandomLanguage = (seed?: number): string => {
  return random(languagesTable, seed);
};
