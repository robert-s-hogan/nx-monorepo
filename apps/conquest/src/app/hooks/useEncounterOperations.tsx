import { useCallback } from 'react';
import { ModalOperation } from '../types';
import { Encounter } from '../types'; // Assuming this is the type for your Encounter

export const useEncounterOperations = (onClose: () => void) => {
  const handleSave = useCallback(
    // Assuming Partial<Encounter> for encounterData because you might not have all properties for a new Encounter
    (encounterData: Partial<Encounter>, operation: ModalOperation) => {
      // Define logic to add or edit an encounter based on `operation`
      // Close the modal after saving
      onClose();
    },
    [onClose]
  );

  const handleDelete = useCallback(
    (encounterId: string) => {
      // Assuming encounterId is a string. Adjust if it's a different type
      // Define logic to delete an encounter
      // Close the modal after deleting
      onClose();
    },
    [onClose]
  );

  return { handleSave, handleDelete };
};
