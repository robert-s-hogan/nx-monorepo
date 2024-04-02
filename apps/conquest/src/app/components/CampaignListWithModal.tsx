import React from 'react';
import CampaignList from '@conquestComponents/CampaignList';
import CampaignModalManager from '@conquestComponents/CampaignModalManager';
import useModalManager from '@conquestHooks/useModalManager';
import { Campaign } from '@conquestTypes/Campaign';

interface CampaignListWithModalProps {
  campaigns: Campaign[];
}

const CampaignListWithModal = ({ campaigns }: CampaignListWithModalProps) => {
  const { isModalOpen, modalOperation, modalData, openModal, closeModal } =
    useModalManager();

  return (
    <>
      <button onClick={() => openModal('add')} className="btn btn-primary">
        Add Campaign
      </button>

      <CampaignList
        campaigns={campaigns}
        hideEdit={true}
        onDelete={(campaignId) => {
          const campaignToDelete = campaigns.find((c) => c.id === campaignId);
          if (campaignToDelete) {
            openModal('delete', campaignToDelete);
          }
        }}
      />
      {isModalOpen && modalData && (
        <CampaignModalManager
          isOpen={isModalOpen}
          onClose={closeModal}
          operation={modalOperation || 'add'}
          campaign={modalData}
        />
      )}
    </>
  );
};

export default CampaignListWithModal;
