import useSWR from 'swr';

type PlayerData = {
  name: string;
  adp: number;
  low: number;
  high: number;
};

type ApiResponse = {
  players: PlayerData[];
  // include other relevant fields from the response if needed
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useADPData = (scoringSystem = 'ppr', teams = 8, year = 2023) => {
  const url = `/api/fetchAdp?scoringSystem=${scoringSystem}&teams=${teams}&year=${year}`;
  const { data, error } = useSWR<ApiResponse>(url, fetcher);

  return {
    players: data?.players, // Adjust this line if necessary
    isLoading: !error && !data,
    isError: error,
  };
};
