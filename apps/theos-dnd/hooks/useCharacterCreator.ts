import { useState } from 'react';
import { CLASS_MODIFIERS, SPECIES_MODIFIERS, BASE_STATS } from '../data/entity';
import { Character, ClassName, SpeciesName, Stats } from '../types';

export function useCharacterCreator() {
  const [character, setCharacter] = useState<Character | null>(null);

  function createCharacter(
    name: string,
    className: string,
    speciesName: string
  ): void {
    const classModifiers = CLASS_MODIFIERS[className];
    if (!classModifiers) {
      console.error(`Invalid class name: ${className}`);
      return;
    }

    const speciesModifiers = SPECIES_MODIFIERS[speciesName];
    if (!speciesModifiers) {
      console.error(`Invalid species name: ${speciesName}`);
      return;
    }

    const stats: Stats = {
      STR:
        BASE_STATS.STR +
        (classModifiers?.STR || 0) +
        (speciesModifiers?.STR || 0),
      CON:
        BASE_STATS.CON +
        (classModifiers?.CON || 0) +
        (speciesModifiers?.CON || 0),
      DEX:
        BASE_STATS.DEX +
        (classModifiers?.DEX || 0) +
        (speciesModifiers?.DEX || 0),
      INT:
        BASE_STATS.INT +
        (classModifiers?.INT || 0) +
        (speciesModifiers?.INT || 0),
      WIS:
        BASE_STATS.WIS +
        (classModifiers?.WIS || 0) +
        (speciesModifiers?.WIS || 0),
      CHA:
        BASE_STATS.CHA +
        (classModifiers?.CHA || 0) +
        (speciesModifiers?.CHA || 0),
      DEF:
        BASE_STATS.DEF +
        (classModifiers?.DEF || 0) +
        (speciesModifiers?.DEF || 0),
      PHYSICAL_ATTACK:
        BASE_STATS.PHYSICAL_ATTACK +
        (classModifiers?.PHYSICAL_ATTACK || 0) +
        (speciesModifiers?.PHYSICAL_ATTACK || 0),
      MAGICAL_ATTACK:
        BASE_STATS.MAGICAL_ATTACK + (classModifiers?.MAGICAL_ATTACK || 0),
      RESOURCE: BASE_STATS.RESOURCE + (classModifiers?.RESOURCE || 0),
      HP:
        (BASE_STATS.CON +
          (classModifiers?.CON || 0) +
          (speciesModifiers?.CON || 0)) *
        6, // Modify this if there are special rules
    };

    setCharacter({
      name,
      className: className as ClassName,
      speciesName: speciesName as SpeciesName,
      stats,
      health: stats.HP,
      defense: stats.DEF,
      hitDamage: 1,
      criticalDamage: 1,
      image: '',
      description: '',
      slug: '',
      deadImage: '',
    });
  }

  return {
    character,
    createCharacter,
  };
}
