import useSWR from 'swr';

export const useHarrisRankings = () => {
  const { data, error } = useSWR('/api/harrisRankings', async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  });

  if (error) {
    console.error('Error fetching data:', error);
  }

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
