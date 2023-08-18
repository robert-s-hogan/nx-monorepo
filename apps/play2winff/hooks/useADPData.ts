import useSWR from 'swr';

type PlayerData = {
  name: string;
  adp: number;
  low: number;
  high: number;
  bye: number;
  position: string;
  team: string;
  adp_formatted: string;
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
    adpPlayers: data?.players, // Renamed to specify ADP players
    isADPLoading: !error && !data, // Renamed to clarify what is loading
    isADPError: error, // Renamed to clarify the type of error
  };
};
