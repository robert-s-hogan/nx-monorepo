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

    // Assuming the 'name' field is mandatory and the rest can be partial
    // for 'add' operation, ensure all required fields are present or have default values
    if (operation === 'add') {
      const fullCampaignData: Campaign = {
        // Provide default values or validation for all required Campaign properties
        name: campaignData.name, // 'name' is already validated above
        slug: campaignData.slug ?? 'default-slug', // Example default value
        description: campaignData.description ?? '',
        numberOfPlayers: campaignData.numberOfPlayers ?? 1,
        playerExperienceStart: campaignData.playerExperienceStart ?? 0,
        groupDead: campaignData.groupDead ?? false,
        rests: campaignData.rests ?? 0,
        accountId: 'default-account', // This should be derived from your auth logic
        // Add other required fields with default values or validation here
      };

      await handleAddCampaign(fullCampaignData);
    } else if (operation === 'edit') {
      if (!campaignData.id) {
        console.error('No campaign ID provided for edit operation');
        return;
      }
      await handleEditCampaign(campaignData as Campaign); // Type assertion, be cautious
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
