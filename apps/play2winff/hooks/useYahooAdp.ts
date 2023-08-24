// hooks/useYahooAdp.ts
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useYahooAdp = () => {
  const { data, error } = useSWR('/api/yahooAdp', fetcher);

  return {
    data,
    yahooIsLoading: !data && !error,
    yahooIsError: error,
  };
};

export default useYahooAdp;
