import {
  FaShieldAlt,
  FaScroll,
  FaRing,
  FaBook,
  FaKey,
  FaHammer,
} from 'react-icons/fa';
import {
  GiPotionBall,
  GiCrescentStaff,
  GiGemNecklace,
  GiCloak,
  GiSpartanHelmet,
  GiPocketBow,
  GiCrossbow,
  GiAce,
  GiBootStomp,
  GiGauntlet,
  GiBroadDagger,
} from 'react-icons/gi';
import { RiSwordLine } from 'react-icons/ri';
import { IoIosColorWand } from 'react-icons/io';
import {
  MdHealing,
  MdWhatshot,
  MdNature,
  MdFlashOn,
  MdStar,
} from 'react-icons/md';
import {
  AiOutlineFire,
  AiOutlineGlobal,
  AiOutlineThunderbolt,
  AiOutlineCode,
  AiOutlineLock,
} from 'react-icons/ai';
import { DiLinux, DiJava } from 'react-icons/di';
import {
  GoCircuitBoard,
  GoLightBulb,
  GoTools,
  GoDeviceCamera,
  GoRocket,
} from 'react-icons/go';
import { BsFillEyeFill } from 'react-icons/bs';
import { MockEncounterData } from '../types/types';

export function generateMapData() {
  const mapData = [];

  for (let i = 0; i < 96; i++) {
    const itemCount = Math.floor(Math.random() * 1) + 1;
    const items = [];

    for (let j = 0; j < itemCount; j++) {
      items.push(getRandomItem(itemArray));
    }

    const id = mapData.length + 1;
    const position = getUniqueRandomPositions();
    mapData.push({
      id: id,
      name: items,
      position: position,
      isEnemy: false,
      icon: items.map((item) => itemIcons[item]),
    });
  }

  const enemyPosition = Math.floor(Math.random() * 12);
  mapData[enemyPosition].isEnemy = true;

  return mapData;
}

export function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export function getRandomPosition() {
  const randomIndex = Math.floor(Math.random() * positions.length);
  return positions[randomIndex];
}

export function getUniqueRandomPositions() {
  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'center-left',
    'center-center',
    'center-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  const firstIndex = Math.floor(Math.random() * positions.length);
  let secondIndex = Math.floor(Math.random() * positions.length);

  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * positions.length);
  }

  return [positions[firstIndex], positions[secondIndex]];
}

export const itemIcons = {
  Sword: RiSwordLine,
  Shield: FaShieldAlt,
  Potion: GiPotionBall,
  Bow: GiPocketBow,
  Wand: IoIosColorWand,
  Scroll: FaScroll,
  Staff: GiCrescentStaff,
  Ring: FaRing,
  Amulet: GiGemNecklace,
  Cloak: GiCloak,
  Helmet: GiSpartanHelmet,
  Dagger: GiBroadDagger,
  Crossbow: GiCrossbow,
  Axe: GiAce,
  Boots: GiBootStomp,
  Gauntlet: GiGauntlet,
  Tome: FaBook,
  Key: FaKey,
  Hammer: FaHammer,
  Healing: MdHealing,
  Fire: AiOutlineFire,
  Ice: MdWhatshot,
  Earth: MdNature,
  Lightning: MdFlashOn,
  Star: MdStar,
  Circuit: GoCircuitBoard,
  Light: GoLightBulb,
  Lock: AiOutlineLock,
  Tools: GoTools,
  Vision: BsFillEyeFill,
  World: AiOutlineGlobal,
  Thunder: AiOutlineThunderbolt,
  Code: AiOutlineCode,
  Linux: DiLinux,
  Java: DiJava,
  Camera: GoDeviceCamera,
  Rocket: GoRocket,
};

export const itemArray = [
  'Sword',
  'Shield',
  'Potion',
  'Bow',
  'Wand',
  'Scroll',
  'Staff',
  'Ring',
  'Amulet',
  'Cloak',
  'Helmet',
  'Dagger',
  'Crossbow',
  'Axe',
  'Boots',
  'Gauntlet',
  'Tome',
  'Key',
  'Hammer',
  'Healing',
  'Fire',
  'Ice',
  'Earth',
  'Lightning',
  'Star',
  'Circuit',
  'Light',
  'Lock',
  'Tools',
  'Vision',
  'World',
  'Thunder',
  'Code',
  'Linux',
  'Java',
  'Camera',
  'Rocket',
];

export const positions = [
  // 'top-left',
  // 'top-center',
  // 'top-right',
  // 'center-left',
  'center-center',
  // 'center-right',
  // 'bottom-left',
  // 'bottom-center',
  // 'bottom-right',
];

export function regenerateValues() {
  // const newEncounterData = cloneDeep(encounterData);
  const newEncounterData = [];

  // newEncounterData.map_data.forEach((item) => {
  //   item.name = [];
  // });

  // newEncounterData.map_data.forEach((item) => {
  //   const itemCount = Math.floor(Math.random() * 5) + 1;
  //   const items = [];

  //   for (let j = 0; j < itemCount; j++) {
  //     items.push(getRandomItem(itemArray));
  //   }

  //   item.name = items;
  // });

  // _encounterData(newEncounterData);
}

export const mockApiResponse: any = {
  player_count: 4,
  player_experience_start: 500,
  encounter_adjusted_experience: 1000,
  encounter_experience: 2000,
  notes: 'This is a test encounter',
  campaign_name: 'Diplomacy',
  intro:
    "As you enter the dark, damp dungeon, the sound of your footsteps echoes off the walls. The air is thick with the smell of musty earth, and the only light comes from the flickering torches you carry in your hand. You and your companions creep slowly down the narrow corridor, scanning for any signs of danger. Suddenly, you hear a faint rustling sound up ahead. Your heart races as you ready your weapon, and you signal to your allies to be on guard. As you turn the corner, you see a group of goblins huddled together, whispering and laughing. They haven't noticed you yet. What do you do?",
  monsters: ['goblin', 'orgre', 'troll', 'giant'],
  map_data: generateMapData(),
  objects: ['chest', 'potion', 'scroll', 'ring'],
  map_dimensions: [1000, 1100, 1200],
  player_starting_position: 3,
  characters: [
    {
      name: 'Leia',
      role: 'Druid',
      icon: 'GiIronCross',
      avatar: '/leia.webp',
      level: 1,
      currentHitpoints: 30,
      totalHitpoints: 30,
      tempHitpoints: 0,
      stats: {
        ac: {
          base: 10,
          modifier: 1,
        },
        initiative: {
          base: 1,
          modifier: 1,
        },
        speed: {
          base: 30,
          modifier: 1,
        },
        str: {
          base: 16,
          modifier: 1,
        },
        dex: {
          base: 12,
          modifier: 1,
        },
        int: {
          base: 10,
          modifier: 1,
        },
        con: {
          base: 14,
          modifier: 1,
        },
        wis: {
          base: 14,
          modifier: 1,
        },
        cha: {
          base: 8,
          modifier: 1,
        },
        prof: {
          base: 2,
          modifier: 1,
        },
        dark_vision: {
          base: 60,
          modifier: 1,
        },
        passive_perception: {
          base: 12,
          modifier: 1,
        },
        languages: {
          base: ['Common', 'Elvish'],
          modifier: ['Orcish', 'Dwarvish'],
        },
        proficiencies: {
          weapons: ['Martial Weapons', 'Simple Weapons'],
          armor: ['Heavy Armor', 'Light Armor', 'Medium Armor', 'Shields'],
          tools: ['Disguise Kit', "Smith's Tools", 'Tantan'],
        },
        saves: {
          str: {
            base: 10,
            modifier: 2,
            advantage: false,
            disadvantage: false,
          },
          dex: {
            base: 12,
            modifier: 3,
            advantage: false,
            disadvantage: false,
          },
          con: {
            base: 14,
            modifier: 4,
            advantage: false,
            disadvantage: false,
          },
          wis: {
            base: 16,
            modifier: 5,
            advantage: false,
            disadvantage: false,
          },
          cha: {
            base: 8,
            modifier: -1,
            advantage: false,
            disadvantage: false,
          },
          int: {
            base: 10,
            modifier: 0,
            advantage: false,
            disadvantage: false,
          },
        },
      },
      skills: [
        {
          name: 'Acrobatics',
          type: 'dex',
          bonus: true,
          prof: true,
          modifier: 1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Animal Handling',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Arcana',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Athletics',
          type: 'str',
          bonus: true,
          prof: true,
          modifier: 3,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Deception',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'History',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Insight',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Intimidation',
          type: 'cha',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Investigation',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Medicine',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Nature',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Perception',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Performance',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Persuasion',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Religion',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Sleight of Hand',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Stealth',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: false,
          disadvantage: false,
        },
        {
          name: 'Survival',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
      ],
      damageTypes: {
        fire: {
          advantage: false,
          disadvantage: false,
        },
        water: {
          advantage: false,
          disadvantage: false,
        },
        acid: {
          advantage: false,
          disadvantage: false,
        },
        cold: {
          advantage: false,
          disadvantage: false,
        },
        lightning: {
          advantage: false,
          disadvantage: false,
        },
        poison: {
          advantage: false,
          disadvantage: false,
        },
        psychic: {
          advantage: false,
          disadvantage: false,
        },
        radiant: {
          advantage: false,
          disadvantage: false,
        },
        thunder: {
          advantage: false,
          disadvantage: false,
        },
        bludgeoning: {
          advantage: false,
          disadvantage: false,
        },
        piercing: {
          advantage: false,
          disadvantage: false,
        },
        slashing: {
          advantage: false,
          disadvantage: false,
        },
      },
      notes: '',
    },
    {
      name: 'Dergs',
      role: 'Paladin',
      icon: 'FaHammer',
      avatar: '/dergs.webp',
      level: 1,
      currentHitpoints: 30,
      totalHitpoints: 30,
      tempHitpoints: 0,
      stats: {
        ac: {
          base: 10,
          modifier: 1,
        },
        initiative: {
          base: 1,
          modifier: 1,
        },
        speed: {
          base: 30,
          modifier: 1,
        },
        str: {
          base: 16,
          modifier: 1,
        },
        dex: {
          base: 12,
          modifier: 1,
        },
        int: {
          base: 10,
          modifier: 1,
        },
        con: {
          base: 14,
          modifier: 1,
        },
        wis: {
          base: 14,
          modifier: 1,
        },
        cha: {
          base: 8,
          modifier: 1,
        },
        prof: {
          base: 2,
          modifier: 1,
        },
        dark_vision: {
          base: 60,
          modifier: 1,
        },
        passive_perception: {
          base: 12,
          modifier: 1,
        },
        languages: {
          base: ['Orc', 'Dwarvish'],
          modifier: ['Orcish', 'Dwarvish'],
        },
        proficiencies: {
          armor: ['Heavy Armor', 'Light Armor', 'Medium Armor', 'Shields'],
          weapons: ['Martial Weapons', 'Simple Weapons'],
          tools: ['Disguise Kit', "Smith's Tools", 'Tantan'],
        },
        saves: {
          str: {
            base: 10,
            modifier: 2,
            advantage: false,
            disadvantage: false,
          },
          dex: {
            base: 12,
            modifier: 3,
            advantage: false,
            disadvantage: false,
          },
          con: {
            base: 14,
            modifier: 4,
            advantage: false,
            disadvantage: false,
          },
          wis: {
            base: 16,
            modifier: 5,
            advantage: false,
            disadvantage: false,
          },
          cha: {
            base: 8,
            modifier: -1,
            advantage: false,
            disadvantage: false,
          },
          int: {
            base: 10,
            modifier: 0,
            advantage: false,
            disadvantage: false,
          },
        },
      },
      skills: [
        {
          name: 'Acrobatics',
          type: 'dex',
          bonus: true,
          prof: true,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Animal Handling',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Arcana',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Athletics',
          type: 'str',
          bonus: true,
          prof: true,
          modifier: 3,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Deception',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'History',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Insight',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Intimidation',
          type: 'cha',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Investigation',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Medicine',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Nature',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Perception',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Performance',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Persuasion',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Religion',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Sleight of Hand',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Stealth',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Survival',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
      ],
      damageTypes: {
        fire: {
          advantage: false,
          disadvantage: false,
        },
        water: {
          advantage: false,
          disadvantage: false,
        },
        acid: {
          advantage: false,
          disadvantage: false,
        },
        cold: {
          advantage: false,
          disadvantage: false,
        },
        lightning: {
          advantage: false,
          disadvantage: false,
        },
        poison: {
          advantage: false,
          disadvantage: false,
        },
        psychic: {
          advantage: false,
          disadvantage: false,
        },
        radiant: {
          advantage: false,
          disadvantage: false,
        },
        thunder: {
          advantage: false,
          disadvantage: false,
        },
        bludgeoning: {
          advantage: false,
          disadvantage: false,
        },
        piercing: {
          advantage: false,
          disadvantage: false,
        },
        slashing: {
          advantage: false,
          disadvantage: false,
        },
      },
      notes: '',
    },
    {
      name: 'Heydar',
      role: 'Fighter',
      icon: 'FaShieldAlt',
      avatar: '/heydar.jpeg',
      level: 1,
      currentHitpoints: 30,
      totalHitpoints: 30,
      tempHitpoints: 0,
      stats: {
        ac: {
          base: 10,
          modifier: 1,
        },
        initiative: {
          base: 1,
          modifier: 1,
        },
        speed: {
          base: 30,
          modifier: 1,
        },
        str: {
          base: 16,
          modifier: 1,
        },
        dex: {
          base: 12,
          modifier: 1,
        },
        int: {
          base: 10,
          modifier: 1,
        },
        con: {
          base: 14,
          modifier: 1,
        },
        wis: {
          base: 14,
          modifier: 1,
        },
        cha: {
          base: 8,
          modifier: 1,
        },
        prof: {
          base: 2,
          modifier: 1,
        },
        dark_vision: {
          base: 60,
          modifier: 1,
        },
        passive_perception: {
          base: 12,
          modifier: 1,
        },
        languages: {
          base: ['Dwarvish', 'Draconic'],
          modifier: ['Orcish', 'Dwarvish'],
        },
        proficiencies: {
          armor: ['Heavy Armor', 'Light Armor', 'Medium Armor', 'Shields'],
          weapons: ['Martial Weapons', 'Simple Weapons'],
          tools: ['Disguise Kit', "Smith's Tools", 'Tantan'],
        },
        saves: {
          str: {
            base: 10,
            modifier: 2,
            advantage: false,
            disadvantage: false,
          },
          dex: {
            base: 12,
            modifier: 3,
            advantage: false,
            disadvantage: false,
          },
          con: {
            base: 14,
            modifier: 4,
            advantage: false,
            disadvantage: false,
          },
          wis: {
            base: 16,
            modifier: 5,
            advantage: false,
            disadvantage: false,
          },
          cha: {
            base: 8,
            modifier: -1,
            advantage: false,
            disadvantage: false,
          },
          int: {
            base: 10,
            modifier: 0,
            advantage: false,
            disadvantage: false,
          },
        },
      },
      skills: [
        {
          name: 'Acrobatics',
          type: 'dex',
          bonus: true,
          prof: true,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Animal Handling',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Arcana',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Athletics',
          type: 'str',
          bonus: true,
          prof: true,
          modifier: 3,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Deception',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'History',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Insight',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Intimidation',
          type: 'cha',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Investigation',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Medicine',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Nature',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Perception',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Performance',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Persuasion',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Religion',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Sleight of Hand',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Stealth',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Survival',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
      ],
      damageTypes: {
        fire: {
          advantage: false,
          disadvantage: false,
        },
        water: {
          advantage: false,
          disadvantage: false,
        },
        acid: {
          advantage: false,
          disadvantage: false,
        },
        cold: {
          advantage: false,
          disadvantage: false,
        },
        lightning: {
          advantage: false,
          disadvantage: false,
        },
        poison: {
          advantage: false,
          disadvantage: false,
        },
        psychic: {
          advantage: false,
          disadvantage: false,
        },
        radiant: {
          advantage: false,
          disadvantage: false,
        },
        thunder: {
          advantage: false,
          disadvantage: false,
        },
        bludgeoning: {
          advantage: false,
          disadvantage: false,
        },
        piercing: {
          advantage: false,
          disadvantage: false,
        },
        slashing: {
          advantage: false,
          disadvantage: false,
        },
      },
      notes: '',
    },
    {
      name: 'Xaryp',
      role: 'Rogue',
      icon: 'FaUserNinja',
      avatar: '/xyrap.jpeg',
      level: 1,
      currentHitpoints: 30,
      totalHitpoints: 30,
      tempHitpoints: 0,
      stats: {
        ac: {
          base: 10,
          modifier: 1,
        },
        initiative: {
          base: 1,
          modifier: 1,
        },
        speed: {
          base: 30,
          modifier: 1,
        },
        str: {
          base: 16,
          modifier: 1,
        },
        dex: {
          base: 12,
          modifier: 1,
        },
        int: {
          base: 10,
          modifier: 1,
        },
        con: {
          base: 14,
          modifier: 1,
        },
        wis: {
          base: 14,
          modifier: 1,
        },
        cha: {
          base: 8,
          modifier: 1,
        },
        prof: {
          base: 2,
          modifier: 1,
        },
        dark_vision: {
          base: 60,
          modifier: 1,
        },
        passive_perception: {
          base: 12,
          modifier: 1,
        },
        languages: {
          base: ['Common', 'Orcish', 'Dwarvish'],
          modifier: ['Orcish', 'Dwarvish'],
        },
        proficiencies: {
          armor: ['Heavy Armor', 'Light Armor', 'Medium Armor', 'Shields'],
          weapons: ['Martial Weapons', 'Simple Weapons'],
          tools: ['Disguise Kit', "Smith's Tools", 'Tantan'],
        },
        saves: {
          str: {
            base: 10,
            modifier: 2,
            advantage: false,
            disadvantage: false,
          },
          dex: {
            base: 12,
            modifier: 3,
            advantage: false,
            disadvantage: false,
          },
          con: {
            base: 14,
            modifier: 4,
            advantage: false,
            disadvantage: false,
          },
          wis: {
            base: 16,
            modifier: 5,
            advantage: false,
            disadvantage: false,
          },
          cha: {
            base: 8,
            modifier: -1,
            advantage: false,
            disadvantage: false,
          },
          int: {
            base: 10,
            modifier: 0,
            advantage: false,
            disadvantage: false,
          },
        },
      },
      skills: [
        {
          name: 'Acrobatics',
          type: 'dex',
          bonus: true,
          prof: true,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Animal Handling',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Arcana',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Athletics',
          type: 'str',
          bonus: true,
          prof: true,
          modifier: 3,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Deception',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'History',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Insight',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Intimidation',
          type: 'cha',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Investigation',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Medicine',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Nature',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Perception',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Performance',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Persuasion',
          type: 'cha',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Religion',
          type: 'int',
          bonus: true,
          prof: false,
          modifier: 0,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Sleight of Hand',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Stealth',
          type: 'dex',
          bonus: true,
          prof: false,
          modifier: 1,
          advantage: true,
          disadvantage: false,
        },
        {
          name: 'Survival',
          type: 'wis',
          bonus: false,
          prof: false,
          modifier: -1,
          advantage: true,
          disadvantage: false,
        },
      ],
      damageTypes: {
        fire: {
          advantage: false,
          disadvantage: false,
        },
        water: {
          advantage: false,
          disadvantage: false,
        },
        acid: {
          advantage: false,
          disadvantage: false,
        },
        cold: {
          advantage: false,
          disadvantage: false,
        },
        lightning: {
          advantage: false,
          disadvantage: false,
        },
        poison: {
          advantage: false,
          disadvantage: false,
        },
        psychic: {
          advantage: false,
          disadvantage: false,
        },
        radiant: {
          advantage: false,
          disadvantage: false,
        },
        thunder: {
          advantage: false,
          disadvantage: false,
        },
        bludgeoning: {
          advantage: false,
          disadvantage: false,
        },
        piercing: {
          advantage: false,
          disadvantage: false,
        },
        slashing: {
          advantage: false,
          disadvantage: false,
        },
      },
      notes: '',
    },
  ],
  potential_opposition_starting_positions: [0, 1, 2],
  items: ['lance', 'sword', 'shield', 'armor'],
  difficulty: ['easy', 'medium', 'hard', 'deadly'],
  terrain_type: {
    'rain-forest': {
      movement: 'disadvantage',
      color: {
        start: '#1a9850',
        end: '#006837',
      },
    },
    desert: {
      movement: 'normal',
      color: {
        start: '#fdae61',
        end: '#d7191c',
      },
    },
    ocean: {
      movement: 'impossible',
      color: {
        start: '#74add1',
        end: '#4575b4',
      },
    },
  },
  weather_severity: {
    clear: {
      description: 'Clear skies with no clouds in sight.',
      color: {
        start: '#FFFFFF',
        end: '#C9C9C9',
      },
      icon: [],
    },

    'partly cloudy': {
      description: 'Partially covered by clouds, with some sun visible.',
      color: {
        start: '#FFFFFF',
        end: '#C9C9C9',
      },
      icon: [],
    },
    cloudy: {
      description: 'Completely covered by clouds with no sun visible.',
      color: {
        start: '#C9C9C9',
        end: '#7F7F7F',
      },
      icons: [],
    },
  },
  weather_change: [
    'getting warmer',
    'getting colder',
    'getting wetter',
    'getting drier',
    'getting worse',
    'getting better',
  ],
  time_of_day: ['morning', 'afternoon', 'evening', 'night'],
  objectives: [
    'cleanse the area of enemies',
    'find the treasure',
    'escape',
    'protect the npc',
  ],
  weather_type: ['clear', 'rain', 'snow', 'wind'],
  challenge_rating: [0, 1, 3, 4],
  has_weather: [true, false],
};

export const fetchEncounterData = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiResponse);
    }, 1000);
  });
};
