export const calculateRestTime = (
  shortRestNeeded: boolean[] | undefined,
  longRestNeeded: boolean
): number => {
  // Long rest takes precedence
  if (longRestNeeded) return 480; // Long rest is 8 hours

  // Safely check if 'shortRestNeeded' is an array and contains 'true'
  if (Array.isArray(shortRestNeeded) && shortRestNeeded.includes(true)) {
    return 60; // Short rest is 60 minutes if any 'true'
  }

  // Default return if no conditions are met
  return 0; // No rest needed
};

export const calculateRandomTimeBetweenEncounters = () => {
  return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
};
