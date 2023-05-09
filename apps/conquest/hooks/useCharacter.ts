/*
Number of Players:                                             numberOfPlayers                                  number            manual input
Player Experience - Start:                                     playerExperienceStart                            number            manual input
Encounter Adjusted Experience                                  encounterAdjustedExperience                      number            manual input
Encounter Experience Earned                                    encounterExperienceEarned                        number            manual input

Level of Player Characters - Start:                            calculateLevelOfPlayersCharactersStart           function          calculateLevelOfPlayersCharactersStart(playerExperienceStart: number)
Adventuring Day XP Limit:                                      getAdventuringDayXPLimit                         function          getAdventuringDayXPLimit(levelOfPlayersCharactersStart: number)
Adventuring Day XP Limit Difference b/w Encounters:            adventuringDayXPLimitDifference                  number            undefined
XP Thresholds By Character Level - Easy:                       xpThresholdsByCharacterLevelEasy                 number            get
XP Thresholds By Character Level - Medium                      xpThresholdsByCharacterLevelMedium               number
XP Thresholds By Character Level - Hard                        xpThresholdsByCharacterLevelHard                 number
XP Thresholds By Character Level - Deadly                      xpThresholdsByCharacterLevelDeadly               number
Adventuring Day XP - Start                                     adventuringDayXPStart                            number
Encounter Difficulty Options                                   encounterDifficultyOptions                       string

Adventuring Day XP - Finish                                    adventuringDayXPFinish                           number
Player Experience - Earned from Encounter                      playerExperienceEarnedFromEncounter              number
Player Experience - Finish                                     playerExperienceFinish                           number
Level of Player Characters - Finish                            levelOfPlayersCharactersFinish                   number
Percent of Adventuring Day XP Remaining                        percentOfAdventuringDayXPRemaining               number
Short Rest Needed? - First One (68%)                           shortRestNeededFirstOne                          boolean
Short Rest Needed? - Second One (35%)                          shortRestNeededSecondOne                         boolean
Short Rest Counter - Start                                     shortRestCounterStart                            number
Short Rest Counter - Finish                                    shortRestCounterFinish                           number
Long Rest Needed? -                                            longRestNeededFirstOne                           boolean

Time Spent Resting                                             timeSpentResting                                 number
Time Between Encounters                                        timeBetweenEncounters                            number

Map Shape                                                      mapShape                                         string
Map Terrain Type                                               mapTerrainType                                   string
Starting Quadrant of Opposition on Map                         startingQuadrantOfOppositionOnMap                number
Objectives of Encounter                                        objectivesOfEncounter                            string
Time of Day                                                    timeOfDay                                        string
Weather                                                        weather                                          string

Cumulative Gold Earned - Start                                 cumulativeGoldEarnedStart                        number
Gold per Player Earned from Encounter                          goldPerPlayerEarnedFromEncounter                 number
Cumulative Gold Earned - Finish                                cumulativeGoldEarnedFinish                       number
Does Caravan Appear?                                           doesCaravanAppear                                boolean
*/

import { useState } from 'react';
import {
  characterAdvancementTable,
  adventuringDayXP,
  encounterMultipliers,
  xpThresholdsByCharacterLevel,
} from '../data/xpTables';

export function useCharacter() {
  const [playerCount, _playerCount] = useState(4);
  const [playerExperienceStart, _playerExperienceStart] = useState(2700);
  const [encounterAdjustedExperience, _encounterAdjustedExperience] =
    useState(1500);
  const [encounterExperience, _encounterExperience] = useState(1500);

  function getLevelFromXP(xp) {
    const levelObj = characterAdvancementTable.find(
      (level) => level.end === null || xp <= level.end
    );
    return levelObj ? levelObj.level : null;
  }

  function getAdventuringDayXPLimit(playerLevel) {
    const levelObj = adventuringDayXP.find((obj) => obj.level === playerLevel);
    return levelObj ? levelObj.xp : 0;
  }

  function calculateLevelOfPlayersCharactersStart(xp) {
    const xpThreshold = characterAdvancementTable.find(
      (level) => level.start >= xp
    );
    return xpThreshold ? xpThreshold.level : 0;
  }

  function getXPThresholdsByCharacterLevel(difficulty, playerStartLevel) {
    const xpThresholds = xpThresholdsByCharacterLevel.find(
      (obj) => obj.characterLevel === playerStartLevel
    );

    const xpThreshold =
      xpThresholds &&
      (difficulty === 0
        ? xpThresholds.easy
        : difficulty === 1
        ? xpThresholds.medium
        : difficulty === 2
        ? xpThresholds.hard
        : xpThresholds.deadly);

    const encounterExperience = xpThreshold
      ? xpThreshold * playerStartLevel
      : null;
    return encounterExperience;
  }

  function adventuringDayXp(playerLevel) {
    const adjustedXpPerDay = [
      300, 600, 1200, 1700, 3500, 4000, 5000, 6000, 7500, 9000, 10500, 11500,
      13500, 15000, 18000, 20000, 25000, 27000, 30000, 40000,
    ];
    if (playerLevel < 1 || playerLevel > 20) {
      throw new Error('Invalid player level');
    }
    return adjustedXpPerDay[playerLevel - 1];
  }

  return {
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
    calculateLevelOfPlayersCharactersStart,
    getXPThresholdsByCharacterLevel,
    adventuringDayXp,
  };
}
