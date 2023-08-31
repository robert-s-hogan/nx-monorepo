export const adpToInt = (
  adp: { xrank: number; name: string } | string | null
): number => {
  if (!adp) return 0; // handle null or undefined input

  // Handle case when adp is a string
  if (typeof adp === 'string') {
    const parsedValue = parseInt(adp, 10);
    return isNaN(parsedValue) ? 0 : parsedValue;
  }

  // Handle case when adp is an object
  return Math.round(adp.xrank);
};

export const intToAdpString = (value: number): string => {
  let round = Math.floor(value / 12) + 1;
  let pick = value % 12;

  if (pick === 0) {
    pick = 12;
    round -= 1;
  }

  return `${round}.${pick}`;
};

export const convertAdpToInt = (
  adp: { xrank: any; name: string } | null
): number => {
  if (!adp || typeof adp.xrank !== 'number') {
    return 0; // Default value for unexpected cases
  }
  return Math.round(adp.xrank);
};

export const adpObjectToInt = (
  adp: { xrank: number; name: string } | null
): number => {
  if (!adp) return 0;
  return Math.round(adp.xrank);
};
