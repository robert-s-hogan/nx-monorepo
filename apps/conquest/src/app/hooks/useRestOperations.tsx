import { Campaign } from '../types';
import {
  calculateRestsNeeded,
  getAdventuringDayXpLimit,
  xpThresholdsByCharLvl,
} from '../constants/experienceConstants';
import {
  calculateRestTime,
  calculateRandomTimeBetweenEncounters,
} from '../utils/timeUtils';
import { editCampaign } from '../services/campaignService';

export const useRestOperations = (campaign: Campaign) => {
  const defaultResponse = {
    longRestNeeded: false,
    shortRestCounter: 0,
    shortRestsAvailable: [false, false],
    timeSpentResting: 0,
    timeBetweenEncounters: 0,
    takeShortRest: async (restNumber: 1 | 2) => {},
    takeLongRest: async () => {},
  };

  // Check if the campaign is defined
  if (!campaign) {
    return defaultResponse;
  }

  const {
    id,
    levelDetails,
    playerExperienceStart,
    numberOfPlayers,
    shortRests = [],
  } = campaign;

  const adventuringDayXP = getAdventuringDayXpLimit(
    levelDetails.level,
    numberOfPlayers
  );
  const rests = calculateRestsNeeded(
    levelDetails.xpStart,
    levelDetails.xpEnd,
    playerExperienceStart,
    numberOfPlayers,
    levelDetails.level,
    shortRests
  );

  // Calculate the time spent resting and time between encounters
  const timeSpentResting = calculateRestTime(shortRests, rests.longRestNeeded);
  const timeBetweenEncounters = calculateRandomTimeBetweenEncounters();

  return {
    ...rests,
    timeSpentResting,
    timeBetweenEncounters,
    shortRestsAvailable: shortRests.map((rest) => rest || false),
    takeShortRest: async (restNumber: 1 | 2) => {
      if (!id) {
        console.error("Campaign ID is missing. Can't take a short rest.");
        return;
      }

      const updatedShortRests = [...shortRests];
      updatedShortRests[restNumber - 1] = true; // Assuming the first element is for the first short rest, and the second for the second

      try {
        await editCampaign(id, { shortRests: updatedShortRests });
        console.log(`Short rest ${restNumber} taken for campaign ${id}.`);
      } catch (error) {
        console.error('Failed to take short rest:', error);
      }
    },
    takeLongRest: async () => {
      if (!id) {
        console.error("Campaign ID is missing. Can't take a long rest.");
        return;
      }

      try {
        await editCampaign(id, { longRestNeeded: false });
        console.log(`Long rest taken for campaign ${id}.`);
      } catch (error) {
        console.error('Failed to take long rest:', error);
      }
    },
  };
};
