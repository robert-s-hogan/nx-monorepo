import useSWR, { Key } from 'swr';

const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
export function useApi<TData = any>(key: Key) {
  return useSWR<TData, Error>(key, fetcher);
}

export default useApi;
