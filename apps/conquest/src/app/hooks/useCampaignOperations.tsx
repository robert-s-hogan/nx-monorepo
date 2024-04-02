// hooks/useCampaignOperations.js
import { useRouter } from 'next/navigation';
import { useCampaignForm } from '@hooks/useCampaignForm';

export const useCampaignOperations = (onClose) => {
  const { handleAddCampaign, handleDeleteCampaign, handleEditCampaign } =
    useCampaignForm();

  const handleSave = async (campaignData, operation) => {
    const router = useRouter();

    if (!campaignData.name) {
      console.error('Required campaign data is missing.');
      return;
    }

    if (operation === 'edit') {
      if (!campaignData.id) {
        console.error('No campaign ID provided for edit operation');
        return;
      }
      // Proceed with edit, `campaignData` includes `id`
      await handleEditCampaign(campaignData);
      router.push(`/campaigns/${campaignData.slug}`);
    } else if (operation === 'add') {
      // Proceed with add, `campaignData` should not include `id`
      await handleAddCampaign(campaignData);
    }

    onClose();
  };

  const handleDelete = async (campaignId) => {
    if (!campaignId) {
      console.error('No campaign ID provided for delete operation');
      return;
    }

    // Proceed with delete
    await handleDeleteCampaign(campaignId);
    onClose();
  };

  return { handleSave, handleDelete };
};
