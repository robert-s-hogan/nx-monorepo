import React from 'react';

import CampaignDeleteConfirmation from '@components/CampaignDeleteConfirmation';
import CampaignForm from '@components/CampaignForm';
import CampaignModal from '@components/CampaignModal';

import { useCampaigns } from '@hooks/useCampaigns';
import { useCampaignOperations } from '@hooks/useCampaignOperations';

import {
  Campaign,
  CampaignAddModalProps,
  CampaignDeleteModalProps,
} from '@conquestTypes/Campaign';

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
                // Check if campaign.id is defined
                handleDelete(campaign.id);
              } else {
                console.error('Campaign ID is undefined.');
                // Handle the undefined ID case here (e.g., show an error message)
              }
            }}
            onCancel={onClose}
          />
        );
      default:
        return null; // Or some default/fallback content
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
