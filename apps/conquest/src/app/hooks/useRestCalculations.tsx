import {
  calculateRestTime,
  calculateRandomTimeBetweenEncounters,
} from '../utils/timeUtils';
import { Campaign } from '../types';

export const useRestCalculations = (campaign: Campaign | null) => {
  if (!campaign) {
    return {
      timeSpentResting: 0,
      timeBetweenEncounters: 0,
    };
  }

  const {
    levelDetails,
    playerExperienceStart,
    numberOfPlayers,
    shortRests = [],
  } = campaign;

  const timeSpentResting = calculateRestTime(
    shortRests.length > 0,
    campaign.longRestNeeded || false
  );
  const timeBetweenEncounters = calculateRandomTimeBetweenEncounters();

  return {
    timeSpentResting,
    timeBetweenEncounters,
  };
};
