import {
  FaHandBackFist,
  GameIconBrokenAxe,
  GameIconDodge,
  GameIconDrippingBlade,
} from '@with-nx/icons';

export type OutcomeType = {
  result: string;
  image: any;
};

export const rollDice = (armorValue: number): OutcomeType => {
  const outcomes: OutcomeType[] = [
    { result: 'Hit', image: FaHandBackFist },
    { result: 'Critical', image: GameIconDrippingBlade },
    { result: 'Dodge', image: GameIconDodge },
  ];

  const d20Roll = Math.floor(Math.random() * 20) + 1;

  console.log(`d20roll: ${d20Roll}`);
  console.log(`armorValue: ${armorValue}`);

  if (d20Roll > 19) return outcomes[1]; // Critical
  if (d20Roll < 3) return outcomes[2]; // Dodge
  if (d20Roll > armorValue) return outcomes[0]; // Hit

  return { result: 'Miss', image: GameIconBrokenAxe };
};
