import React from 'react';

import ConquestCampaignDeleteConfirmation from './ConquestCampaignDeleteConfirmation';
import CampaignForm from './ConquestCampaignForm';
import CampaignModal from './ConquestCampaignModal';

import { useCampaignOperations } from '../hooks/useCampaignOperations';

import { Campaign } from '../types';

const ConquestCampaignModalManager = ({
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
          <ConquestCampaignDeleteConfirmation
            campaignId={campaign ? campaign.id : undefined}
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

export default ConquestCampaignModalManager;
