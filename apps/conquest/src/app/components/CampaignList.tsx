import React, { useState, useEffect } from 'react';
import { fetchCampaigns } from '../services/campaignService';
import { CampaignListProps } from '../types';
import { IonIcon } from '@ionic/react';
import { create, trash } from 'ionicons/icons';

const CampaignList: React.FC<CampaignListProps> = ({
  campaigns,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {campaigns.length === 0 && <p>No campaigns found</p>}
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border border-black p-4">
            <div className="flex justify-end">
              <button onClick={() => onEdit(campaign)}>
                <IonIcon icon={create} size="large" />
              </button>

              <button onClick={() => onDelete(campaign.id as string)}>
                <IonIcon icon={trash} size="large" />
              </button>
            </div>
            <h2>{campaign.name}</h2>
            <p>{campaign.description}</p>
            <p>Player Level: {campaign.playerLevel}</p>
            <p>Player Experience Start: {campaign.playerExperienceStart}</p>
            <p>
              Encounter Adjusted Experience:{' '}
              {campaign.encounterAdjustedExperience}
            </p>
            <p>Encounter Experience: {campaign.encounterExperience}</p>
            <p>Group Dead?: {campaign.groupDead ? 'Yes' : 'No'}</p>
            <p>Rests: {campaign.rests}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CampaignList;
