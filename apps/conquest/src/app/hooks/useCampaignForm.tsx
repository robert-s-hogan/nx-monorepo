import { useRouter } from 'next/router';

import { Campaign } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useCampaigns } from '../hooks/useCampaigns';
import {
  addCampaign,
  editCampaign,
  deleteCampaign,
} from '../services/campaignService';

export const useCampaignForm = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const { mutate } = useCampaigns();

  const handleAddCampaign = async (campaignData: Campaign): Promise<void> => {
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

    try {
      await deleteCampaign(campaignId);
      router.push('/campaigns'); // Redirect to the /campaigns page
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
