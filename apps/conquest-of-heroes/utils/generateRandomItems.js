import { generateRandomCategoryObject } from './generateRandomObject';

export const generateRandomItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const randomItem = generateRandomCategoryObject();
    items.push(randomItem);
  }
  return items;
};
