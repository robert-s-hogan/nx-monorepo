// useEncounters.ts
import useSWR from 'swr';
import { fetchEncounters } from '../services/firebaseService';
import { Encounter } from '../types';

export const useEncounters = (campaignId: string) => {
  const { data, error, mutate } = useSWR<Encounter[]>(
    campaignId ? `encounters-${campaignId}` : null,
    () => fetchEncounters(campaignId),
    {
      shouldRetryOnError: false, // to prevent infinite retry loop
    }
  );

  return {
    encounters: data,
    isLoading: !error && !data,
    isError: !!error,
    mutate,
  };
};
