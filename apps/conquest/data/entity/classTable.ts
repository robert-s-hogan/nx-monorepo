import { random } from './random';
import { generateTools } from './toolsTable';
import * as MdIcons from 'react-icons/md';

export const classesTable = [
  {
    name: 'Barbarian',
    icon: MdIcons.MdAccessibilityNew,
    languages: [],
    tools: [],
  },
  {
    name: 'Bard',
    icon: MdIcons.MdMusicNote,
    languages: [],
    tools: generateTools('bard'),
  },
  {
    name: 'Cleric',
    icon: MdIcons.MdHealing,
    languages: [],
    tools: generateTools('cleric'),
  },
  {
    name: 'Druid',
    icon: MdIcons.MdNaturePeople,
    languages: ['Druidic'],
    tools: [],
  },
  {
    name: 'Fighter',
    icon: MdIcons.MdFingerprint,
    languages: [],
    tools: generateTools('fighter'),
  },
  {
    name: 'Monk',
    icon: MdIcons.MdPersonPinCircle,
    languages: [],
    tools: [],
  },
  {
    name: 'Paladin',
    icon: MdIcons.MdPersonPinCircle,
    languages: [],
    tools: [],
  },
  {
    name: 'Ranger',
    icon: MdIcons.MdPersonPinCircle,
    languages: [],
    tools: generateTools('ranger'),
  },
  {
    name: 'Rogue',
    icon: MdIcons.MdPersonPinCircle,
    languages: ['Thieves Cant'],
    tools: generateTools('rogue'),
  },
  {
    name: 'Sorcerer',
    icon: MdIcons.MdPersonPinCircle,
    languages: [],
    tools: [],
  },
  {
    name: 'Warlock',
    icon: MdIcons.MdPersonPinCircle,
    languages: [],
    tools: [],
  },
  {
    name: 'Wizard',
    icon: MdIcons.MdPersonPinCircle,
    languages: [],
    tools: generateTools('wizard'),
  },
];

export function generateClass(seed?: number) {
  const randomClass = random(classesTable, seed);
  return randomClass;
}
