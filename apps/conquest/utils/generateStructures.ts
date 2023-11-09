import { getRandomElement } from '@with-nx/utils';
import {
  dndConditions,
  dndSizes,
  dndMaterials,
  adjectives,
  connectingWords,
  descriptors,
  Structures,
} from '@with-nx/constants';

const randomDescriptor = getRandomElement(descriptors);

export const generateStructures = (quadrantCount) => {
  const structures = [];

  for (let q = 0; q < quadrantCount; q++) {
    const quadrantStructures = [];
    const randomCount = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < randomCount; i++) {
      const randomStructure =
        Structures[Math.floor(Math.random() * Structures.length)];
      const size = getRandomElement(dndSizes);
      const condition = getRandomElement(dndConditions);
      const material = getRandomElement(dndMaterials);
      const randomAdjective = getRandomElement(adjectives);
      const randomConnectingWord = getRandomElement(connectingWords);

      const fullDescription = `A ${size}, ${condition}, ${material} ${randomStructure.name} ${randomConnectingWord} a ${randomAdjective} touch.`;

      quadrantStructures.push({
        ...randomStructure,
        size,
        condition,
        material,
        fullDescription,
      });
    }

    structures.push(quadrantStructures);
  }

  return structures;
};

export default generateStructures;
