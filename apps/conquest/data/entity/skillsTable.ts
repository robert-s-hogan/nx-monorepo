import { random } from './random';

const skillsTable = [
  { name: 'Acrobatics', type: 'dex' },
  { name: 'Animal Handling', type: 'wis' },
  { name: 'Arcana', type: 'int' },
  { name: 'Athletics', type: 'str' },
  { name: 'Deception', type: 'cha' },
  { name: 'History', type: 'int' },
  { name: 'Insight', type: 'wis' },
  { name: 'Intimidation', type: 'cha' },
  { name: 'Investigation', type: 'int' },
  { name: 'Medicine', type: 'wis' },
  { name: 'Nature', type: 'int' },
  { name: 'Perception', type: 'wis' },
  { name: 'Performance', type: 'cha' },
  { name: 'Persuasion', type: 'cha' },
  { name: 'Religion', type: 'int' },
  { name: 'Sleight of Hand', type: 'dex' },
  { name: 'Stealth', type: 'dex' },
  { name: 'Survival', type: 'wis' },
];

export const generateSkills = (statsTable, seed) => {
  const numSeed = seed ? random(seed) : undefined;

  return skillsTable.map((skill) => {
    const { type } = skill;
    const modifier = statsTable[type].modifier;
    return {
      ...skill,
      bonus: false,
      prof: false,
      modifier,
      advantage: false,
      disadvantage: false,
      seed: numSeed,
    };
  });
};
