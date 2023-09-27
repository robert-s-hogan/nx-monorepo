import { useState } from 'react';
import {
  FaHandBackFist,
  GameIconBrokenAxe,
  GameIconDodge,
  GameIconDrippingBlade,
} from '@with-nx/icons';

export type OutcomeType = {
  result: string;
  image: any;
  damage?: number; // Include the damage amount in the outcome
};

export function useDiceRoll() {
  const [outcome, setOutcome] = useState<OutcomeType | null>(null);

  const roll = (
    armorValue: number,
    attackType: 'hit' | 'kick' | 'headbutt',
    playerStats: { strength: number; dexterity: number; constitution: number },
    playerClass: string
  ) => {
    // A sample modifier based on player stats and class
    const strengthModifier = playerStats.strength / 10;
    const dexterityModifier = playerStats.dexterity / 10;

    const outcomes: OutcomeType[] = [
      { result: 'Hit', image: FaHandBackFist },
      { result: 'Critical', image: GameIconDrippingBlade },
      { result: 'Dodge', image: GameIconDodge },
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
      setOutcome({ result: 'Miss', image: GameIconBrokenAxe });
    }
  };

  return {
    outcome,
    roll,
  };
}
