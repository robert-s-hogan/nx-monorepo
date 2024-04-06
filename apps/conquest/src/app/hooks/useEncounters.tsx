import { useCollection } from '@with-nx/firebase';
import { Encounter, FirestoreDocument } from '../types';

// Assuming useCollection is adapted to accept parameters for queries
export const useEncounters = (
  campaignId: string
): {
  encounters: FirestoreDocument<Encounter>[] | undefined;
  isLoading: boolean;
  isError: any;
  mutate: typeof mutate; // Using typeof to reference the mutate function's type
} => {
  const {
    documents: encounters,
    isLoading,
    isError,
    mutate,
  } = useCollection<Encounter>(`campaigns/${campaignId}/encounters`);

  return {
    encounters,
    isLoading,
    isError,
    mutate,
  };
};
