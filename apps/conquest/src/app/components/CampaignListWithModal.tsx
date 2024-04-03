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
    <>
      <button onClick={() => openModal('add')} className="btn btn-primary">
        Add Campaign
      </button>

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
    </>
  );
};

export default CampaignListWithModal;
