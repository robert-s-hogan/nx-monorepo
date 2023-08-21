import useSWR from 'swr';

export const useHarrisRankings = () => {
  const { data, error } = useSWR('/api/harrisRankings', async (url) => {
    const res = await fetch(url);
    return res.json();
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
