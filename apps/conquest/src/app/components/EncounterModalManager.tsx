import React from 'react';
import { usePathname } from 'next/navigation';

import EncounterDeleteConfirmation from '../components/EncounterDeleteConfirmation'; // A delete confirmation component you'll need to create
import EncounterForm from '../components/EncounterForm'; // A form component you'll need to create
import EncounterModal from '../components/EncounterModal'; // A modal component you'll need to create
import { useEncounterOperations } from '../hooks/useEncounterOperations'; // A hook you'll need to create
import { Encounter } from '../types'; // A type you'll need to create
import { useCampaigns } from '../hooks/useCampaigns'; // A hook you'll need to create
import EncounterList from './EncounterList';

const EncounterModalManager = ({
  isOpen,
  onClose,
  operation,
  encounter,
}: {
  isOpen: boolean;
  onClose: () => void;
  operation: 'add' | 'edit' | 'delete';
  encounter: Encounter | null; // Ensure encounter can be null for 'add' operation
}) => {
  const { handleSave, handleDelete } = useEncounterOperations(onClose);
  const { campaigns, isLoading, isError, selectedCampaign } = useCampaigns();

  // Conditional rendering based on loading or error state
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
            campaignId={selectedCampaign?.id ?? ''} // Pass the id of selectedCampaign, with fallback
            campaigns={campaigns} // Pass campaigns data to the form
            onSubmit={(formData) => handleSave(formData, operation)}
            operation={operation}
          />
        );
      case 'delete':
        return (
          <EncounterDeleteConfirmation
            encounter={encounter} // Pass the entire encounter object
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
      fullScreen={true}
    >
      <div className="grid grid-cols-2 gap-4 w-full">{renderContent()}</div>
    </EncounterModal>
  );
};

export default EncounterModalManager;
