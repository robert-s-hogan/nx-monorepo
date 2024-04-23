import { useState, useEffect } from 'react';
import {
  getAdventuringDayXpLimit,
  getLevelDetailsFromExperience,
  getXPThresholds,
} from '../constants/experienceConstants';
import { Campaign, Difficulty } from '../types';

interface LevelDetails {
  level: number;
  xpStart: number;
  xpEnd: number;
  xpNeeded: number;
  xpTotal: number;
}

interface XpThresholds {
  Easy: number;
  Medium: number;
  Hard: number;
  Deadly: number;
}

export function useEncounterCalculations(
  campaign: Campaign,
  difficulty: Difficulty
) {
  const [levelDetails, setLevelDetails] = useState<LevelDetails | null>(null);
  const [xpThresholds, setXpThresholds] = useState<XpThresholds>({
    Easy: 0,
    Medium: 0,
    Hard: 0,
    Deadly: 0,
  });
  const [adventuringDayXPLimit, setAdventuringDayXPLimit] = useState<number>(0);
  const [adventuringDayXp, setAdventuringDayXp] = useState<number>(0);

  useEffect(() => {
    if (campaign) {
      const details = getLevelDetailsFromExperience(
        campaign.playerExperienceStart
      );
      if (details) {
        setLevelDetails(details);
        setXpThresholds({
          Easy: getXPThresholds(
            details.level,
            campaign.numberOfPlayers,
            'Easy'
          ),
          Medium: getXPThresholds(
            details.level,
            campaign.numberOfPlayers,
            'Medium'
          ),
          Hard: getXPThresholds(
            details.level,
            campaign.numberOfPlayers,
            'Hard'
          ),
          Deadly: getXPThresholds(
            details.level,
            campaign.numberOfPlayers,
            'Deadly'
          ),
        });

        const adventuringDayXP = getAdventuringDayXpLimit(
          details.level,
          campaign.numberOfPlayers
        );
        setAdventuringDayXPLimit(adventuringDayXP);
        setAdventuringDayXp(adventuringDayXP * campaign.numberOfPlayers); // Corrected to reflect total XP for the day based on number of players
      }
    }
  }, [campaign, difficulty]); // Effect dependency on difficulty to trigger updates when difficulty changes

  return {
    levelDetails,
    xpThresholds,
    adventuringDayXp,
    adventuringDayXPLimit,
  };
}
