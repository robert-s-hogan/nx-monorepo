import { Structures } from '../categories/structures';
import { ObjectCondition } from '../categories/objectCondition';
import { ObjectSize } from '../categories/objectSize';
import { ObjectMaterial } from '../categories/objectMaterial';

const getRandomDescriptor = (descriptors) => {
  const randomIndex = Math.floor(Math.random() * descriptors.length);
  return descriptors[randomIndex];
};

export const generateStructure = () => {
  const randomStructure =
    Structures[Math.floor(Math.random() * Structures.length)];
  const size = getRandomDescriptor(ObjectSize);
  const condition = getRandomDescriptor(ObjectCondition);
  const material = getRandomDescriptor(ObjectMaterial);

  const fullDescription = `A ${size}, ${condition}, ${material} ${randomStructure.name}. ${randomStructure.description}`;

  return {
    ...randomStructure,
    size,
    condition,
    material,
    fullDescription,
  };
};
