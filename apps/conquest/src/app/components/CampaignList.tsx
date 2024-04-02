import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { fetchCampaigns } from '../services/campaignService';
import { CampaignListProps } from '@conquestTypes/Campaign';
import { IonIcon } from '@ionic/react';
import { create, trash } from 'ionicons/icons';

const CampaignList: React.FC<CampaignListProps> = ({
  campaigns,
  onEdit,
  onDelete,
  hideEdit,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {campaigns.length === 0 && <p>No campaigns found</p>}
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border border-black">
            <div className="flex justify-end pr-2 pt-2">
              {!hideEdit && onEdit && (
                <button onClick={() => onEdit(campaign)}>
                  <IonIcon icon={create} size="large" />
                </button>
              )}

              {onDelete && (
                <button onClick={() => onDelete(campaign.id as string)}>
                  <IonIcon icon={trash} size="large" />
                </button>
              )}
            </div>
            <Link href={`/campaigns/${campaign.slug}`} key={campaign.id}>
              <div className="p-4">
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
                <p>Player Experience Start: {campaign.playerExperienceStart}</p>
                <p>Group Dead?: {campaign.groupDead ? 'Yes' : 'No'}</p>
                <p>Rests: {campaign.rests}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CampaignList;
