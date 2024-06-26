import React from 'react';
import { Button, Heading } from '@with-nx/generic-ui';
import EncounterList from './ConquestEncounterList';
import EncounterModalManager from './ConquestEncounterModalManager';
import useModalManager from '../hooks/useModalManager';
import { EncounterListWithModalProps, Encounter } from '../types';

const ConquestEncounterListWithModal = ({
  encounters,
  hideEdit = false,
}: EncounterListWithModalProps) => {
  const { modalState, openModal, closeModal } = useModalManager<Encounter>();
  const { isOpen, operation, data } = modalState;

  const handleAdd = () => {
    openModal('add', {} as Encounter);
  };

  const handleEdit = (encounter: Encounter) => {
    openModal('edit', encounter);
  };

  const handleDelete = (encounterId: string) => {
    const encounterToDelete = encounters.find((e) => e.id === encounterId);
    if (encounterToDelete) {
      openModal('delete', encounterToDelete);
    }
  };

  return (
    <div className="w-full p-4 flex flex-col space-y-4">
      <Heading className="mb-4" text="Encounters" level={2} />
      {!hideEdit && (
        <div className="flex">
          <Button theme="primary" onClick={handleAdd} text="Add Encounter" />
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

export default ConquestEncounterListWithModal;
