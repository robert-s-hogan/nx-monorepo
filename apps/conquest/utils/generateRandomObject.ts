import { getRandomElement } from '@with-nx/utils';

import { CustomItems } from '../data/CustomItems';

const categories = {
  customItems: CustomItems,
};

const removeUndefinedProperties = (obj) => {
  const cleanedObj = { ...obj };
  Object.keys(cleanedObj).forEach((key) => {
    if (cleanedObj[key] === undefined) {
      delete cleanedObj[key];
    }
  });
  return cleanedObj;
};

const generateRandomCategoryObject = () => {
  const categoryKeys = Object.keys(categories);
  const randomCategoryKey = getRandomElement(categoryKeys);
  const randomCategory = categories[randomCategoryKey];
  const randomObject = getRandomElement(randomCategory);
  return removeUndefinedProperties(randomObject);
};

export { generateRandomCategoryObject };
