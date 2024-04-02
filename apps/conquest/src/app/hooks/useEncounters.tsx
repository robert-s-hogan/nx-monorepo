import useSWR from 'swr';
import { fetchEncounters as fetchEncountersService } from '@services/encounterService';
import { Encounter } from '../types'; // Assuming Encounter type is defined in your types file

export const useEncounters = (campaignId: string) => {
  // Use campaignId in your key to fetch encounters related to a specific campaign
  const {
    data: encounters,
    error,
    mutate,
  } = useSWR<Encounter[]>(`campaigns/${campaignId}/encounters`, () =>
    fetchEncountersService(campaignId)
  );

  return {
    encounters,
    isLoading: !error && !encounters,
    isError: error,
    mutate, // Expose mutate function for refreshing encounters data
  };
};
