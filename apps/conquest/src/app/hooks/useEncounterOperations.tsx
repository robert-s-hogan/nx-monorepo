// hooks/useEncounterOperations.ts
import { useRouter } from 'next/router';
import { useEncounterForm } from './useEncounterForm';
import { Encounter, ModalOperation } from '../types';

export const useEncounterOperations = (onClose: () => void) => {
  const { handleAddEncounter, handleEditEncounter, handleDeleteEncounter } =
    useEncounterForm();
  const router = useRouter();

  const handleSave = async (
    encounterData: Partial<Encounter>,
    operation: ModalOperation
  ) => {
    if (!encounterData.campaignId || !encounterData.mapId) {
      console.error('Required encounter data is missing.');
      return;
    }

    if (operation === 'add') {
      await handleAddEncounter(encounterData as Encounter);
    } else if (operation === 'edit' && encounterData.id) {
      await handleEditEncounter(encounterData.id, encounterData);
    }

    onClose();
  };

  const handleDelete = async (encounterId: string) => {
    if (!encounterId) {
      console.error('No encounter ID provided for delete operation');
      return;
    }

    await handleDeleteEncounter(encounterId);
    onClose();
  };

  return { handleSave, handleDelete };
};
