import { useEffect, useState } from 'react';

import CampaignForm from '@components/CampaignForm';
import ConquestModal from '@components/ConquestModal';
import CampaignDeleteConfirmation from '@components/CampaignDeleteConfirmation';
import { Campaign, CampaignModalProps } from '../types';

const CampaignModal: React.FC<CampaignModalProps> = ({
  isOpen,
  onClose,
  operation,
  campaign,
  onSave,
  onDelete,
}) => {
  const [operationText, setOperationText] = useState('');

  const handleFormSubmit = async (formData: Partial<Campaign>) => {
    if (onSave) {
      // Check if onSave is defined
      await onSave(formData as Campaign);
    }
    onClose();
  };

  const renderContent = () => {
    switch (operation) {
      case 'add':
      case 'edit':
        return (
          <CampaignForm
            campaign={campaign}
            onSubmit={handleFormSubmit}
            operation={operation}
          />
        );
      case 'delete':
        return (
          <>
            {campaign && (
              <CampaignDeleteConfirmation
                campaign={campaign}
                campaignId={campaign.name}
                onConfirm={() => {
                  if (onDelete) {
                    // Check if onDelete is defined
                    onDelete(campaign);
                  }
                  onClose(); // Close the modal after confirming
                }}
                onCancel={onClose} // Close the modal when cancellation is requested
              />
            )}
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    let titleText = '';
    switch (operation) {
      case 'add':
        titleText = 'Add Campaign';
        break;
      case 'edit':
        titleText = 'Edit Campaign';
        break;
      case 'delete':
        titleText = 'Delete Campaign';
        break;
      default:
        titleText = '';
        break;
    }
    setOperationText(titleText);
  }, [operation]);

  return (
    <ConquestModal isOpen={isOpen} onClose={onClose} title={operationText}>
      {renderContent()}
    </ConquestModal>
  );
};

export default CampaignModal;
