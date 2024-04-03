import React from 'react';

import EncounterDeleteConfirmation from '../components/EncounterDeleteConfirmation'; // A delete confirmation component you'll need to create
import EncounterForm from '../components/EncounterForm'; // A form component you'll need to create
import EncounterModal from '../components/EncounterModal'; // A modal component you'll need to create

import { useEncounterOperations } from '../hooks/useEncounterOperations'; // A hook you'll need to create

import { Encounter } from '../types'; // A type you'll need to create

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
    >
      {renderContent()}
    </EncounterModal>
  );
};

export default EncounterModalManager;
