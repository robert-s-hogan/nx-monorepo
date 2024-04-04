import React from 'react';
import CampaignList from '../components/CampaignList';
import CampaignModalManager from '../components/CampaignModalManager';
import useModalManager from '../hooks/useModalManager';
import { Campaign } from '../types';

interface CampaignListWithModalProps {
  campaigns: Campaign[];
  hideEdit?: boolean;
  selectedCampaignSlug?: string;
}

const CampaignListWithModal = ({
  campaigns,
  hideEdit = false,
  selectedCampaignSlug,
}: CampaignListWithModalProps) => {
  // Destructure the `modalState` from the hook and then use its properties.
  const { modalState, openModal, closeModal } = useModalManager<Campaign>();
  const {
    isOpen: isModalOpen,
    operation: modalOperation,
    data: modalData,
  } = modalState;

  const handleEdit = (campaign: Campaign) => {
    openModal('edit', campaign);
  };

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col space-y-8">
      <h2 className="mb-4">Campaigns</h2>
      {hideEdit && (
        <div className="flex w-auto">
          <button
            onClick={() => openModal('add', {} as Campaign)}
            className="btn btn-primary"
          >
            Add Campaign
          </button>
        </div>
      )}

      <CampaignList
        campaigns={campaigns}
        hideEdit={hideEdit}
        onEdit={handleEdit}
        onDelete={(campaignId) => {
          const campaignToDelete = campaigns.find((c) => c.id === campaignId);
          if (campaignToDelete) {
            openModal('delete', campaignToDelete);
          }
        }}
        selectedCampaignSlug={selectedCampaignSlug}
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
