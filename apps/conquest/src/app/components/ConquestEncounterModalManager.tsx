import React from 'react';

import EncounterDeleteConfirmation from './ConquestEncounterDeleteConfirmation';
import EncounterForm from './ConquestEncounterForm';
import EncounterModal from './ConquestEncounterModal';
import { useEncounterOperations } from '../hooks/useEncounterOperations';
import { EncounterModalManagerProps } from '../types';
import { useCampaigns } from '../hooks/useCampaigns';

const ConquestEncounterModalManager: React.FC<EncounterModalManagerProps> = ({
  isOpen,
  onClose,
  operation,
  encounter,
}) => {
  const { handleSave, handleDelete } = useEncounterOperations(onClose);
  const { campaigns, isLoading, isError, selectedCampaign } = useCampaigns();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading campaigns.</div>;

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
            campaigns={campaigns}
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
