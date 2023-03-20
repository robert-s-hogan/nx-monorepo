import { Structures } from '../categories/Structures';
import { ObjectCondition } from '../categories/ObjectCondition';
import { ObjectSize } from '../categories/ObjectSize';
import { ObjectMaterial } from '../categories/ObjectMaterial';

const adjectives = [
  'colorful',
  'magnificent',
  'impressive',
  'elegant',
  'charming',
  'majestic',
  'stunning',
  'enchanting',
  'glamorous',
  'sophisticated',
  'unique',
  'exquisite',
  'spectacular',
  'fascinating',
  'alluring',
  'mesmerizing',
  'captivating',
  'breathtaking',
  'dazzling',
  'radiant',
  'shimmering',
  'sparkling',
  'brilliant',
  'gorgeous',
  'luxurious',
  'opulent',
  'sumptuous',
  'ornate',
  'regal',
  'resplendent',
];

const connectingWords = [
  'with',
  'that has',
  'featuring',
  'boasting',
  'displaying',
  'showcasing',
  'highlighting',
  'exhibiting',
  'presenting',
  'revealing',
  'flaunting',
  'embodying',
  'incorporating',
  'combining',
  'integrating',
  'infused with',
  'adorned with',
  'accentuated by',
  'enhanced by',
  'enriched by',
  'graced with',
  'radiating',
  'oozing',
  'emanating',
  'overflowing with',
  'imbued with',
  'imbued with the spirit of',
  'imbued with the essence of',
  'imbued with the magic of',
];

const getRandomDescriptor = (descriptors) => {
  const randomIndex = Math.floor(Math.random() * descriptors.length);
  return descriptors[randomIndex];
};

export const generateStructures = (quadrantCount) => {
  const structures = [];

  for (let q = 0; q < quadrantCount; q++) {
    const quadrantStructures = [];
    const randomCount = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < randomCount; i++) {
      const randomStructure =
        Structures[Math.floor(Math.random() * Structures.length)];
      const size = getRandomDescriptor(ObjectSize);
      const condition = getRandomDescriptor(ObjectCondition);
      const material = getRandomDescriptor(ObjectMaterial);
      const randomAdjective = getRandomDescriptor(adjectives);
      const randomConnectingWord = getRandomDescriptor(connectingWords);

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
