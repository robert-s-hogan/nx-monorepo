import { useState, useEffect } from 'react';
import {
  getAdventuringDayXp,
  getLevelDetailsFromExperience,
  getXPThresholds,
} from '../constants/experienceConstants';
import { Campaign } from '@conquestTypes/Campaign';
import { Difficulty } from '@conquestTypes/Encounter';

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

        // Use getAdventuringDayXp to set the Adventuring Day XP Limit based on the level
        const adventuringDayXP = getAdventuringDayXp(details.level);
        setAdventuringDayXp(adventuringDayXP);
        setAdventuringDayXPLimit(adventuringDayXP * campaign.numberOfPlayers);
      }
    }
  }, [campaign, difficulty]);

  return {
    levelDetails,
    xpThresholds,
    adventuringDayXp,
    adventuringDayXPLimit,
  };
}
