import useSWR from 'swr';
import { fetchNews } from '../utils/fetchNews';

export const useEspnNews = () => {
  const { data: espnNewsData, error: espnNewsError } = useSWR(
    '/api/news',
    fetchNews
  );

  return {
    news: espnNewsData || [],
    isLoading: !espnNewsError && !espnNewsData,
    isError: espnNewsError,
  };
};
