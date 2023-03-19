const generateCustomItem = (name, type, effects) => {
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

    generatedEffects.push(`${effect.type} ${displayValue}`);
  }

  return {
    name: name,
    type: type,
    effects: generatedEffects,
  };
};

export default generateCustomItem;
