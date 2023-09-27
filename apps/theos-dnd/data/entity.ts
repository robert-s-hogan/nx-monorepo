import { StatName, Stats } from '../types';

export const BASE_STATS: Stats = {
  STR: 10,
  CON: 10,
  DEX: 10,
  INT: 10,
  WIS: 10,
  CHA: 10,
  DEF: 10, // Default defense value
  HP: 100, // Default hit point value
  PHYSICAL_ATTACK: 1,
  MAGICAL_ATTACK: 1,
  RESOURCE: 100, // Default character resource value
};

export function computeClassStats(baseStats: Stats, classModifiers: Stats) {
  return {
    ...baseStats,
    ...classModifiers,
    HP: (baseStats.CON + classModifiers.CON) * 6,
    PHYSICAL_ATTACK:
      classModifiers.STR > classModifiers.DEX
        ? classModifiers.STR * 2
        : classModifiers.DEX * 2,
    MAGICAL_ATTACK: classModifiers.INT * 2,
    DEF: baseStats.DEF + classModifiers.DEF, // this is a simple addition, adjust as needed
  };
}

export const BarbarianModifiers: Stats = {
  STR: 2,
  CON: 2,
  DEX: 0,
  INT: -2,
  WIS: 0,
  CHA: -1,
  DEF: 2, // Example value
  HP: 0, // Will be set by computeClassStats
  PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
  MAGICAL_ATTACK: 0, // Will be set by computeClassStats
  RESOURCE: 100,
};

export const MageModifiers: Stats = {
  STR: -1,
  CON: -1,
  DEX: 1,
  INT: 3,
  WIS: 1,
  CHA: 0,
  DEF: 1, // Example value
  HP: 0, // Will be set by computeClassStats
  PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
  MAGICAL_ATTACK: 0, // Will be set by computeClassStats
  RESOURCE: 100,
};

export const RangerModifiers: Stats = {
  STR: 1,
  CON: 0,
  DEX: 2,
  INT: 0,
  WIS: 1,
  CHA: 0,
  DEF: 2, // Example value
  HP: 0, // Will be set by computeClassStats
  PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
  MAGICAL_ATTACK: 0, // Will be set by computeClassStats
  RESOURCE: 100,
};

export const CLASS_MODIFIERS: Record<string, Stats> = {
  Barbarian: computeClassStats(BASE_STATS, BarbarianModifiers),
  Mage: computeClassStats(BASE_STATS, MageModifiers),
  Ranger: computeClassStats(BASE_STATS, RangerModifiers),
};

export const SPECIES_MODIFIERS: Record<string, Stats> = {
  Gargoyle: {
    STR: 2,
    CON: 1,
    DEX: 0,
    INT: -2,
    WIS: 0,
    CHA: -2,
    DEF: 2, // Example value
    HP: 0, // Will be set by computeClassStats
    PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
    MAGICAL_ATTACK: 0, // Will be set by computeClassStats
    RESOURCE: 0,
  },
  Human: {
    STR: 0,
    CON: 0,
    DEX: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    DEF: 2, // Example value
    HP: 0, // Will be set by computeClassStats
    PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
    MAGICAL_ATTACK: 0, // Will be set by computeClassStats
    RESOURCE: 0,
  },
  Skeleton: {
    STR: 0,
    CON: 0,
    DEX: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    DEF: 2, // Example value
    HP: 0, // Will be set by computeClassStats
    PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
    MAGICAL_ATTACK: 0, // Will be set by computeClassStats
    RESOURCE: 0,
  },
  Zombie: {
    STR: 2,
    CON: 1,
    DEX: -2,
    INT: -2,
    WIS: 0,
    CHA: -2,
    DEF: 2, // Example value
    HP: 0, // Will be set by computeClassStats
    PHYSICAL_ATTACK: 0, // Will be set by computeClassStats
    MAGICAL_ATTACK: 0, // Will be set by computeClassStats
    RESOURCE: 0,
  },
};

type AttackType = 'HIT' | 'KICK' | 'CAST_SPELL' | 'CLASS_ABILITY';

export function calculateAttackDamage(
  playerClass: string,
  playerStats: Stats,
  attackType: AttackType
): number {
  let damage = 0;

  switch (attackType) {
    case 'HIT':
      damage = playerStats.STR * playerStats.PHYSICAL_ATTACK;
      break;
    case 'KICK':
      damage = playerStats.DEX * playerStats.PHYSICAL_ATTACK;
      break;
    case 'CAST_SPELL':
      if (playerClass === 'Barbarian') {
        // Barbarians are not good at casting, reduce damage
        damage = playerStats.INT * playerStats.MAGICAL_ATTACK * 0.25;
      } else {
        damage = playerStats.INT * playerStats.MAGICAL_ATTACK;
      }
      break;
    case 'CLASS_ABILITY':
      // Customized for each class
      if (playerClass === 'Barbarian') {
        damage = playerStats.STR * 2;
      } else if (playerClass === 'Mage') {
        damage = playerStats.INT * 2;
      } else if (playerClass === 'Ranger') {
        damage = playerStats.DEX * 2;
      }
      break;
    default:
      break;
  }

  return damage;
}
