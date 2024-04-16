import { Campaign } from '../types';
import {
  calculateRestsNeeded,
  getAdventuringDayXpLimit,
  xpThresholdsByCharLvl,
} from '../constants/experienceConstants';
import { editCampaign } from '../services/campaignService';

export const useRestOperations = (campaign: Campaign) => {
  console.log(`Campaign: ${JSON.stringify(campaign)}`);
  const defaultResponse = {
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

    // We need to increment the shortRestCounter in the campaign
    // You may need to adjust this based on how your campaign stores this counter.
    // This example assumes it's a length of the truthy values in the shortRests array.
    const updatedShortRestCounter = shortRests.filter(Boolean).length + 1;

    const updatedShortRests = [...shortRests];
    updatedShortRests[restNumber - 1] = true; // Set the rest as taken

    try {
      await editCampaign(id, {
        shortRests: updatedShortRests,
        // Ensure you persist the updated shortRestCounter back to the campaign data.
      });
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
  console.log(`XP earned today: ${xpEarnedToday}`);
  const remainingXP = adventuringDayXP - xpEarnedToday;
  console.log(`Remaining XP: ${remainingXP}`);
  const percentRemainingXP = (remainingXP / adventuringDayXP) * 100;
  console.log(`Percent remaining XP: ${percentRemainingXP}`);

  // Define your thresholds
  const firstRestThreshold = 68;
  const secondRestThreshold = 35;

  console.log(`Short rest counter: ${rests.shortRestCounter}`);

  // Determine if short rests are available based on the remaining XP percentage
  const shortRestsAvailable = [
    percentRemainingXP < firstRestThreshold && rests.shortRestCounter >= 2,
    percentRemainingXP < secondRestThreshold && rests.shortRestCounter >= 1,
  ];

  console.log(`Short rests available: ${shortRestsAvailable}`);

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
