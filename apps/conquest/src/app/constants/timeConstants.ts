export const SHORT_REST = 60;
export const LONG_REST = 480;

export const calculateTimeBetweenEncounters = (
  shortRestNeeded: boolean,
  longRestNeeded: boolean
) => {
  if (longRestNeeded) {
    return LONG_REST;
  } else if (shortRestNeeded) {
    return SHORT_REST;
  } else {
    return Math.floor(Math.random() * 100) + 1;
  }
};
