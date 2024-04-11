import { Campaign } from '../types';
import {
  calculateRestsNeeded,
  getAdventuringDayXpLimit,
  xpThresholdsByCharLvl,
} from '../constants/experienceConstants';
import { editCampaign } from '../services/campaignService';

export const useRestOperations = (campaign: Campaign) => {
  const defaultResponse = {
    shortRestNeededFirst: false,
    shortRestNeededSecond: false,
    longRestNeeded: false,
    shortRestCounter: 0,
    shortRestsAvailable: [false, false],
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

  const takeShortRest = async (restNumber: 1 | 2) => {
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
  };

  const takeLongRest = async () => {
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
  };

  // Calculate the XP earned today and the remaining XP for the day
  const xpEarnedToday = playerExperienceStart - levelDetails.xpStart;
  const remainingXP = adventuringDayXP - xpEarnedToday;

  // Calculate the percentage of remaining XP
  const percentRemainingXP = (remainingXP / adventuringDayXP) * 100;

  // Define your thresholds
  const firstRestThreshold = 68;
  const secondRestThreshold = 35;

  // Determine if short rests are available based on the remaining XP percentage
  const shortRestsAvailable = [
    percentRemainingXP < firstRestThreshold && rests.shortRestCounter >= 2,
    percentRemainingXP < secondRestThreshold && rests.shortRestCounter >= 1,
  ];

  return {
    ...rests,
    shortRestsAvailable,
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
