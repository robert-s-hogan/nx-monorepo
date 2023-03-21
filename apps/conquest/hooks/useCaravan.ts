import { useState } from 'react';
import useSWR from 'swr';
const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
export function useCaravan() {
  const { data, error } = useSWR('/api/caravan', fetcher);
  const [isLoading, setIsLoading] = useState('');

  return {
    data: data,
    isLoading: !data && !error,
    isErorr: error,
  };
}
