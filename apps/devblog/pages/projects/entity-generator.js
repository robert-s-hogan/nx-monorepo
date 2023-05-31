import React, { useState, useEffect } from 'react';
import {
  dndCharacterAdvancement,
  dndAdventuringDayXP,
  dndXpThresholdsByCharacterLevel,
  dndEncounterMultipliers,
} from '@with-nx/constants';
import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Section,
} from '@with-nx/react-ui';
import DevblogLayout from '../../components/layout/DevBlogLayout';

export default function EntityGenerator() {
  //player inputs
  const [playerCount, setPlayerCount] = useState(3);
  const [playerExperience, setPlayerExperience] = useState(2700);
  const [encounterAdjustedExperience, setEncounterAdjustedExperience] =
    useState(300);
  const [encounterExperience, setEncounterExperience] = useState(300);

  const [levelInfo, setLevelInfo] = useState(null);

  const [adventuringDayXPStart, setAdventuringDayXPStart] = useState(0);

  const [longRestNeeded, setLongRestNeeded] = useState(false);
  const [remainingAdventureDayXP, setRemainingAdventureDayXP] = useState(0);
  const [adventuringDayXPFinish, setAdventuringDayXPFinish] = useState(0);
  const [shortRestCounter, setShortRestCounter] = useState(2);
  const [shortRestNeededFirst, setShortRestNeededFirst] = useState(false);
  const [shortRestNeededSecond, setShortRestNeededSecond] = useState(false);

  // Calculation Handler Function
  const handleCalculation = () => {
    // Calculate the new remaining XP by subtracting the encounter adjusted experience from the adventuring day XP start
    const newRemainingXP = adventuringDayXPStart - encounterAdjustedExperience;

    // Update the states
    setRemainingAdventureDayXP(newRemainingXP);
    setAdventuringDayXPFinish(newRemainingXP);
  };

  const calculateAdventuringDayXPFinish = () => {
    if (longRestNeeded) {
      return adventuringDayXPStart - encounterAdjustedExperience;
    } else {
      return remainingAdventureDayXP - encounterAdjustedExperience;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let currentLevel;
    const totalPlayerExperience = parseInt(playerExperience);

    for (let i = 0; i < dndCharacterAdvancement.length; i++) {
      const level = dndCharacterAdvancement[i];
      if (
        totalPlayerExperience >= level.xpStart &&
        totalPlayerExperience <= level.xpEnd
      ) {
        currentLevel = level;
        break;
      }
    }

    // Find the corresponding adventuring day XP for the calculated level
    const adventuringDayXP = dndAdventuringDayXP.find(
      (item) => item.level === currentLevel.level
    );

    // Calculate the adjusted XP
    const adjustedXP = parseInt(playerCount) * adventuringDayXP.xp;

    // Set the adventuringDayXPStart to the adjustedXP
    setAdventuringDayXPStart(adjustedXP);

    // Find the corresponding XP thresholds by character level for the calculated level
    const xpThresholdsByCharacterLevel = dndXpThresholdsByCharacterLevel.find(
      (item) => item.characterLevel === currentLevel.level
    );

    // Choose a random difficulty level
    const difficultyLevels = ['easy', 'medium', 'hard', 'deadly'];
    const randomDifficulty =
      difficultyLevels[Math.floor(Math.random() * difficultyLevels.length)];

    // Get the XP threshold for the random difficulty level
    const xpThreshold = xpThresholdsByCharacterLevel[randomDifficulty];

    // Randomly select a number of monsters between 1 and 25
    const randomMonsterCount = Math.floor(Math.random() * 25) + 1;

    const encounterMultiplierObj = dndEncounterMultipliers.find(
      (item) =>
        randomMonsterCount >= item.monsterCountStart &&
        randomMonsterCount <= item.monsterCountEnd
    );
    const encounterMultiplier = encounterMultiplierObj
      ? encounterMultiplierObj.multiplier
      : 'N/A';

    const encounterExperienceEarned =
      encounterExperience / parseInt(playerCount);
    const playerExperienceFinish =
      parseInt(playerExperience) + encounterExperienceEarned;

    const percentAdventuringDayXPRemaining = (
      (adventuringDayXPFinish / adventuringDayXPStart) *
      100
    ).toFixed(0);

    setShortRestNeededFirst(
      percentAdventuringDayXPRemaining < 68 && shortRestCounter === 2
    );
    setShortRestNeededSecond(
      percentAdventuringDayXPRemaining < 35 && shortRestCounter === 1
    );

    // Update levelInfo to include XP threshold, encounter multiplier, and playerExperienceFinish
    setLevelInfo({
      ...currentLevel,
      xpThreshold: xpThreshold,
      encounterMultiplier: encounterMultiplier ? encounterMultiplier : 'N/A',
      difficulty: randomDifficulty,
      adventuringDayXP: adventuringDayXP.xp,
      adjustedXP: adjustedXP,
      monsterCount: randomMonsterCount,
      encounterExperienceEarned: encounterExperienceEarned,
      playerExperienceFinish: playerExperienceFinish,
    });

    handleCalculation();
  };

  const [
    percentAdventuringDayXPRemaining,
    setPercentAdventuringDayXPRemaining,
  ] = useState(0);

  useEffect(() => {
    if (adventuringDayXPStart > 0) {
      setPercentAdventuringDayXPRemaining(
        ((adventuringDayXPFinish / adventuringDayXPStart) * 100).toFixed(0)
      );
    }
  }, [adventuringDayXPFinish, adventuringDayXPStart]);

  return (
    <DevblogLayout>
      <Grid className="grid-cols-1 md:grid-cols-2 px-4">
        <form onSubmit={handleSubmit} className="my-16">
          <Flex className="flex-col max-w-lg mx-auto space-y-4">
            <Heading level={1} className="text-center">
              Entity Generator
            </Heading>
            <Input
              type="number"
              name="playerCount"
              placeholder="How many players?"
              value={playerCount}
              onChange={(e) => setPlayerCount(e.target.value)}
            />

            <Input
              type="number"
              name="playerExperience"
              placeholder="Player Experience"
              value={playerExperience}
              onChange={(e) => setPlayerExperience(e.target.value)}
            />
            <Input
              type="number"
              name="encounterAdjustedExperience"
              placeholder="Encounter Adjusted Experience"
              value={encounterAdjustedExperience}
              onChange={(e) => setEncounterAdjustedExperience(e.target.value)}
            />
            <Input
              type="number"
              name="encounterExperience"
              placeholder="Encounter Experience"
              value={encounterExperience}
              onChange={(e) => setEncounterExperience(e.target.value)}
            />
            <Button className="btn-primary" type="submit">
              Look up level info
            </Button>
          </Flex>
        </form>
        {levelInfo && (
          <Flex className="flex-col max-w-lg mx-auto space-y-0">
            <h2>Level Info:</h2>
            <p>Number of Players: {playerCount}</p>
            <p>Player Experience Start: {levelInfo.xpStart}</p>
            <p>Level: {levelInfo.level}</p>
            <p>Adventuring Day XP Limit: {levelInfo.adjustedXP}</p>
            <p>
              XP Thresholds By Character Level{' '}
              <span className="font-black">{levelInfo.difficulty}</span>:{' '}
              {levelInfo.xpThreshold}
            </p>
            <p>Encounter Adjusted Experience: {encounterAdjustedExperience}</p>
            <p>Encounter Experience: {encounterExperience}</p>
            <p>Adventuring Day XP - Finish: {adventuringDayXPFinish}</p>
            <p>
              Player Experience Earned from Encounter:{' '}
              {levelInfo.encounterExperienceEarned}
            </p>
            <p>
              Player Experience - Finish: {levelInfo.playerExperienceFinish}
            </p>
            <p>
              Percent of Adventuring Day XP Remaining:{' '}
              {percentAdventuringDayXPRemaining}%
            </p>
            <p>
              Short Rest Needed? - First One (68%):{' '}
              {shortRestNeededFirst ? 'Yes' : 'No'}
            </p>
            <p>
              Short Rest Needed? - Second One (35%):{' '}
              {shortRestNeededSecond ? 'Yes' : 'No'}
            </p>
            <p>XP End: {levelInfo.xpEnd}</p>
            <p>XP Needed: {levelInfo.xpNeeded}</p>
            <p>XP Total: {levelInfo.xpTotal}</p>
            <p>Adventuring Day XP: {levelInfo.adventuringDayXP}</p>
            <p>Encounter Multiplier: {levelInfo.encounterMultiplier}</p>
            <p>Number of Monsters: {levelInfo.monsterCount}</p>{' '}
          </Flex>
        )}
      </Grid>
    </DevblogLayout>
  );
}
