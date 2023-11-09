import useSWR from 'swr';
import { Encounter } from '../types/encounter';
import { fetchEncounterData } from '../services/mapData';

export const useEncounterData = (): {
  data: Encounter | undefined;
  isLoading: boolean;
  error: any;
} => {
  const { data, error } = useSWR<Encounter>(
    'encounterData',
    fetchEncounterData
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
