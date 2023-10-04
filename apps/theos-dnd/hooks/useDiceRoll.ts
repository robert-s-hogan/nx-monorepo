import { useState } from 'react';
import { GiBrokenAxe, GiDodge, GiDrippingBlade, GiFist } from 'react-icons/gi';
import { computeTotalStats } from '../utils';
import { OutcomeType, Stats } from '../types';
import { CLASS_MODIFIERS, SPECIES_MODIFIERS } from '../data';

const difficulty = 1;

export function useDiceRoll() {
  const [outcome, setOutcome] = useState<OutcomeType | null>(null);

  const roll = (
    armorValue: number,
    attackType: 'hit' | 'kick' | 'headbutt',
    playerStats: Stats, // <-- Add this
    playerClass: string,
    playerSpecies: string,
    BASE_STATS: Stats
  ) => {
    const classStats = computeTotalStats(
      BASE_STATS,
      CLASS_MODIFIERS[playerClass],
      SPECIES_MODIFIERS[playerSpecies],
      difficulty
    );
    const speciesStats = SPECIES_MODIFIERS[playerSpecies];
    const effectiveStats = classStats;

    const strengthModifier = effectiveStats.STR / 10; // <-- Update to use effectiveStats
    const dexterityModifier = effectiveStats.DEX / 10; // <-- Update to use effectiveStats

    const outcomes: OutcomeType[] = [
      { result: 'Hit', image: GiFist },
      { result: 'Critical', image: GiDrippingBlade },
      { result: 'Dodge', image: GiDodge },
    ];

    const d20Roll = Math.floor(Math.random() * 20) + 1;

    // Factor in the attack type and stats
    let attackRoll =
      d20Roll + (attackType === 'hit' ? strengthModifier : dexterityModifier);

    // Further adjust the roll based on the class (hypothetical adjustments)
    if (playerClass === 'Warrior' && attackType === 'hit') attackRoll += 2;

    if (attackRoll > 19) {
      setOutcome({ ...outcomes[1], damage: 10 + strengthModifier * 2 }); // Example logic for Critical damage
    } else if (attackRoll < 3) {
      setOutcome(outcomes[2]);
    } else if (attackRoll > armorValue) {
      setOutcome({ ...outcomes[0], damage: 5 + strengthModifier }); // Example logic for Hit damage
    } else {
      setOutcome({ result: 'Miss', image: GiBrokenAxe });
    }
  };

  return {
    outcome,
    roll,
  };
}
