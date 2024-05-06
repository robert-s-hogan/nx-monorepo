import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Heading, IconButton } from '@with-nx/generic-ui';
import Link from 'next/link';

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
                className="border border-primary-color rounded p-0 md:p-4"
              >
                <div className="p-2 md:p-4">
                  <div className="flex items-center justify-between">
                    <Heading level={2} text={campaign.name} />

                    <div className="flex justify-end pr-2 pt-2">
                      <IconButton
                        icon={<FiEdit size="2rem" />}
                        label="Edit Campaign"
                        theme="transparent"
                        className="border-0"
                        onClick={() => onEdit && onEdit(campaign)}
                      />

                      <IconButton
                        icon={<FiTrash size="2rem" />}
                        label="Delete Campaign"
                        theme="transparent"
                        className="border-0"
                        onClick={() =>
                          onDelete && onDelete(campaign.id as string)
                        }
                      />
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex space-x-2 items-center">
                      <p>{campaign.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div />
                    <div className="p-3 col-span-2 space-y-2 text-lg">
                      <Heading level={2} text="XP Calculations" />

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
