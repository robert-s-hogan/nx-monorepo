import React from 'react';
import Link from 'next/link';
import { IonIcon } from '@ionic/react';
import { create, trash } from 'ionicons/icons';

import { CampaignListProps } from '../types';
import {
  calculateRestsNeeded,
  getLevelDetailsFromExperience,
  getAdventuringDayXpLimit,
} from '../constants/experienceConstants';
import { useCampaigns } from '../hooks/useCampaigns';
import ProgressBar from './ProgressBar';

const CampaignList: React.FC<CampaignListProps> = ({
  campaigns,
  onEdit,
  onDelete,
  hideEdit,
  selectedCampaignSlug,
}) => {
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
                <pre>campaign: {JSON.stringify(campaign, null, 2)}</pre>

                {hideEdit ? (
                  <Link href={`/campaigns/${campaign.slug}`}>
                    <div className="pb-3">
                      <div className="flex space-x-2 items-center">
                        <h2 className="">{campaign.name}</h2>{' '}
                        <span className="text-gray-400 text-sm">
                          /{campaign.slug}
                        </span>
                      </div>
                      <p>{campaign.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h2>XP Calculations</h2>
                        <p>
                          Player Experience Start:{' '}
                          {campaign.playerExperienceStart}
                        </p>
                        <p>Adventuring Day XP Limit: {adventuringDayXP}</p>
                        <h2>Level Details:</h2>

                        <ProgressBar
                          xpStart={campaign.levelDetails?.xpStart}
                          xpEnd={campaign.levelDetails?.xpEnd}
                          playerExperience={campaign.playerExperienceStart}
                        />

                        <p>Level of Players: {levelDetails?.level}</p>
                      </div>
                      <div>
                        <h2>Rest Calculation</h2>
                        <p>
                          1st Short Rest Needed?:{' '}
                          {rests.shortRestNeededFirst ? 'Yes' : 'No'}
                        </p>
                        <p>
                          2nd Short Rest Needed?:{' '}
                          {rests.shortRestNeededSecond ? 'Yes' : 'No'}
                        </p>
                        <p>
                          1st Short Rest Needed?:{' '}
                          {rests.longRestNeeded ? 'Yes' : 'No'}
                        </p>
                        <p>Short Rests Remaining: {rests.shortRestCounter}</p>{' '}
                      </div>
                    </div>
                  </Link>
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
                    <p>Number of Players: {campaign.numberOfPlayers}</p>
                    <ProgressBar
                      xpStart={campaign.levelDetails.xpStart}
                      xpEnd={campaign.levelDetails.xpEnd}
                      playerExperience={campaign.playerExperienceStart}
                    />
                    <p>Group Dead?: {campaign.groupDead ? 'Yes' : 'No'}</p>
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
