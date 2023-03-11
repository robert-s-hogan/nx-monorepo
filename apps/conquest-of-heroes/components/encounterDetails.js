import { useState } from 'react';
import {
  Text,
  Grid,
  GridItem,
  VStack,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { setEncounter } from '../features/encounterSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPlayerLevel,
  getAdventuringDayXPLimit,
  getEncounterMultipliers,
} from '../lib/xpFunctions';

export default function EncounterDetails({
  monsters,
  amountOfItems,
  objects,
  oppositionStartingPotion,
  playerStartingPotion,
  difficulty,
  terrainType,
  weatherSeverity,
  weatherChange,
  timeOfDay,
  objectives,
  weatherType,
  challengeRating,
  hasWeather,
  dimensions,
  intro,
}) {
  const dispatch = useDispatch();
  const encounterData = useSelector((state) => state.encounter);
  const { value } = encounterData;

  const { arrival, atmosphere, range, details, sense, location } = intro;
  const { senseDescription, senseObject, senseDegree, lighting } = sense;
  const { locationDescription, locationLandscape } = location;

  const { locationObject, locationDuration } = locationLandscape;

  const { senseSmell, senseSound, senseTaste, senseTouch, senseLighting } =
    senseDescription;

  const { forest } = location;
  let locations = forest;

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  const randomArrival = randomNumber(0, arrival.length);
  const selectedRandomArrival = arrival[randomArrival];

  const randomLocationDescription = randomNumber(0, locationDescription.length);
  const selectedRandomLocationDescription =
    locationDescription[randomLocationDescription];

  const randomDetails = randomNumber(0, details.length);
  const selectedRandomDetails = details[randomDetails];

  const randomAtmosphere = randomNumber(0, atmosphere.length);
  const selectedRandomAtmosphere = atmosphere[randomAtmosphere];

  const randomSense = randomNumber(0, sense.length);
  const selectedRandomSense = sense[randomSense];

  const randomSenseObject = randomNumber(0, senseObject.length);
  const selectedRandomSenseObject = senseObject[randomSenseObject];

  const randomSenseDegree = randomNumber(0, senseDegree.length);
  const selectedRandomSenseDegree = senseDegree[randomSenseDegree];

  const randomRange = randomNumber(0, range.length);
  const selectedRandomRange = range[randomRange];

  const randomSenseLighting = randomNumber(0, senseLighting.length);
  const selectedRandomSenseLighting = senseLighting[randomSenseLighting];

  const [playerCount, setPlayerCount] = useState(value.playerCount);
  const [playerStartLevel, setPlayerStartLevel] = useState(
    value.playerExperienceStart
  );

  const randomDifficulty = difficulty;

  // XP calculation
  const playerLevel = getPlayerLevel(value.playerExperienceLevel);
  const adventuringDayXPLimit = getAdventuringDayXPLimit(playerLevel);
  const adjustedAdventuringDayXPLimit = adventuringDayXPLimit * playerCount;
  const playerExperienceLevel = value?.playerExperienceLevel;
  const encounterAdjustedExperience = value.encounterAdjustedExperience; //manual input
  const encounterExperience = value.encounterExperience; // manual input
  const xpThresholdByDifficulty = getEncounterMultipliers(
    difficulty,
    value.playerCount
  );
  const xpThreshold = xpThresholdByDifficulty * value.playerCount;

  const displayDifficultyText = () => {
    if (randomDifficulty === 0) {
      return 'Easy';
    } else if (randomDifficulty === 1) {
      return 'Medium';
    } else if (randomDifficulty === 2) {
      return 'Hard';
    } else if (randomDifficulty === 3) {
      return 'Deadly';
    }
  };

  return (
    <>
      <Grid
        ml={0}
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, minmax(0, 1fr))',
        }}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem border="1px">
          <Accordion allowMultiple px={2}>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize="lg" fontWeight="bold">
                  INTRO
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="2xl" fontWeight="light" fontStyle="italic">
                  &quot;You {selectedRandomArrival} the Forest which{' '}
                  {selectedRandomDetails} that has{' '}
                  {selectedRandomLocationDescription}. &nbsp;
                  {hasWeather === 'Yes'
                    ? `The weather ${selectedRandomAtmosphere} and you ${selectedRandomSenseLighting}.`
                    : ''}
                  &nbsp;Suddenly, you sense a {selectedRandomSenseDegree} smell
                  &nbsp;
                  {selectedRandomSenseObject} that is {selectedRandomRange}.{' '}
                  {hasWeather === 'Yes'
                    ? `You notice the weather change and seems to be ${weatherSeverity} and ${weatherChange}.`
                    : ''}
                  &nbsp;&quot;
                  {/* {hasWeather && `The sky is filled with ${weatherType} and ${weatherChange}.`} */}
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
                <Grid
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
                      {terrainType}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs">Map Dimensions</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      {dimensions}ft x {dimensions}ft
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      Has Weather?
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      {hasWeather === 'No' ? 'No' : 'Yes'}
                    </Text>

                    {hasWeather === 'Yes' && (
                      <Text fontSize="xs" fontWeight="bold">
                        {weatherSeverity}
                        &nbsp;
                        {weatherType}, &nbsp;(
                        {weatherChange})
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
                      {timeOfDay}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      Quest Objective
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" fontWeight="bold">
                      {objectives}
                    </Text>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <Text fontWeight="bold" ml={4} py={2}>
                OBJECTIVE: {objectives}
              </Text>
            </AccordionItem>
          </Accordion>
        </GridItem>
        <GridItem px={2}>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize="lg" fontWeight="bold">
                  XP
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <pre style={{ fontSize: '0.8rem' }}>
                  <Grid gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={1}>
                    <GridItem>Number of Players:</GridItem>
                    <GridItem>{playerCount}</GridItem>
                    <GridItem>Player Experience - Start</GridItem>
                    <GridItem>{playerExperienceLevel}</GridItem>
                    <GridItem>Level of Player Characters - Start:</GridItem>
                    <GridItem>{playerLevel}</GridItem>
                    <GridItem>Adventuring Day XP Limit:</GridItem>
                    <GridItem>{adjustedAdventuringDayXPLimit}</GridItem>
                    <GridItem>Adventuring Day XP - Start:</GridItem>
                    <GridItem>
                      {adjustedAdventuringDayXPLimit} (same as Adventuring Day
                      XP Limit)
                    </GridItem>
                    <GridItem>Encounter Difficulty Options</GridItem>
                    <GridItem>{displayDifficultyText()}</GridItem>
                    <GridItem>Encounter Adjusted Experience:</GridItem>
                    <GridItem>{encounterAdjustedExperience}</GridItem>
                    <GridItem>Encounter Experience:</GridItem>
                    <GridItem>{encounterExperience}</GridItem>
                    {/* <GridItem>Adventuring Day XP Limit:</GridItem>
                    <GridItem>{adventuringDayXPLimit}</GridItem>

                    <GridItem>XP Threshold: {xpThreshold}</GridItem>
                    <GridItem>
                      XP Threshold by Difficulty: {xpThresholdByDifficulty}
                    </GridItem> */}
                  </Grid>
                </pre>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
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
    </>
  );
}
