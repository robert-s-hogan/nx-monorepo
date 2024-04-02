import React from 'react';

import { Campaign } from '@conquestTypes/Campaign';
import { Difficulty } from '@conquestTypes/Encounter';

import { getLevelDetailsFromExperience } from '@conquestConstants/experienceConstants';
import { useEncounterCalculations } from '@conquestHooks/useEncounterCalculations';

interface CampaignPreviewProps {
  campaign: Campaign;
  difficulty: Difficulty;
  xpThresholds: {
    Easy: number;
    Medium: number;
    Hard: number;
    Deadly: number;
  };

  xpPerPlayerDay: number;
}

const CampaignPreview: React.FC<CampaignPreviewProps> = ({
  campaign,
  difficulty,
}) => {
  // Fetch level details based on player's starting experience
  const levelDetails = getLevelDetailsFromExperience(
    campaign.playerExperienceStart
  );

  // Use custom hook to get encounter calculations based on campaign and difficulty
  const { xpThresholds, adventuringDayXp, adventuringDayXPLimit } =
    useEncounterCalculations(campaign, difficulty);

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col">
      <div className="p-4">
        <h2>Next Encounter Information</h2>
        <div className="space-y-2">
          <p>Level: {levelDetails.level}</p>
          <p>Adventuring Day XP Limit: {adventuringDayXPLimit}</p>
          <p>XP Thresholds:</p>
          <ul>
            <li>Easy: {xpThresholds.Easy}</li>
            <li>Medium: {xpThresholds.Medium}</li>
            <li>Hard: {xpThresholds.Hard}</li>
            <li>Deadly: {xpThresholds.Deadly}</li>
          </ul>
          <p>Adventuring Day XP: {adventuringDayXp}</p>
          <p>Encounter Difficulty: {difficulty}</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
