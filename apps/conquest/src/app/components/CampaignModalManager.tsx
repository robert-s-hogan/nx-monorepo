import React from 'react';

import CampaignDeleteConfirmation from '@conquestComponents/CampaignDeleteConfirmation';
import CampaignForm from '@conquestComponents/CampaignForm';
import CampaignModal from '@conquestComponents/CampaignModal';

import { useCampaignOperations } from '@conquestHooks/useCampaignOperations';

import { Campaign } from '@conquestTypes/Campaign';

const CampaignModalManager = ({
  isOpen,
  onClose,
  operation,
  campaign,
}: {
  isOpen: boolean;
  onClose: () => void;
  operation: 'add' | 'edit' | 'delete';
  campaign: Campaign;
}) => {
  const { handleSave, handleDelete } = useCampaignOperations(onClose);
  let titleText =
    operation === 'add'
      ? 'Add Campaign'
      : operation === 'edit'
      ? 'Edit Campaign'
      : 'Delete Campaign';

  const renderContent = () => {
    switch (operation) {
      case 'add':
      case 'edit':
        return (
          <CampaignForm
            campaign={campaign}
            onSubmit={(formData) => handleSave(formData, operation)}
            operation={operation}
          />
        );
      case 'delete':
        return (
          <CampaignDeleteConfirmation
            campaignId={campaign.id}
            campaign={campaign}
            onConfirm={() => {
              if (campaign.id) {
                handleDelete(campaign.id);
              } else {
                console.error('Campaign ID is undefined.');
              }
            }}
            onCancel={onClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <CampaignModal
      isOpen={isOpen}
      onClose={onClose}
      title={titleText}
      operation={operation}
      campaign={campaign}
    >
      {renderContent()}
    </CampaignModal>
  );
};

export default CampaignModalManager;
