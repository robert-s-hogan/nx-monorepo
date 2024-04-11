import React from 'react';
import Link from 'next/link';
import { IonIcon } from '@ionic/react';
import { create, trash } from 'ionicons/icons';

import { Campaign, CampaignListProps } from '../types';
import {
  calculateRestsNeeded,
  getAdventuringDayXpLimit,
} from '../constants/experienceConstants';
import ProgressBar from './ProgressBar';
import RestCalculationDisplay from './RestCalculationDisplay';
import { useRestOperations } from '../hooks/useRestOperations';
import { useCampaigns } from '../hooks/useCampaigns';

const CampaignList: React.FC<CampaignListProps> = ({
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

            const shortRestsTaken = campaign.shortRests || [false, false];

            const rests = calculateRestsNeeded(
              levelDetails?.xpStart || 0,
              levelDetails?.xpEnd || 0,
              campaign?.playerExperienceStart || 100,
              campaign?.numberOfPlayers,
              levelDetails?.level || 1,
              shortRestsTaken // pass the shortRestsTaken array
            );
            return (
              <div
                key={campaign.id}
                className="border border-black rounded p-4"
              >
                {hideEdit ? (
                  <>
                    <div className="pb-3">
                      <div className="flex space-x-2 items-center">
                        <Link href={`/campaigns/${campaign.slug}`}>
                          <div className="flex space-x-2 items-center">
                            <h2 className="">{campaign.name}</h2>
                            <span>({campaign.numberOfPlayers})</span>
                          </div>
                          <span className="text-gray-400 text-sm">
                            /{campaign.slug}
                          </span>
                        </Link>
                      </div>
                      <p>{campaign.description}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      <div className="p-4 space-y-1 bg-white rounded shadow">
                        <h2 className="font-bold">XP Calculations</h2>
                        <p>
                          Player Experience Start:{' '}
                          {campaign.playerExperienceStart}
                        </p>
                        <p>Adventuring Day XP Limit: {adventuringDayXP}</p>

                        <ProgressBar
                          xpStart={campaign.levelDetails?.xpStart}
                          xpEnd={campaign.levelDetails?.xpEnd}
                          playerExperience={campaign.playerExperienceStart}
                        />

                        <p>Level of Players: {levelDetails?.level}</p>
                      </div>
                      <div>
                        <RestCalculationDisplay
                          shortRestsNeeded={[
                            rests.shortRestNeededFirst,
                            rests.shortRestNeededSecond,
                          ]}
                          shortRestsAvailable={shortRestsAvailable}
                          shortRestsRemaining={rests.shortRestCounter}
                          longRestNeeded={rests.longRestNeeded}
                          onTakeShortRest={handleTakeShortRest}
                          onTakeLongRest={handleTakeLongRest}
                        />
                      </div>
                    </div>
                  </>
                ) : (
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
                    <div className="grid grid-cols-1 gap-8">
                      <div className="p-4 space-y-1 bg-white rounded shadow">
                        <h2 className="font-bold">XP Calculations</h2>
                        <p>
                          Player Experience Start:{' '}
                          {campaign.playerExperienceStart}
                        </p>
                        <p>Adventuring Day XP Limit: {adventuringDayXP}</p>

                        <ProgressBar
                          xpStart={campaign.levelDetails?.xpStart}
                          xpEnd={campaign.levelDetails?.xpEnd}
                          playerExperience={campaign.playerExperienceStart}
                        />

                        <p>Level of Players: {levelDetails?.level}</p>
                      </div>
                      <div>
                        <RestCalculationDisplay
                          shortRestsNeeded={[
                            rests.shortRestNeededFirst,
                            rests.shortRestNeededSecond,
                          ]}
                          shortRestsAvailable={shortRestsAvailable}
                          shortRestsRemaining={rests.shortRestCounter}
                          longRestNeeded={rests.longRestNeeded}
                          onTakeShortRest={handleTakeShortRest}
                          onTakeLongRest={handleTakeLongRest}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CampaignList;
