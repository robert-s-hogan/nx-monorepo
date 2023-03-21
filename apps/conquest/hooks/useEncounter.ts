import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
export function useEncounter() {
  const { data, error } = useSWR('/api/encounter', fetcher);

  const isLoading = !data && !error;
  const difficulty = data?.difficulty ?? '';
  const monsters = data?.monsters ?? [];
  const mapInfo = data?.mapInfo ?? {};
  const map = data?.map ?? {};
  const quest = data?.quest ?? {};
  const encounterModifier = data?.encounterModifier ?? '';
  const intro = data?.intro ?? [];

  return {
    isLoading,
    error,
    difficulty,
    monsters,
    mapInfo,
    map,
    quest,
    encounterModifier,
    intro,
  };
}
