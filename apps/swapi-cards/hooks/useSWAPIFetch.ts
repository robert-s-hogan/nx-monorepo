import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { PaginatedApiResponse } from '../types';

const fetcher = (url: string) => {
  const cached = sessionStorage.getItem(url);

  if (cached) {
    console.log('Using cached data for', url);
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
  const { data, error, isValidating } = useSWR<PaginatedApiResponse<T>>(
    shouldFetch ? url : null, // Conditional key
    fetcher
  );

  // Helper function to change page URL
  const fetchPage = (newUrl: string) => {
    setUrl(newUrl); // Just update the URL state
  };

  return {
    data: data?.results as T[],
    loading: isValidating,
    error: error ? error.message : '',
    nextPage: data?.next || null,
    previousPage: data?.previous || null,
    fetchPage,
  };
}

export default useSWAPIFetch;
