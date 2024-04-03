import React from 'react';
import EncounterList from '../components/EncounterList';
import EncounterModalManager from '../components/EncounterModalManager';
import useModalManager from '../hooks/useModalManager';
import { Encounter } from '../types';

interface EncounterListWithModalProps {
  encounters: Encounter[];
  hideEdit?: boolean;
}

const EncounterListWithModal = ({
  encounters,
  hideEdit = false,
}: EncounterListWithModalProps) => {
  const { modalState, openModal, closeModal } = useModalManager<Encounter>();
  const { isOpen, operation, data } = modalState;

  const handleAdd = () => {
    openModal('add', {} as Encounter); // Pass an empty object for the add operation
  };

  const handleEdit = (encounter: Encounter) => {
    openModal('edit', encounter);
  };

  const handleDelete = (encounterId: string) => {
    const encounterToDelete = encounters.find((e) => e.id === encounterId);
    if (encounterToDelete) {
      openModal('delete', encounterToDelete); // Pass the encounter object for the delete operation
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col space-y-4">
      <h2 className="mb-4">Encounters</h2>
      {!hideEdit && (
        <div className="flex w-auto">
          <button onClick={handleAdd} className="btn btn-primary">
            Add Encounter
          </button>
        </div>
      )}

      <EncounterList
        encounters={encounters}
        hideEdit={hideEdit}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isOpen && (
        <EncounterModalManager
          isOpen={isOpen}
          onClose={closeModal}
          operation={operation || 'add'}
          encounter={data!}
        />
      )}
    </div>
  );
};

export default EncounterListWithModal;
