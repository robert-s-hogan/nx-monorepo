const generateCustomItem = (name, type, effects) => {
  // Ability score options
  const abilityScores = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
  ];

  // Randomly select the number of effects (0-6)
  const numEffects = Math.floor(Math.random() * 7);

  // Randomly select and generate effects
  const generatedEffects = [];
  for (let i = 0; i < numEffects; i++) {
    const randomEffectIndex = Math.floor(Math.random() * effects.length);
    const effect = effects[randomEffectIndex];

    const isGood = Math.random() < 0.5;
    const valueRange = isGood ? effect.good : effect.bad;
    const minValue = valueRange.min;
    const maxValue = valueRange.max;

    const value =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const displayValue = isGood ? `+${value}` : `${value}`;

    // Randomly select an ability score
    const randomAbilityScoreIndex = Math.floor(
      Math.random() * abilityScores.length
    );
    const abilityScore = abilityScores[randomAbilityScoreIndex];

    // Add the effect with the ability score description
    generatedEffects.push(
      `${
        effect.type === 'Ability Score' ? `${abilityScore} ` : effect.type
      } ${displayValue}`
    );
  }

  return {
    name: name,
    type: type,
    effects: generatedEffects,
  };
};

export default generateCustomItem;
