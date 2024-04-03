import React from 'react';
import CampaignList from '@conquestComponents/CampaignList';
import CampaignModalManager from '@conquestComponents/CampaignModalManager';
import useModalManager from '@conquestHooks/useModalManager';
import { Campaign } from '@conquestTypes/Campaign';

interface CampaignListWithModalProps {
  campaigns: Campaign[];
  hideEdit?: boolean;
}

const CampaignListWithModal = ({
  campaigns,
  hideEdit = false,
}: CampaignListWithModalProps) => {
  const { isModalOpen, modalOperation, modalData, openModal, closeModal } =
    useModalManager();

  const handleEdit = (campaign: Campaign) => {
    openModal('edit', campaign);
  };

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col">
      <h2 className="mb-4">Campaigns</h2>
      {hideEdit && (
        <div className="flex w-auto">
          <button onClick={() => openModal('add')} className="btn btn-primary">
            Add Campaign
          </button>
        </div>
      )}

      <CampaignList
        campaigns={campaigns}
        hideEdit={hideEdit}
        onEdit={handleEdit} // Pass the handleEdit function as the onEdit prop
        onDelete={(campaignId) => {
          const campaignToDelete = campaigns.find((c) => c.id === campaignId);
          if (campaignToDelete) {
            openModal('delete', campaignToDelete);
          }
        }}
      />
      {isModalOpen && (
        <CampaignModalManager
          isOpen={isModalOpen}
          onClose={closeModal}
          operation={modalOperation || 'add'}
          campaign={modalData as Campaign}
        />
      )}
    </div>
  );
};

export default CampaignListWithModal;
