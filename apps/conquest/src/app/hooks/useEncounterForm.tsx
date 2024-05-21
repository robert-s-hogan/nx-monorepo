// hooks/useEncounterForm.ts
import { useRouter } from 'next/router';
import { useEncountersContext } from '../contexts/EncounterContext';
import { Encounter } from '../types';

export const useEncounterForm = () => {
  const router = useRouter();
  const { addEncounter, editEncounter, deleteEncounter } =
    useEncountersContext();

  const handleAddEncounter = async (encounterData: Encounter) => {
    try {
      await addEncounter(encounterData);
    } catch (error) {
      console.error('Error adding encounter:', error);
    }
  };

  const handleEditEncounter = async (
    id: string,
    encounterData: Partial<Encounter>
  ) => {
    try {
      await editEncounter(id, encounterData);
      router.push(`/encounters/${id}`);
    } catch (error) {
      console.error('Error editing encounter:', error);
    }
  };

  const handleDeleteEncounter = async (id: string) => {
    try {
      await deleteEncounter(id);
    } catch (error) {
      console.error('Error deleting encounter:', error);
    }
  };

  return {
    handleAddEncounter,
    handleEditEncounter,
    handleDeleteEncounter,
  };
};
