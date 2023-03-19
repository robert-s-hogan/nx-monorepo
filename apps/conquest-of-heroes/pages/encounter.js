import { useEffect } from 'react';
import { Text, Heading } from '@chakra-ui/react';
// import { TriangleDownIcon } from '@chakra-ui/icons';
import { useEncounter } from '../hooks/useEncounter';

import Layout from '../components/layout';
import Loading from '../components/loading';
import EncounterDetails from '../components/encounterDetails';
import Map from '../components/map';

export default function Encounter({ fetcher }) {
  const { data, isLoading, isError } = useEncounter('/api/encounter', fetcher);

  useEffect(() => {
    const unloadHandler = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', unloadHandler);

    return () => {
      window.removeEventListener('beforeunload', unloadHandler);
    };
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  const { difficulty, monsters, mapInfo, quest, intro } = data;
  const {
    hasWeather,
    weatherSeverity,
    weatherType,
    weatherChange,
    terrainType,
    dimensions,
    timeOfDay,
    playerStartingPotions,
    oppositionStartingPotions,
    objects,
  } = mapInfo;
  const { challengeRating } = monsters;
  const { objectives } = quest;

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  let mapDimensions = randomNumber(0, dimensions.length);
  const mapTerrainType = randomNumber(0, terrainType.length);
  const selectedTerrainType = terrainType[mapTerrainType];

  const mapTimeOfDay = randomNumber(0, timeOfDay.length);
  const selectedTimeOfDay = timeOfDay[mapTimeOfDay];

  const mapHasWeather = randomNumber(0, hasWeather.length);
  const selectedHasWeather = hasWeather[mapHasWeather];

  const mapWeatherType = randomNumber(0, weatherType.length);
  const selectedWeatherType = weatherType[mapWeatherType];

  const mapWeatherSeverity = randomNumber(0, weatherSeverity.length);
  const selectedWeatherSeverity = weatherSeverity[mapWeatherSeverity];

  const mapWeatherChange = randomNumber(0, weatherChange.length);
  const selectedWeatherChange = weatherChange[mapWeatherChange];

  const playerStartingPotion = randomNumber(0, playerStartingPotions.length);
  let oppositionStartingPotion = randomNumber(
    0,
    oppositionStartingPotions.length
  );

  const difficultyLevel = randomNumber(0, difficulty.length);

  const questObjective = randomNumber(0, objectives.length);
  const selectedObjective = objectives[questObjective];

  const amountOfItems = randomNumber(1, 16);

  while (oppositionStartingPotion === playerStartingPotion) {
    oppositionStartingPotion = randomNumber(
      0,
      oppositionStartingPotions.length
    );
  }

  const sharedMapDimensions = dimensions[mapDimensions];

  return (
    <Layout maxW="full">
      <Heading as="h2" size="lg" my={4}>
        Encounter Details
      </Heading>
      <EncounterDetails
        monsters={monsters}
        amountOfItems={amountOfItems}
        objects={objects}
        oppositionStartingPotion={oppositionStartingPotion}
        playerStartingPotion={playerStartingPotion}
        dimensions={sharedMapDimensions}
        difficulty={difficultyLevel}
        terrainType={selectedTerrainType}
        weatherSeverity={selectedWeatherSeverity}
        weatherChange={selectedWeatherChange}
        timeOfDay={selectedTimeOfDay}
        objectives={selectedObjective}
        weatherType={selectedWeatherType}
        challengeRating={challengeRating}
        hasWeather={selectedHasWeather}
        intro={intro}
      />
      <Heading as="h2" size="lg" my={4}>
        Map
      </Heading>
      <Map
        monsters={monsters}
        amountOfItems={amountOfItems}
        objects={objects}
        oppositionStartingPotion={oppositionStartingPotion}
        playerStartingPotion={playerStartingPotion}
        dimensions={sharedMapDimensions}
        difficulty={difficultyLevel}
        terrainType={selectedTerrainType}
        weatherSeverity={selectedWeatherSeverity}
        weatherChange={selectedWeatherChange}
        timeOfDay={selectedTimeOfDay}
        objectives={selectedObjective}
        weatherType={selectedWeatherType}
        challengeRating={challengeRating}
        hasWeather={selectedHasWeather}
      />
    </Layout>
  );
}
