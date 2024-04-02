import React from 'react';

import { Campaign } from '../types';
import {
  getAdventuringDayXp,
  getLevelDetailsFromExperience,
  getXPThresholds,
} from '../constants/experienceConstants';
import { useEncounterCalculations } from '@hooks/useEncounterCalculations';

interface CampaignPreviewProps {
  campaign: Campaign;
  difficulty: string; // Received as a prop from the parent
  xpThresholds: {
    Easy: number;
    Medium: number;
    Hard: number;
    Deadly: number;
  };
}

const CampaignPreview: React.FC<CampaignPreviewProps> = ({
  campaign,
  difficulty, // Use the difficulty passed from the parent
}) => {
  const levelDetails = getLevelDetailsFromExperience(
    campaign.playerExperienceStart
  );
  const { xpThresholds, adventuringDayXp, adventuringDayXPLimit } =
    useEncounterCalculations(campaign);

  // Function to calculate Adventuring Day XP Limit
  const calculateAdventuringDayXPLimit = (numberOfPlayers, level) => {
    return numberOfPlayers * levelDetails.xpPerPlayerDay; // Use the XP per player per day from the level details
  };

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col">
      <div className="p-4">
        <h2>Next Encounter Information</h2>
        <div className="space-y-2">
          <p>Level: {levelDetails.level}</p>
          <p>Adventuring Day XP Limit: {adventuringDayXPLimit}</p>
          <p>XP Thresholds: Easy - {xpThresholds.Easy}</p>
          <p>XP Thresholds: Medium - {xpThresholds.Medium}</p>
          <p>XP Thresholds: Hard - {xpThresholds.Hard}</p>
          <p>XP Thresholds: Deadly - {xpThresholds.Deadly}</p>
          {/* <p>XP Start: {levelDetails.xpStart}</p>
          <p>XP End: {levelDetails.xpEnd}</p>
          <p>XP Needed for Next Level: {levelDetails.xpNeeded}</p> */}
          <p>Adventuring Day XP: {adventuringDayXp}</p>
          <p>Encounter Difficulty: {difficulty}</p>{' '}
          {/* Directly display the difficulty received from the parent */}
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
