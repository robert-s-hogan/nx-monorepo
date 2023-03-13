import { useState, useEffect } from 'react';
import {
  Text,
  Button,
  Grid,
  GridItem,
  Table,
  Tabs,
  Stack,
  Input,
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
import { useSelector, useDispatch } from 'react-redux';
import {
  calculateLevelOfPlayersCharactersStart,
  getAdventuringDayXPLimit,
  getEncounterMultipliers,
  adventuringDayXp,
} from '../lib/xpTables';

export default function Results({
  monsters,
  amountOfItems,
  objects,
  oppositionStartingPotion,
  playerStartingPotion,
  dimensions,
  difficulty,
  terrainType,
  weatherSeverity,
  weatherChange,
  timeOfDay,
  objectives,
  weatherType,
  challengeRating,
  hasWeather,
}) {
  const dispatch = useDispatch();
  const encounterData = useSelector((state) => state.encounter);
  const { value } = encounterData;

  const [playerCount, setPlayerCount] = useState();
  const [playerExperienceLevel, setPlayerExperienceLevel] = useState();
  const [encounterAdjustedExperience, setEncounterAdjustedExperience] =
    useState();
  const [encounterExperience, setEncounterExperience] = useState();
  const [playerLevel, setPlayerLevel] = useState();

  const calculatePlayerLevel = calculateLevelOfPlayersCharactersStart(
    value.playerExperienceLevel
  );

  const calculateXPThresholdByDifficulty =
    adventuringDayXp(calculatePlayerLevel);
  const xpThreshold = calculateXPThresholdByDifficulty * playerCount;
  const calculateXPThreshold = calculateXPThresholdByDifficulty * playerCount;

  const randomDifficulty = difficulty;

  // XP calculation
  const adventuringDayXPLimit = getAdventuringDayXPLimit(calculatePlayerLevel);
  const adjustedAdventuringDayXPLimit = adventuringDayXPLimit * playerCount;

  const longRest = ['yes', 'no'];
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
  const longRestNeeded = longRest[randomNumber(0, 2)];

  let adventuringDayXPFinish = xpThreshold - encounterAdjustedExperience;

  const percentOfAdventuringDayXPOne = (
    adventuringDayXPFinish / xpThreshold
  ).toFixed(2);
  const percentOfAdventuringDayXPTwo = (
    adventuringDayXPFinish / xpThreshold
  ).toFixed(2);
  const advenuringDayXPStart =
    (xpThreshold + adventuringDayXPFinish) * percentOfAdventuringDayXPOne;

  useEffect(() => {
    setPlayerCount(value.playerCount);
    setPlayerExperienceLevel(calculatePlayerLevel);
    setEncounterAdjustedExperience(value.encounterAdjustedExperience);
    setEncounterExperience(value.encounterExperience);
  }, [
    value.playerCount,
    calculatePlayerLevel,
    value.encounterAdjustedExperience,
    value.encounterExperience,
  ]);

  return (
    <>
      {value.playerCount === 0 ? (
        <Text>Set encounter values on Start tab</Text>
      ) : (
        <>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Success Details
          </Text>
          <Grid
            ml={0}
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(5, minmax(0, 1fr))',
            }}
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
            mt={4}
          >
            <GridItem pl={0} colSpan={{ base: 1, md: 3 }}>
              <Stack spacing={2}>
                <Text fontSize="lg" fontWeight="bold">
                  XP Start details
                </Text>
                <Grid
                  gridTemplateColumns={{
                    base: 'repeat(2, minmax(0, 1fr))',
                    md: 'repeat(3, minmax(0,1f))',
                  }}
                  gap={2}
                >
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      Category
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      Value
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold" mt={2}>
                      Adventuring Day XP Limit
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xl" fontWeight="bold">
                      {xpThreshold}
                    </Text>
                    <Text fontSize="xs" fontWeight="bold" fontStyle="italic">
                      {calculateXPThresholdByDifficulty} threshold *{' '}
                      {playerCount}&nbsp; players
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold" mt={2}>
                      Long Rest
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xl" fontWeight="bold">
                      {longRestNeeded}
                    </Text>
                    <Text fontSize="xs" fontWeight="bold" fontStyle="italic">
                      randomed from yes/no
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold" mt={1.5}>
                      Adventuring Day XP - Start
                    </Text>
                  </GridItem>
                  <GridItem>
                    <>
                      {value.playerExperienceLevel < 0 ? (
                        <>
                          <Text fontSize="xl" fontWeight="bold">
                            {xpThreshold}
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            fontStyle="italic"
                          >
                            pulled from adventuring day xp limit
                          </Text>
                        </>
                      ) : (
                        <>
                          {longRestNeeded === 'yes' ? (
                            <>
                              <Text fontSize="xl" size="xs" fontWeight="bold">
                                {xpThreshold}
                              </Text>
                              <Text
                                fontSize="xs"
                                fontWeight="bold"
                                fontStyle="italic"
                              >
                                ADxpLimit and long rest is true
                              </Text>
                            </>
                          ) : (
                            <>
                              <Text fontSize="xl" size="xs" fontWeight="bold">
                                {advenuringDayXPStart}
                              </Text>
                              <Text
                                fontSize="xs"
                                fontWeight="bold"
                                fontStyle="italic"
                              >
                                {xpThreshold} + {adventuringDayXPFinish} *{' '}
                                {percentOfAdventuringDayXPOne}
                              </Text>
                            </>
                          )}
                        </>
                      )}
                    </>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      Adventuring Day XP - Finish
                    </Text>
                  </GridItem>
                  <Text fontSize="xl" size="xs" fontWeight="bold">
                    {adventuringDayXPFinish}
                    <Text fontSize="xs" fontWeight="bold" fontStyle="italic">
                      {xpThreshold} start -{''}
                      {encounterAdjustedExperience} adjusted
                    </Text>
                  </Text>

                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      % of Adventuring Day XP Remaining
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontWeight="bold">
                      {value.playerExperienceLevel > 0 ? (
                        <>
                          <Text fontSize="xl" fontWeight="bold">
                            {percentOfAdventuringDayXPTwo}
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            fontStyle="italic"
                          >
                            {adventuringDayXPFinish} / {xpThreshold} (multiple
                            encounters)
                          </Text>
                        </>
                      ) : (
                        <>
                          <Text fontSize="xl" fontWeight="bold">
                            {percentOfAdventuringDayXPOne}
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            fontStyle="italic"
                          >
                            {adventuringDayXPFinish} / {xpThreshold} (first
                            encounter)
                          </Text>
                        </>
                      )}
                    </Text>
                  </GridItem>
                </Grid>
              </Stack>
            </GridItem>
            <GridItem mt={6}>
              <pre>{JSON.stringify(value, null, 2)}</pre>
            </GridItem>
          </Grid>
        </>
      )}
    </>
  );
}
