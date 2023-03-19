const generateCustomItem = (name, type, effects) => {
  const abilityScores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  const numEffects = Math.floor(Math.random() * 7);

  const generatedEffects = [];
  for (let i = 0; i < numEffects; i++) {
    const randomEffectIndex = Math.floor(Math.random() * effects.length);
    const effect = effects[randomEffectIndex];

    const isGood = Math.random() < 0.5;
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

    if (effect.type === 'Blindsight') {
      generatedEffects.push(`Gain Blindsight out to a range of ${value}ft`);
    } else if (effect.type === 'Attacks') {
      const minRoll = effect.bad.min;
      const maxRoll = effect.bad.max;
      const rollRange =
        maxRoll === minRoll ? `${maxRoll}` : `${minRoll}-${maxRoll}`;

      generatedEffects.push(`1d4 on Attack. On ${rollRange}, gain +1 dmg`);
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
    } else {
      generatedEffects.push(
        `${
          effect.type === 'Ability Score'
            ? `${abilityScore} `
            : effect.type === 'Set Ability Score to'
            ? `Set ${abilityScore} to`
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
