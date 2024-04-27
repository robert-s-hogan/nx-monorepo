import React from 'react';
import { IonIcon } from '@ionic/react';
import { create, trash } from 'ionicons/icons';

import { Campaign, CampaignListProps } from '../types';
import {
  calculateRestsNeeded,
  getAdventuringDayXpLimit,
  xpThresholdsByCharLvl,
} from '../constants/experienceConstants';
import ProgressBar from './ConquestProgressBar';
import RestCalculationDisplay from './ConquestRestCalculationDisplay';
import { useRestOperations } from '../hooks/useRestOperations';
import { useCampaigns } from '../hooks/useCampaigns';

const ConquestCampaignList: React.FC<CampaignListProps> = ({
  campaigns,
  onEdit,
  onDelete,
  hideEdit,
  selectedCampaignSlug,
}) => {
  const { selectedCampaign } = useCampaigns();

  const { takeShortRest, takeLongRest, shortRestsAvailable } =
    useRestOperations(selectedCampaign as Campaign);

  const handleTakeShortRest = (restNumber: 1 | 2) => {
    takeShortRest(restNumber);
  };

  const handleTakeLongRest = () => {
    takeLongRest();
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 w-full">
        {campaigns.length === 0 && <p>No campaigns found</p>}
        {campaigns
          .filter(
            (campaign) =>
              !selectedCampaignSlug || campaign.slug === selectedCampaignSlug
          )
          .map((campaign) => {
            const levelDetails = campaign.levelDetails;

            const adventuringDayXP = getAdventuringDayXpLimit(
              levelDetails?.level || 1,
              campaign.numberOfPlayers
            );

            const xpThresholdEasy =
              xpThresholdsByCharLvl[levelDetails?.level || 1]?.Easy *
              campaign.numberOfPlayers;

            const shortRestsTaken = campaign.shortRests || [false, false];

            const rests = calculateRestsNeeded(
              levelDetails?.xpStart || 0,
              levelDetails?.xpEnd || 0,
              campaign?.playerExperienceStart || 100,
              campaign?.numberOfPlayers,
              levelDetails?.level || 1,
              shortRestsTaken
            );

            return (
              <div
                key={campaign.id}
                className="border border-black rounded p-4"
              >
                <div className="p-4">
                  <div className="flex justify-end pr-2 pt-2">
                    <button onClick={() => onEdit && onEdit(campaign)}>
                      <IonIcon icon={create} size="large" />
                    </button>

                    <button onClick={() => onDelete(campaign.id as string)}>
                      <IonIcon icon={trash} size="large" />
                    </button>
                  </div>
                  <div className="pb-3">
                    <div className="flex space-x-2 items-center">
                      <h2 className="">{campaign.name}</h2>{' '}
                      <span className="text-gray-400 text-sm">
                        /{campaign.slug}
                      </span>
                    </div>
                    <p>{campaign.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div />
                    <div className="p-3 col-span-2 space-y-2 text-lg">
                      <h2 className="py-1 bg-white">XP Calculations</h2>
                      <p>XP Progress Bar</p>
                      <ProgressBar
                        xpStart={campaign.levelDetails?.xpStart}
                        xpEnd={campaign.levelDetails?.xpEnd}
                        playerExperience={campaign.playerExperienceStart}
                        onTakeFirstShortRest={() => handleTakeShortRest(1)}
                        onTakeSecondShortRest={() => handleTakeShortRest(2)}
                        isShortRestAvailable={shortRestsAvailable}
                      />
                      <div className="w-full flex items-center justify-between">
                        <p>Player Experience Start:</p>
                        <span>{campaign.playerExperienceStart}</span>
                      </div>
                      <div className="w-full flex items-center justify-between">
                        <p>Adventuring Day XP Limit:</p>
                        <span>{adventuringDayXP}</span>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p>Level of Players:</p>
                        <span>{levelDetails?.level}</span>
                      </div>
                      <RestCalculationDisplay
                        playerExperienceStart={campaign.playerExperienceStart}
                        adventuringDayXPLimit={adventuringDayXP}
                        xpStart={campaign.levelDetails?.xpStart}
                        xpThresholdEasy={xpThresholdEasy}
                        shortRestsAvailable={shortRestsAvailable}
                        longRestNeeded={rests.longRestNeeded}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ConquestCampaignList;
