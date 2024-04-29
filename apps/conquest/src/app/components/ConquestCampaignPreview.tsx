import React from 'react';
import { Heading } from '@with-nx/generic-ui';
import { Campaign, Difficulty } from '../types';
import { getLevelDetailsFromExperience } from '../constants/experienceConstants';
import { useEncounterCalculations } from '../hooks/useEncounterCalculations';

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

const ConquestCampaignPreview: React.FC<CampaignPreviewProps> = ({
  campaign,
  difficulty,
}) => {
  const levelDetails = getLevelDetailsFromExperience(
    campaign.playerExperienceStart
  );

  const { xpThresholds, adventuringDayXp, adventuringDayXPLimit } =
    useEncounterCalculations(campaign, difficulty);

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col">
      <div className="p-4">
        <Heading level={2} text="Next Encounter Information" />
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

export default ConquestCampaignPreview;
