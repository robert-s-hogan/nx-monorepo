// libs/utils/src/lib/object-utils.ts
export function deepClone(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone: any = Array.isArray(obj) ? [] : {}; // Add index signature to allow indexing with a string
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
