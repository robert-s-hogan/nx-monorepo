import { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Stack,
  Input,
  Button,
  Text,
  Link,
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

import Loading from '../components/loading';
import EncounterDetails from '../components/encounterDetails';
import Map from '../components/map';
import Caravan from '../components/caravan';
import Success from '../components/success';
import DropDown from '../components/dropDown';
import { setEncounterInformation } from '../features/encounterSlice';

import Layout from '../components/layout';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const dispatch = useDispatch();

  const [playerCount, setPlayerCount] = useState(3);
  const [playerExperienceLevel, setplayerExperienceLevel] = useState(2700);
  const [encounterAdjustedExperience, setEncounterAdjustedExperience] = useState(300);
  const [encounterExperience, setEncounterExperience] = useState(300);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const encounterData = useSelector((state) => state.encounter);

  const router = useRouter();
  const { data, isLoading, isError } = useEncounter('/api/encounter', fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  const mapSize = 4;
  const { difficulty, monsters, mapInfo, quest, encounterModifier, intro } = data;
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

  const introText = randomNumber(0, intro.length);
  const selectedIntroText = intro[introText];

  const amountOfItems = randomNumber(1, 16);

  while (oppositionStartingPotion === playerStartingPotion) {
    oppositionStartingPotion = randomNumber(0, oppositionStartingPotions.length);
  }

  function loadPage() {
    router.push('/');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);
    dispatch(
      setEncounterInformation({
        playerExperienceLevel,
        playerCount,
        encounterAdjustedExperience,
        encounterExperience,
      }),
    );
    setSubmitIsLoading(false);
  }

  function handlePlayerCountChange(e) {
    setPlayerCount(e.target.value);
  }

  function handlePlayerExperienceLevelChange(e) {
    setplayerExperienceLevel(e.target.value);
  }

  function handleEncounterExperienceChange(e) {
    setEncounterExperience(e.target.value);
  }

  function handleEncounterAdjustedExperienceChange(e) {
    setEncounterAdjustedExperience(e.target.value);
  }

  const sharedMapDimensions = dimensions[mapDimensions];

  const doesAppear = ['Yes', 'No'];
  const isCaravan = randomNumber(0, doesAppear.length);
  const doesApper = doesAppear[isCaravan];

  return (
    <Layout>
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
            Start
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
            Success
          </Tab>
          {doesApper === 'Yes' ? (
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
              Caravan
            </Tab>
          ) : (
            ''
          )}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={{
                base: 'repeat(1, minmax(0, 1fr))',
                md: 'repeat(2, minmax(0, 1fr))',
              }}
            >
              <GridItem>
                <Stack spacing={8}>
                  <Text fontSize="xl">Welcome to Conquest of Heroes</Text>

                  <form onSubmit={handleSubmit}>
                    <label htmlFor="playerCount">How many players?</label>
                    <Input
                      id="playerCount"
                      name="playerCount"
                      text="number"
                      onChange={handlePlayerCountChange}
                      value={playerCount}
                    />
                    <label htmlFor="playerExperienceLevel">Starting Player Experience</label>
                    <Input
                      id="playerExperienceLevel"
                      name="playerExperienceLevel"
                      text="number"
                      onChange={handlePlayerExperienceLevelChange}
                      value={playerExperienceLevel}
                    />
                    <label htmlFor="encounterAdjustedExperience">
                      Encounter Adjust Experience
                    </label>
                    <Input
                      id="encounterAdjustedExperience"
                      name="encounterAdjustedExperience"
                      text="number"
                      onChange={handleEncounterAdjustedExperienceChange}
                      value={encounterAdjustedExperience}
                    />

                    <label htmlFor="encounterExperience">Encounter Experience</label>
                    <Input
                      id="encounterExperience"
                      name="encounterExperience"
                      text="number"
                      onChange={handleEncounterExperienceChange}
                      value={encounterExperience}
                    />
                    <Button type="submit" colorScheme="blue" mt={4} maxW={48}>
                      Start Encounter
                    </Button>
                  </form>
                </Stack>
              </GridItem>
              <GridItem mt={6}>
                <pre style={{ fontSize: '.75rem' }}>
                  {JSON.stringify(encounterData, null, 2)}
                </pre>
              </GridItem>
            </Grid>
          </TabPanel>
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
              intro={intro}
            />
          </TabPanel>
          <TabPanel>
            {/* <Map
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
            /> */}
          </TabPanel>
          <TabPanel>
            <Success
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
          {doesApper === 'Yes' ? (
            <TabPanel>
              <Caravan />
            </TabPanel>
          ) : (
            ''
          )}
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
