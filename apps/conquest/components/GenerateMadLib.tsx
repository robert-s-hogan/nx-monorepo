import { useEncounter } from '../hooks/useEncounter';
import { useRandomValues } from '../store/RandomValuesProvider';

const GenerateMadLib = () => {
  const {
    isLoading: encounterLoading,
    error: encounterError,
    intro,
    map,
    monsters,
    difficulty,
    quest,
  } = useEncounter();

  const { generateRandomValue } = useRandomValues(); // Use the generateRandomValue method to generate random values

  // Replace the random selection of values with calls to generateRandomValue method
  const selectedArrival =
    generateRandomValue(intro.arrival) ?? 'unexpectedly arrive at';
  const selectedAtmosphere = generateRandomValue(intro.atmosphere) ?? 'empty';
  const selectedLocation = generateRandomValue(intro.location) ?? 'nowhere';
  const selectedLighting = generateRandomValue(intro.lighting) ?? 'darkness';
  const selectedEvents =
    generateRandomValue(intro.events) ?? 'nothing out of the ordinary';
  const selectedSenses = generateRandomValue(intro.senses) ?? 'silence';
  const selectedMood = generateRandomValue(intro.mood) ?? 'unsettling';
  const selectedWeatherSeverity =
    generateRandomValue(map?.weather?.severity) ?? 'clear';
  const selectedWeatherType =
    generateRandomValue(map?.weather?.type) ?? 'sunshine';
  const selectedWeatherChange =
    generateRandomValue(map?.weather?.change) ?? 'no change';
  const selectedTerrainType = generateRandomValue(map?.terrain?.type) ?? 'flat';
  const selectedDimensions =
    generateRandomValue(map?.terrain?.dimensions) ?? 'nothingness';
  const selectedTimeOfDay = generateRandomValue(map?.time?.ofDay) ?? 'midday';
  const selectedPlayerPositions =
    generateRandomValue(map?.positions?.player) ?? 'nowhere';
  const selectedOppositionPositions =
    generateRandomValue(map?.positions?.opposition) ?? 'nowhere';
  const selectedObject = generateRandomValue(map?.objects) ?? {
    name: 'nothing',
    condition: 'undamaged',
    value: 0,
  };
  const selectedDifficulty = generateRandomValue(difficulty) ?? 'easy';
  const selectedMonster =
    generateRandomValue(monsters?.challengeRating[selectedDifficulty]) ??
    'no monster';
  const selectedObjective = generateRandomValue(quest.objectives);

  if (encounterLoading) return <div>Loading...</div>;
  if (encounterError) return <div>Error: {encounterError}</div>;

  const madlib = `You ${selectedArrival} a ${selectedLocation} that ${selectedLighting}. ${selectedSenses} fills your senses as you notice ${selectedEvents}. The ${selectedAtmosphere} ${selectedMood}.

      You step ${selectedWeatherSeverity} ${selectedWeatherType}. ${selectedWeatherChange}.
      
      You find yourself in ${selectedTerrainType} terrain. The ${selectedDimensions} are daunting.
      
      It is currently ${selectedTimeOfDay}. You spot your party's starting positions at ${selectedPlayerPositions}, and your opposition's at ${selectedOppositionPositions}.
      
      There is a ${selectedObject.name} nearby, which is ${selectedObject.condition} and worth ${selectedObject.value} gold.
      
      Your quest objective is to ${selectedObjective}.
      
      As you continue on, you realize that the ${selectedMonster} ahead is going to be ${selectedDifficulty} to defeat.`;

  return <div>{madlib}</div>;
};

export default GenerateMadLib;
