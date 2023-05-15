// libs/utils/src/lib/array-utils.ts

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export const sortProducts = (
  products: Product[],
  criteria: SortCriteria
): Product[] => {
  return products.sort((a, b) => {
    if (criteria === 'price') {
      return a.price - b.price;
    } else if (criteria === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });
};

export const removeFalsyValuesFromArray<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}

export function cleanObject<T extends Record<string, any>>(obj: T): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}