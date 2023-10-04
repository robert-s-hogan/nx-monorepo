import { GiBrokenAxe, GiDodge, GiDrippingBlade, GiFist } from 'react-icons/gi';
import { OutcomeType } from '../types';

export const rollDice = (armorValue: number): OutcomeType => {
  const outcomes: OutcomeType[] = [
    { result: 'Hit', image: GiFist },
    { result: 'Critical', image: GiDrippingBlade },
    { result: 'Dodge', image: GiDodge },
  ];

  const d20Roll = Math.floor(Math.random() * 20) + 1;

  console.log(`d20roll: ${d20Roll}`);
  console.log(`armorValue: ${armorValue}`);

  if (d20Roll > 19) return outcomes[1]; // Critical
  if (d20Roll < 3) return outcomes[2]; // Dodge
  if (d20Roll > armorValue) return outcomes[0]; // Hit

  return { result: 'Miss', image: GiBrokenAxe };
};
