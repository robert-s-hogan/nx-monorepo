import useSWR from 'swr';
import { fetchEncounters as fetchEncountersService } from '../services/encounterService';
import { Encounter } from '../types';

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
    mutate,
  };
};
