import useSWR from 'swr';
import { useContext } from 'react';

import { Campaign } from '@conquestTypes/Campaign';
import { useAuth } from '@contexts/AuthContext';
import { useCampaigns } from '@hooks/useCampaigns';
import {
  addCampaign,
  editCampaign,
  deleteCampaign,
} from '@services/campaignService';

export const useCampaignForm = () => {
  const { currentUser } = useAuth();
  const { campaigns, mutate } = useCampaigns(); // Use mutate from useCampaigns

  const handleAddCampaign = async (campaignData: Campaign): Promise<void> => {
    console.log('Current User:', currentUser);

    if (!currentUser) {
      console.error('No user authenticated');
      return;
    }

    try {
      const newCampaignData: Campaign = {
        ...campaignData,
        accountId: currentUser.uid,
      };

      await addCampaign(newCampaignData);
      mutate();
    } catch (error) {
      console.error('Error adding campaign:', error);
    }
  };

  const handleEditCampaign = async (
    campaignData: Partial<Campaign>
  ): Promise<void> => {
    console.log('Current User:', currentUser);
    if (!currentUser || !campaignData.id) {
      console.error('No user authenticated or campaign ID is undefined');
      return;
    }

    try {
      await editCampaign(campaignData.id, campaignData);

      mutate();
    } catch (error) {
      console.error('Error updating campaign:', error);
    }
  };

  const handleDeleteCampaign = async (campaignId: string): Promise<void> => {
    if (!currentUser) {
      console.error('No user authenticated');
      return;
    }

    mutate();

    try {
      await deleteCampaign(campaignId);
      console.log(`Successfully deleted campaign with ID: ${campaignId}`);
      mutate();
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  return {
    handleAddCampaign,
    handleEditCampaign,
    handleDeleteCampaign,
  };
};
