import { useState, useEffect } from 'react';
import {
  Text,
  Button,
  Grid,
  GridItem,
  Table,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Thead,
  Tbody,
  Select,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
// import { TriangleDownIcon } from '@chakra-ui/icons';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEncounter } from '../hooks/useEncounter';
import { useCounter } from '../hooks/useCounter';
import { useSelector, useDispatch } from 'react-redux';
import { setEncounter } from '../features/encounterSlice';

import Layout from '../components/layout';
import Loading from '../components/loading';
import EncounterDetails from '../components/encounterDetails';
import Map from '../components/map';
import DropDown from '../components/dropDown';

export default function Encounter({ fetcher }) {
  const dispatch = useDispatch();
  const encounterData = useSelector((state) => state.encounter);

  const router = useRouter();
  const { data, isLoading, isError } = useEncounter('/api/encounter', fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  const mapSize = 4;
  const { difficulty, monsters, mapInfo, quest, encounterModifier } = data;
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
  const { playerCount, playerLevelStart } = encounterModifier;
  const { objectives } = quest;

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
  let oppositionStartingPotion = randomNumber(0, oppositionStartingPotions.length);

  const difficultyLevel = randomNumber(0, difficulty.length);
  const selectedDifficulty = difficulty[difficultyLevel];

  const questObjective = randomNumber(0, objectives.length);
  const selectedObjective = objectives[questObjective];

  const amountOfItems = randomNumber(1, 16);

  while (oppositionStartingPotion === playerStartingPotion) {
    oppositionStartingPotion = randomNumber(0, oppositionStartingPotions.length);
  }

  function loadPage() {
    router.push('/encounter');
  }

  const sharedMapDimensions = dimensions[mapDimensions];

  return (
    <Layout maxW="full">
      <pre>
        <code>{JSON.stringify(encounterData, null, 2)}</code>
      </pre>
      <Button colorScheme="blue" onClick={() => loadPage()} mt={3}>
        Reload
      </Button>
      <Tabs
        isFitted
        variant="enclosed-colored"
        colorScheme="blue"
        mt={4}
        border="1px"
        borderRadius="6px"
        borderColor="gray.200"
      >
        <TabList mb="0">
          <Tab
            borderTop="none"
            borderLeft="none"
            _selected={{
              fontWeight: 'bold',
              color: 'white',
              bg: 'gray.800',
              borderTopRadius: '6px',
            }}
          >
            Encounter
          </Tab>
          <Tab
            borderTop="none"
            borderLeft="none"
            _selected={{
              fontWeight: 'bold',
              color: 'white',
              bg: 'gray.800',
              borderTopRadius: '6px',
            }}
          >
            Map
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
            />
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
