import { useMemo } from 'react';

// Define a type for each category of map constants
interface MapConstantsProps {
  encounterObjectives: { objective: string; weight: number }[];
  mapSizes: { size: string; width: number; length: number }[];
  terrainTypes: { name: string }[];
  timeOfDay: { name: string; weight: number }[];
  weather: { name: string; weight: number }[];
  weatherChange: { name: string }[];
  weatherSeverity: { name: string; weight: number }[];
  weatherType: { name: string }[];
}

// Random selection hook definition
export const useRandomMapSelection = (mapConstants: MapConstantsProps) => {
  // Helper function to randomize selection from an array
  const randomizeSelection = <
    T extends { name?: string; objective?: string; size?: string }
  >(
    array: T[]
  ): T => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  };

  // Use useMemo to memoize the random selections
  const selection = useMemo(
    () => ({
      objective: randomizeSelection(mapConstants.encounterObjectives).objective,
      size: randomizeSelection(mapConstants.mapSizes).size,
      terrain: randomizeSelection(mapConstants.terrainTypes).name,
      timeOfDay: randomizeSelection(mapConstants.timeOfDay).name,
      weather: randomizeSelection(mapConstants.weather).name,
      weatherChange: randomizeSelection(mapConstants.weatherChange).name,
      weatherSeverity: randomizeSelection(mapConstants.weatherSeverity).name,
      weatherType: randomizeSelection(mapConstants.weatherType).name,
    }),
    [mapConstants]
  );

  return selection;
};
