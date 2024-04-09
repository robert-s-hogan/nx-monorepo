import React from 'react';
import Link from 'next/link';

import { CampaignListProps } from '../types';
import { IonIcon } from '@ionic/react';
import { create, trash } from 'ionicons/icons';

import { generateSlug } from '../utils/generateSlug';

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
          .map((campaign) => (
            <div key={campaign.id} className="border border-black rounded p-4">
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
                  <>Number of Players: {campaign.numberOfPlayers}</>
                  <p>
                    Player Experience Start: {campaign.playerExperienceStart}
                  </p>
                  <p>Group Dead?: {campaign.groupDead ? 'Yes' : 'No'}</p>
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
                  <>Number of Players: {campaign.numberOfPlayers}</>
                  <p>
                    Player Experience Start: {campaign.playerExperienceStart}
                  </p>
                  <p>Group Dead?: {campaign.groupDead ? 'Yes' : 'No'}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default CampaignList;
