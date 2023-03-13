import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useEncounter() {
  const { data, error } = useSWR('/api/encounter', fetcher);

  const isLoading = !data && !error;
  const difficulty = data?.difficulty ?? '';
  const monsters = data?.monsters ?? [];
  const mapInfo = data?.mapInfo ?? {};
  const quest = data?.quest ?? {};
  const encounterModifier = data?.encounterModifier ?? '';
  const intro = data?.intro ?? [];

  return {
    isLoading,
    error,
    difficulty,
    monsters,
    mapInfo,
    quest,
    encounterModifier,
    intro,
  };
}
