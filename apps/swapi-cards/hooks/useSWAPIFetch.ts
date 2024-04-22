import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => {
  const cached = sessionStorage.getItem(url);
  if (cached) {
    return JSON.parse(cached);
  }
  return axios.get(url).then((res) => {
    sessionStorage.setItem(url, JSON.stringify(res.data));
    return res.data;
  });
};

function useSWAPIFetch<T>(initialUrl: string, shouldFetch: boolean = true) {
  const [url, setUrl] = useState(initialUrl);

  // SWR hook for data fetching with dynamic key
  // Only fetch if shouldFetch is true, otherwise pass null as the key to SWR to avoid fetching
  const { data, error, isValidating } = useSWR<T[]>(
    shouldFetch ? url : null, // Conditional key
    fetcher
  );

  return {
    data: data || [],
    loading: isValidating,
    error: error ? error.message : '',
  };
}

export default useSWAPIFetch;
