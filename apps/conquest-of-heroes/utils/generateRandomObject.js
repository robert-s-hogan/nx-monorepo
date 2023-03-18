// utils/generateRandomObject.js
import { FullWeapons } from '../categories/Weapons';
import { FullItems } from '../categories/Items';

// import { Structures } from '../categories/Structures';

const categories = {
  weapons: FullWeapons,
  items: FullItems,
  // Add more categories here
};

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
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
