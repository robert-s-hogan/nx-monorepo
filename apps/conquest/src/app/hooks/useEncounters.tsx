import useSWR from 'swr';
import { fetchEncounters as fetchEncountersService } from '@conquestServices/encounterService';
import { Encounter } from '@conquestTypes/Encounter';

export const useEncounters = (campaignId: string) => {
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
    mutate, // Exposing mutate for refetching or updating encounters data
  };
};
