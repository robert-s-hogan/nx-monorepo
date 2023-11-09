import useSWR from 'swr';
const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
export function useMap() {
  const { data, error } = useSWR('/api/encounter', fetcher);

  return {
    data: data,
    isLoading: !data && !error,
    isErorr: error,
  };
}
