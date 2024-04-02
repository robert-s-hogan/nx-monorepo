import { useState, useEffect } from 'react';
import {
  getAdventuringDayXp,
  getLevelDetailsFromExperience,
  getXPThresholds,
} from '../constants/experienceConstants';

export function useEncounterCalculations(campaign, difficulty) {
  const [levelDetails, setLevelDetails] = useState(null);
  const [xpThresholds, setXpThresholds] = useState({
    Easy: 0,
    Medium: 0,
    Hard: 0,
    Deadly: 0,
  });
  const [adventuringDayXPLimit, setAdventuringDayXPLimit] = useState(0);
  const [adventuringDayXp, setAdventuringDayXp] = useState(0);

  useEffect(() => {
    if (campaign) {
      const details = getLevelDetailsFromExperience(
        campaign.playerExperienceStart
      );
      setLevelDetails(details);
      setXpThresholds({
        Easy: getXPThresholds(details.level, campaign.numberOfPlayers, 'Easy'),
        Medium: getXPThresholds(
          details.level,
          campaign.numberOfPlayers,
          'Medium'
        ),
        Hard: getXPThresholds(details.level, campaign.numberOfPlayers, 'Hard'),
        Deadly: getXPThresholds(
          details.level,
          campaign.numberOfPlayers,
          'Deadly'
        ),
      });

      // Use getAdventuringDayXp to set the Adventuring Day XP Limit based on the level
      const adventuringDayXP = getAdventuringDayXp(details.level);
      setAdventuringDayXp(adventuringDayXp);
      setAdventuringDayXPLimit(adventuringDayXP * campaign.numberOfPlayers);
    }
  }, [campaign, difficulty]);

  return {
    levelDetails,
    xpThresholds,
    adventuringDayXp,
    adventuringDayXPLimit,
  };
}
