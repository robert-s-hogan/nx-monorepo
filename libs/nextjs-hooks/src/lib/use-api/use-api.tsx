import useSWR, { Key } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useApi<TData = any>(
  key: Key,
) {
  return useSWR<TData, Error>(key, fetcher);
}

export default useApi;
