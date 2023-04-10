import { useState } from 'react';

import { useEncounter } from '../hooks/useEncounter';
import Loading from '../components/Loading';
import Map from '../components/Map';
import LoginForm from '../components/LoginForm';
import { useCharacter } from '../hooks/useCharacter';
import { useFetchItems5e } from '../hooks/useFetchItems5e';
import ConquestLayout from '../components/layout/ConquestLayout';
import { randomNumber } from '../lib/randomNumber';
import GenerateMadLib from '../components/GenerateMadLib';
import RandomCustomItems from '../components/RandomCustomItems';

export default function Home() {
  const {
    playerCount,
    _playerCount,
    playerExperienceStart,
    _playerExperienceStart,
    encounterAdjustedExperience,
    _encounterAdjustedExperience,
    encounterExperience,
    _encounterExperience,
    getLevelFromXP,
    getAdventuringDayXPLimit,
    getXPThresholdsByCharacterLevel,
  } = useCharacter();
  // const { combinedObjects, loading, error } = useFetchItems5e();

  const [isSubmitting, _isSubmitting] = useState(false);
  const [totalShortRestsAllows] = useState(2);
  const [homeLoading, setHomeLoading] = useState(true);

  // const {
  //   isLoading: encounterLoading,
  //   error: encounterError,
  //   difficulty,
  //   monsters,
  //   mapInfo,
  //   quest,
  // } = useEncounter();

  // useEffect(() => {
  //   if (!loading && !encounterLoading) {
  //     setHomeLoading(false);
  //   }
  // }, [loading, encounterLoading]);

  // if (encounterLoading || loading || homeLoading) return <Loading />;
  // if (encounterError) return <Text>Error</Text>;

  // const {
  //   hasWeather,
  //   weatherSeverity,
  //   weatherType,
  //   weatherChange,
  //   terrainType,
  //   dimensions,
  //   timeOfDay,
  //   playerStartingPotions,
  //   oppositionStartingPotions,
  // } = mapInfo;

  // const { challengeRating } = monsters;
  // const { objectives } = quest;

  // const mapDimensions = randomNumber(0, dimensions.length);
  // const mapTerrainType = randomNumber(0, terrainType.length);
  // const selectedTerrainType = terrainType[mapTerrainType];

  // const mapTimeOfDay = randomNumber(0, timeOfDay.length);
  // const selectedTimeOfDay = timeOfDay[mapTimeOfDay];

  // const mapHasWeather = randomNumber(0, hasWeather.length);
  // const selectedHasWeather = hasWeather[mapHasWeather];

  // const mapWeatherType = randomNumber(0, weatherType.length);
  // const selectedWeatherType = weatherType[mapWeatherType];

  // const mapWeatherSeverity = randomNumber(0, weatherSeverity.length);
  // const selectedWeatherSeverity = weatherSeverity[mapWeatherSeverity];

  // const mapWeatherChange = randomNumber(0, weatherChange.length);
  // const selectedWeatherChange = weatherChange[mapWeatherChange];

  // const playerStartingPotion = randomNumber(0, playerStartingPotions.length);
  // let oppositionStartingPotion = randomNumber(
  //   0,
  //   oppositionStartingPotions.length
  // );

  // const questObjective = randomNumber(0, objectives.length);
  // const selectedObjective = objectives[questObjective];

  // const amountOfItems = randomNumber(1, 16);

  // while (oppositionStartingPotion === playerStartingPotion) {
  //   oppositionStartingPotion = randomNumber(
  //     0,
  //     oppositionStartingPotions.length
  //   );
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   _isSubmitting(false);
  // }

  // const sharedMapDimensions = dimensions[mapDimensions];

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // const calculateStartedPlayerExperienceLevel = getLevelFromXP(
  //   playerExperienceStart
  // );

  // const calculateFinishEncounterExperienceLevel = getLevelFromXP(
  //   playerExperienceStart + encounterAdjustedExperience / playerCount
  // );

  // const adventuringDayXpLimit = getAdventuringDayXPLimit(
  //   calculateStartedPlayerExperienceLevel
  // );

  // const calculatedAdventuringDayXp = adventuringDayXpLimit * playerCount;
  // const selectedDifficulty = difficulty[randomNumber(0, difficulty.length)];

  // const convertDiffulctyToText = (difficulty) => {
  //   switch (difficulty) {
  //     case 0:
  //       return 'Easy';
  //     case 1:
  //       return 'Medium';
  //     case 2:
  //       return 'Hard';
  //     default:
  //       return 'Deadly';
  //   }
  // };

  // const xpThresholdsByCharacterLevelEasy = getXPThresholdsByCharacterLevel(
  //   0,
  //   calculateStartedPlayerExperienceLevel
  // );

  // const xpThresholdsByCharacterLevelMedium = getXPThresholdsByCharacterLevel(
  //   1,
  //   calculateStartedPlayerExperienceLevel
  // );

  // const xpThresholdsByCharacterLevelHard = getXPThresholdsByCharacterLevel(
  //   2,
  //   calculateStartedPlayerExperienceLevel
  // );

  // const xpThresholdsByCharacterLevelDeadly = getXPThresholdsByCharacterLevel(
  //   3,
  //   calculateStartedPlayerExperienceLevel
  // );

  // const adventuringDayXpFinish =
  //   calculatedAdventuringDayXp - encounterExperience;

  // const percentOfAdventuringDayXpRemaining = Math.round(
  //   (adventuringDayXpFinish / calculatedAdventuringDayXp) * 100
  // );

  // const longRestNeeded =
  //   adventuringDayXpFinish < xpThresholdsByCharacterLevelEasy ? true : false;

  // const playerExperienceFinish =
  //   playerExperienceStart + encounterExperience / playerCount;

  return (
    <ConquestLayout>
      <section className="h-screen w-full">
        <div className="flex items-center justify-center h-1/2">
          <h1 className="text-center">Welcome to Conquest of Heroes</h1>
        </div>
      </section>
      {/*      <Stack spacing={8}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text fontSize="xl">Welcome to Conquest of Heroes</Text>

                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <form onSubmit={handleSubmit}>
                <Grid
                  templateColumns={{
                    base: 'repeat(2, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  }}
                  gap={6}
                >
                  <GridItem>
                    <label htmlFor="playerCount">How many players?</label>
                    <Input
                      id="playerCount"
                      name="playerCount"
                      type="number"
                      onChange={(e) => {
                        const parsedValue = parseInt(e.target.value);
                        if (!isNaN(parsedValue)) {
                          _playerCount(parsedValue);
                        }
                      }}
                      value={playerCount}
                    />
                  </GridItem>
                  <GridItem>
                    <label htmlFor="playerExperienceLevel">
                      Starting Player Experience
                    </label>
                    <Input
                      id="playerExperienceLevel"
                      name="playerExperienceLevel"
                      type="number"
                      onChange={(e) => {
                        const parsedValue = parseInt(e.target.value);
                        if (!isNaN(parsedValue)) {
                          _playerExperienceStart(parsedValue);
                        }
                      }}
                      value={playerExperienceStart}
                    />
                  </GridItem>
                  <GridItem>
                    <label htmlFor="encounterAdjustedExperience">
                      Encounter Adjust Experience
                    </label>
                    <Input
                      id="encounterAdjustedExperience"
                      name="encounterAdjustedExperience"
                      type="number"
                      onChange={(e) => {
                        const parsedValue = parseInt(e.target.value);
                        if (!isNaN(parsedValue)) {
                          _encounterAdjustedExperience(parsedValue);
                        }
                      }}
                      value={encounterAdjustedExperience}
                    />
                  </GridItem>
                  <GridItem>
                    <label htmlFor="encounterExperience">
                      Encounter Experience
                    </label>
                    <Input
                      id="encounterExperience"
                      name="encounterExperience"
                      type="number"
                      onChange={(e) => {
                        const parsedValue = parseInt(e.target.value);
                        if (!isNaN(parsedValue)) {
                          _encounterExperience(parsedValue);
                        }
                      }}
                      value={encounterExperience}
                    />
                  </GridItem>
                </Grid>
                <Button type="submit" colorScheme="blue" mt={4} maxW={48}>
                  Start Encounter
                </Button>
              </form>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
      {!isSubmitting ? (
        <Box>
          <Grid
            ml={0}
            gridTemplateColumns={{
              base: '1fr',
            }}
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem>
              <Accordion allowMultiple>
                <AccordionItem borderTop="none">
                  <AccordionButton>
                    <Text fontSize="lg" fontWeight="bold">
                      INTRO
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text fontSize="lg" fontWeight="light" fontStyle="italic">
                      <GenerateMadLib />
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Text fontSize="lg" fontWeight="bold">
                      MAP DETAILS
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    {/* <Grid
                      gridTemplateColumns={{
                        base: 'repeat(2, minmax(0, 1fr))',
                        md: 'repeat(3, minmax(0,1f))',
                      }}
                      gap={2}
                    >
                      <GridItem>
                        <Text fontSize="xs">Category</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          Value
                        </Text>
                      </GridItem>

                      <GridItem>
                        <Text fontSize="xs">Map Terrain Type</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          {selectedTerrainType}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs">Map Dimensions</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          {sharedMapDimensions}ft x {sharedMapDimensions}ft
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          Has Weather?
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          {selectedHasWeather === 'No' ? 'No' : 'Yes'}
                        </Text>

                        {selectedHasWeather === 'Yes' && (
                          <Text fontSize="xs" fontWeight="bold">
                            {selectedWeatherSeverity}
                            &nbsp;
                            {selectedWeatherType}, &nbsp;(
                            {selectedWeatherChange})
                          </Text>
                        )}
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          Time of Day
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="xs" fontWeight="bold">
                          {selectedTimeOfDay}
                        </Text>
                      </GridItem>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <Text fontWeight="bold" ml={4} py={2}>
                    OBJECTIVE:
                    {selectedObjective}
                  </Text>
                </AccordionItem>
              </Accordion>
            </GridItem>
            <GridItem>
              <Accordion allowMultiple>
                <AccordionItem borderTop="none">
                  <AccordionButton>
                    <Text fontSize="lg" fontWeight="bold">
                      XP
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Heading>Encounter Information</Heading>
                    <Grid
                      templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
                      gap={6}
                      pt={4}
                    >
                      <GridItem border="1px" p={4}>
                        <p>Manual Inputs:</p>
                        <br />
                        <p>playerCount: {playerCount}</p>
                        <p>playerExperienceStart: {playerExperienceStart}</p>
                        <p>
                          encounterAdjustedExperience:{' '}
                          {encounterAdjustedExperience}
                        </p>
                        <p>encounterExperience: {encounterExperience}</p>
                      </GridItem>
                      <GridItem border="1px" p={4}>
                        <h2>Calculated Values</h2>
                        <br />
                        <p>
                          levelOfPlayersCharactersStart:{' '}
                          {calculateStartedPlayerExperienceLevel}
                        </p>
                        <p>
                          adventuringDayXpLimit: {calculatedAdventuringDayXp}
                        </p>
                        <p>
                          XP Thresholds By Character Level - Easy:{' '}
                          {xpThresholdsByCharacterLevelEasy}
                        </p>
                        <p>
                          XP Thresholds By Character Level - Medium:{' '}
                          {xpThresholdsByCharacterLevelMedium}
                        </p>
                        <p>
                          XP Thresholds By Character Level - Hard:{' '}
                          {xpThresholdsByCharacterLevelHard}
                        </p>
                        <p>
                          XP Thresholds By Character Level - Deadly:{' '}
                          {xpThresholdsByCharacterLevelDeadly}
                        </p>
                        <p>
                          adventuringDayXpStart: {calculatedAdventuringDayXp}
                        </p>
                        <p>
                          Encounter Difficulty Options:{' '}
                          {convertDiffulctyToText(selectedDifficulty)}
                        </p>
                        <p>
                          Adventuring Day XP - Finish: {adventuringDayXpFinish}
                        </p>
                        <p>
                          Player Experience - Earned From Encounter: {''}
                          {encounterExperience / playerCount}
                        </p>
                        <p>
                          Player Experience - Finish:
                          {playerExperienceFinish}
                        </p>
                        <p>
                          Level of Players Characters - Finish:
                          {calculateFinishEncounterExperienceLevel}
                        </p>
                        <p>
                          % of Adventuring Day XP Remaining:
                          {percentOfAdventuringDayXpRemaining}%
                        </p>
                        <p>
                          Short Rest Needed? First One 68%:{' '}
                          {percentOfAdventuringDayXpRemaining < 68
                            ? 'Yes'
                            : 'No'}
                        </p>
                        <p>
                          Short Rest Needed? Second One 34%:{' '}
                          {percentOfAdventuringDayXpRemaining < 34
                            ? 'Yes'
                            : 'No'}
                        </p>
                        <p>
                          Short Rest Counter - Start: {totalShortRestsAllows}
                        </p>
                        <p>
                          Short Rest Counter - Finish: {totalShortRestsAllows}
                        </p>
                        <p>
                          Long Rest Needed?: {longRestNeeded ? 'Yes' : 'No'}
                        </p>
                      </GridItem>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowMultiple>
                <AccordionItem borderTop="none">
                  <AccordionButton>
                    <Text fontSize="lg" fontWeight="bold">
                      Notes and Comments
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} height="100%">
                    <Textarea placeholder="" style={{ height: '100%' }} />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
          {/* <Map
            monsters={monsters}
            amountOfItems={amountOfItems}
            objects={combinedObjects}
            oppositionStartingPotion={oppositionStartingPotion}
            playerStartingPotion={playerStartingPotion}
            dimensions={sharedMapDimensions}
            difficulty={selectedDifficulty}
            terrainType={selectedTerrainType}
            weatherSeverity={selectedWeatherSeverity}
            weatherChange={selectedWeatherChange}
            timeOfDay={selectedTimeOfDay}
            objectives={selectedObjective}
            weatherType={selectedWeatherType}
            challengeRating={challengeRating}
            hasWeather={selectedHasWeather}
          />
        </Box>
      ) : null}
      <Accordion allowMultiple>
        <AccordionItem borderTop="none">
          <AccordionButton>
            <Text fontSize="lg" fontWeight="bold">
              Custom Items
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <RandomCustomItems />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

 <RandomItems /> */}
    </ConquestLayout>
  );
}
