import { Campaign } from '../types';
import { calculateRestsNeeded } from '../constants/experienceConstants';
import { updateCampaign } from '../services/firebaseService';
import { useRestCalculations } from './useRestCalculations'; // Import the new hook

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

  const { id, shortRests = [] } = campaign;

  const { timeSpentResting, timeBetweenEncounters } =
    useRestCalculations(campaign);

  const rests = calculateRestsNeeded(
    campaign.levelDetails.xpStart,
    campaign.levelDetails.xpEnd,
    campaign.playerExperienceStart,
    campaign.numberOfPlayers,
    campaign.levelDetails.level,
    shortRests
  );

  return {
    // ...rests,
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
        await updateCampaign(id, { shortRests: updatedShortRests });
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
        await updateCampaign(id, { longRestNeeded: false });
        console.log(`Long rest taken for campaign ${id}.`);
      } catch (error) {
        console.error('Failed to take long rest:', error);
      }
    },
  };
};
