import React from 'react';

import EncounterDeleteConfirmation from './ConquestEncounterDeleteConfirmation';
import EncounterForm from './ConquestEncounterForm';
import EncounterModal from './ConquestEncounterModal';
import { useEncounterOperations } from '../hooks/useEncounterOperations';
import { EncounterModalManagerProps } from '../types';
import { useCampaignsContext } from '../contexts/CampaignContext';

const ConquestEncounterModalManager: React.FC<EncounterModalManagerProps> = ({
  isOpen,
  onClose,
  operation,
  encounter,
}) => {
  const { handleSave, handleDelete } = useEncounterOperations(onClose);
  const { campaigns, loading, error } = useCampaignsContext();
  const selectedCampaign =
    campaigns.find((campaign) => campaign.id === encounter?.campaignId) ||
    campaigns[0];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading campaigns: {error}</div>;

  let titleText =
    operation === 'add'
      ? 'Add Encounter'
      : operation === 'edit'
      ? 'Edit Encounter'
      : 'Delete Encounter';

  const renderContent = () => {
    switch (operation) {
      case 'add':
      case 'edit':
        return (
          <EncounterForm
            encounter={encounter}
            campaignId={selectedCampaign?.id || ''}
            onSubmit={(formData) => handleSave(formData, operation)}
            operation={operation}
          />
        );
      case 'delete':
        return (
          <EncounterDeleteConfirmation
            encounter={encounter}
            onConfirm={() => {
              if (encounter && encounter.id) {
                handleDelete(encounter.id);
              } else {
                console.error('Encounter ID is undefined.');
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
    <EncounterModal
      isOpen={isOpen}
      onClose={onClose}
      title={titleText}
      operation={operation}
      encounter={encounter}
    >
      {renderContent()}
    </EncounterModal>
  );
};

export default ConquestEncounterModalManager;
