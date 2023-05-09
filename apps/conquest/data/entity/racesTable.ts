import { random } from './random';
import { getRandomLanguage } from './languagesTable';

export const racesTable = [
  {
    name: 'Dwarf',
    languages: ['Common', 'Dwarvish'],
  },
  {
    name: 'Elf',
    languages: ['Common', 'Elvish'],
  },
  {
    name: 'Halfling',
    languages: ['Common', 'Halfling'],
  },
  {
    name: 'Human',
    languages: ['Common'],
  },
  {
    name: 'Dragonborn',
    languages: ['Common', 'Draconic'],
  },
  {
    name: 'Gnome',
    languages: ['Common', 'Gnomish'],
  },
  {
    name: 'Half-Elf',
    languages: ['Common', 'Elvish', getRandomLanguage()],
  },
  {
    name: 'Half-Orc',
    languages: ['Common', 'Orc'],
  },
  {
    name: 'Tiefling',
    languages: ['Common', 'Infernal'],
  },
  {
    name: 'Aarakocra',
    languages: ['Aarakocra', 'Auran', 'Common'],
  },
];

export const generateRace = (seed?: number) => {
  const race = random(racesTable, seed);

  if (race.name === 'Human') {
    race.languages.push(getRandomLanguage(seed));
  }

  return race;
};
