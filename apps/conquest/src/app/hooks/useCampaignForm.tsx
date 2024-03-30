import useSWR, { mutate } from 'swr';
import { useContext } from 'react';

import { Campaign } from '../types';
import { useAuth } from '@contexts/AuthContext';
import { useCampaigns } from '@hooks/useCampaigns';
import {
  addCampaign,
  editCampaign,
  deleteCampaign,
} from '@services/campaignService';

export const useCampaignForm = (
  onOperationSuccess: () => void,
  updateCampaigns: () => Promise<void>
) => {
  const { currentUser } = useAuth();
  const { campaigns, mutate } = useCampaigns(); // Use mutate from useCampaigns

  const handleAddCampaign = async (campaignData: Campaign) => {
    if (!currentUser) {
      console.error('No user authenticated');
      return;
    }
    try {
      const newCampaignData = { ...campaignData, accountId: currentUser.uid };
      await addCampaign(newCampaignData);
      await updateCampaigns(); // This should refresh the campaigns list internally
      onOperationSuccess();
    } catch (error) {
      console.error('Error adding campaign:', error);
    }
  };

  const handleEditCampaign = async (campaignData: Partial<Campaign>) => {
    if (!currentUser || !campaignData.id) {
      console.error('No user authenticated or campaign ID is undefined');
      return;
    }
    try {
      await editCampaign(campaignData.id, campaignData);
      await updateCampaigns(); // This should refresh the campaigns list internally
      onOperationSuccess();
    } catch (error) {
      console.error('Error updating campaign:', error);
    }
  };

  const handleDeleteCampaign = async (campaignId: string) => {
    console.log(`Attempting to delete campaign with ID: ${campaignId}`);

    if (!currentUser) {
      console.error('No user authenticated');
      return;
    }

    console.log(`Current campaigns before deletion:`, campaigns);
    const updatedCampaigns = campaigns.filter((c) => c.id !== campaignId);
    console.log(
      `Campaigns after local filtering (before optimistic update):`,
      updatedCampaigns
    );

    mutate(updatedCampaigns, false); // Update the cache without revalidating

    try {
      await deleteCampaign(campaignId);
      console.log(`Successfully deleted campaign with ID: ${campaignId}`);
      mutate();
    } catch (error) {
      console.error('Error deleting campaign:', error);
      onOperationSuccess();
    }
  };

  return {
    handleAddCampaign,
    handleEditCampaign,
    handleDeleteCampaign,
  };
};
