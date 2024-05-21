// hooks/useEncounters.tsx
import { useCollection } from '@with-nx/firebase';
import { Encounter, FirestoreDocument } from '../types';
import { usePathname } from 'next/navigation';
import { QueryConstraint, where } from 'firebase/firestore';

export const useEncounters = (
  campaignId: string
): {
  encounters: FirestoreDocument<Encounter>[] | undefined;
  isLoading: boolean;
  isError: any;
  mutate: () => Promise<any>;
  selectedEncounter?: FirestoreDocument<Encounter>;
} => {
  const queryOptions: QueryConstraint[] = [
    where('campaignId', '==', campaignId),
  ];

  const {
    documents: encounters,
    isLoading,
    isError,
    mutate,
  } = useCollection<Encounter>('encounters', queryOptions);

  const pathname = usePathname();
  const encounterId = pathname.split('/').pop();

  const selectedEncounter = encounters?.find(
    (encounter) => encounter.id === encounterId
  );

  return {
    encounters,
    isLoading,
    isError,
    mutate,
    selectedEncounter,
  };
};
