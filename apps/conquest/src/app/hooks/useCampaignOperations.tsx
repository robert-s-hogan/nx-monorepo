import { useRouter } from 'next/navigation';
import { useCampaignForm } from '@conquestHooks/useCampaignForm';
import { Campaign } from '@conquestTypes/Campaign';
import { ModalOperation } from '@conquestTypes/Utility';

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
        slug: campaignData.slug ?? 'default-slug',
        description: campaignData.description ?? '',
        numberOfPlayers: campaignData.numberOfPlayers ?? 1,
        playerExperienceStart: campaignData.playerExperienceStart ?? 0,
        groupDead: campaignData.groupDead ?? false,
        rests: campaignData.rests ?? 0,
        accountId: 'default-account',
      };

      await handleAddCampaign(fullCampaignData);
    } else if (operation === 'edit') {
      if (!campaignData.id) {
        console.error('No campaign ID provided for edit operation');
        return;
      }
      await handleEditCampaign(campaignData as Campaign);
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
