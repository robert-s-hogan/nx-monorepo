// useCampaignForm.ts
'use client';

import { Campaign } from '../types';
import { useCampaignsContext } from '../contexts/CampaignContext';

export const useCampaignForm = () => {
  const { addCampaign, editCampaign, deleteCampaign } = useCampaignsContext();

  const handleAddCampaign = async (campaignData: Campaign) => {
    console.log(`Adding campaign: ${JSON.stringify(campaignData)}`);
    await addCampaign(campaignData);
  };

  const handleEditCampaign = async (
    id: string,
    campaignData: Partial<Campaign>
  ) => {
    console.log(
      `Editing campaign ID: ${id} with data: ${JSON.stringify(campaignData)}`
    );
    await editCampaign(id, campaignData);
  };

  const handleDeleteCampaign = async (id: string) => {
    console.log(`Deleting campaign ID: ${id}`);
    await deleteCampaign(id);
  };

  return {
    handleAddCampaign,
    handleEditCampaign,
    handleDeleteCampaign,
  };
};
