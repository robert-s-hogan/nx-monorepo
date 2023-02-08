import { useState } from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useEncounter() {
  const { data, error } = useSWR('/api/encounter', fetcher);
  const [isLoading, setIsLoading] = useState('');

  return {
    data: data,
    isLoading: !data && !error,
    isErorr: error,
  };
}
