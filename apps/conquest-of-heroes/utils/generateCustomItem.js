import { getRandomIncrementOfTen } from './getRandomIncrementOfTen';

const conditionTypes = [
  'Blinded',
  'Charmed',
  'Deafened',
  'Frightened',
  'Grappled',
  'Incapacitated',
  'Paralyzed',
  'Petrified',
  'Poisoned',
  'Prone',
  'Restrained',
  'Stunned',
  'Unconscious',
  'Exhaustion',
];

const abilityScores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

const generateCustomItem = (name, type, effects) => {
  const numEffects = Math.floor(Math.random() * 7);

  const generatedEffects = [];
  console.log('Effects array:', effects);

  for (let i = 0; i < numEffects; i++) {
    const randomEffectIndex = Math.floor(Math.random() * effects.length);
    const effect = effects[randomEffectIndex];

    const isGood = Math.random() < 0.5;
    console.log('Current effect:', effect);

    const valueRange = isGood ? effect.good : effect.bad;
    const minValue = valueRange.min;
    const maxValue = valueRange.max;

    const evenDie =
      2 *
      (Math.floor(Math.random() * ((maxValue - minValue + 1) / 2)) +
        Math.ceil(minValue / 2));

    const value =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const displayValue = isGood ? `+${value}` : `${value}`;

    const randomAbilityScoreIndex = Math.floor(
      Math.random() * abilityScores.length
    );
    const abilityScore = abilityScores[randomAbilityScoreIndex];

    if (effect.type === 'Condition') {
      const randomConditionIndex = Math.floor(
        Math.random() * conditionTypes.length
      );
      const conditionType = conditionTypes[randomConditionIndex];

      const prefix = isGood
        ? Math.random() < 0.5
          ? 'You gain ADV against being'
          : 'You are immune to being'
        : 'You gain DISADV against being';

      generatedEffects.push(`${prefix} ${conditionType}`);
    } else if (effect.type === 'Blindsight') {
      generatedEffects.push(
        `Gain Blindsight out to a range of ${getRandomIncrementOfTen(
          minValue,
          maxValue
        )}ft`
      );
    } else if (effect.type === 'Attacks') {
      const minRoll = effect.bad.min;
      const maxRoll = effect.bad.max;
      const rollRange =
        maxRoll === minRoll ? `${maxRoll}` : `${minRoll}-${maxRoll}`;

      generatedEffects.push(`1d4 on Attack. On ${rollRange}, gain +1 dmg`);
    } else if (effect.type === 'Concentration') {
      let concentrationText = '';

      if (effect.disadvantage === null) {
        concentrationText =
          'You must succeed at a concentration check at the start of each of your turns for any active spell.';
      } else if (effect.disadvantage === false) {
        concentrationText =
          'Can concentrate on 2 spells at the same time with DISADV on one';
      } else if (effect.disadvantage === true) {
        concentrationText =
          'Can concentrate on 2 spells at the same time with DISADV on both';
      }

      generatedEffects.push(concentrationText);
    } else if (effect.diceAmount) {
      const diceAmountRange = isGood
        ? effect.diceAmount.good
        : effect.diceAmount.bad;
      const minDiceAmount = diceAmountRange.min;
      const maxDiceAmount = diceAmountRange.max;

      const diceAmount =
        Math.floor(Math.random() * (maxDiceAmount - minDiceAmount + 1)) +
        minDiceAmount;

      generatedEffects.push(
        `${
          effect.type === 'Ability Score'
            ? `${abilityScore} `
            : effect.type === 'Set Ability Score to'
            ? `Set ${abilityScore} to`
            : effect.type === 'Plus Ability Score'
            ? `${abilityScore}`
            : effect.type
        } (${diceAmount}d${Math.abs(evenDie)})`
      );
    } else if (
      effect.type === 'ADV against Exhaustion' ||
      effect.type === 'Immune to being Blinded' ||
      effect.type === 'Immune to being Charmed'
    ) {
      generatedEffects.push(`${effect.type}`);
    } else {
      generatedEffects.push(
        `${
          effect.type === 'Ability Score'
            ? `${abilityScore} `
            : effect.type === 'Set Ability Score to'
            ? `Set ${abilityScore} to `
            : effect.type === 'Plus Ability Score'
            ? `${abilityScore}`
            : effect.type
        } ${displayValue}`
      );
    }
  }

  return {
    name: name,
    type: type,
    effects: generatedEffects,
  };
};

export default generateCustomItem;
