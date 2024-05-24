import { useRouter } from 'next/navigation';

import { useCampaignForm } from './useCampaignForm';
import { Campaign } from '../types';
import { ModalOperation } from '../types';

export const useCampaignOperations = (onClose: () => void) => {
  const router = useRouter();
  const { handleAddCampaign, handleDeleteCampaign, handleEditCampaign } =
    useCampaignForm();

  const handleSave = async (
    campaignData: Partial<Campaign>,
    operation: ModalOperation
  ) => {
    if (!campaignData.name) {
      console.error('Required campaign data is missing.');
      return;
    }

    if (operation === 'add') {
      const fullCampaignData: Campaign = {
        name: campaignData.name,
        id: campaignData.id ?? '',
        slug: campaignData.slug ?? 'default-slug',
        description: campaignData.description ?? '',
        numberOfPlayers: campaignData.numberOfPlayers ?? 1,
        playerExperienceStart: campaignData.playerExperienceStart ?? 0,
        levelOfPlayersCharactersStart:
          campaignData.levelOfPlayersCharactersStart ?? 1,
        levelDetails: campaignData.levelDetails ?? {
          xpStart: 0,
          xpEnd: 100,
          xpNeeded: 100,
          level: 1,
        },
        adventuringDayXPLimit: campaignData.adventuringDayXPLimit ?? 0,
        groupDead: campaignData.groupDead ?? false,
        longRestNeeded: campaignData.longRestNeeded ?? false,
        shortRests: campaignData?.shortRests || [],

        accountId: 'default-account',
      };

      await handleAddCampaign(fullCampaignData);
    } else if (operation === 'edit') {
      if (!campaignData.id) {
        console.error('No campaign ID provided for edit operation');
        return;
      }
      // await handleEditCampaign(campaignData as Campaign);
      router.push(`/campaigns/${campaignData.slug}`);
    }

    onClose();
  };

  const handleDelete = async (campaignId: string) => {
    if (!campaignId) {
      console.error('No campaign ID provided for delete operation');
      return;
    }

    await handleDeleteCampaign(campaignId);
    onClose();
  };

  return { handleSave, handleDelete };
};
