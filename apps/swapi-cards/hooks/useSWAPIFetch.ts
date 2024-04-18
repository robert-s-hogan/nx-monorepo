import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { PaginatedApiResponse } from '../types';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useSWAPIFetch<T>(initialUrl: string) {
  const [url, setUrl] = useState<string>(initialUrl);

  // SWR hook for data fetching
  const { data, error, mutate } = useSWR<PaginatedApiResponse<T>>(
    url,
    fetcher,
    {
      onErrorRetry: (error, key, option, revalidate, { retryCount }) => {
        // Retry on failure, up to a maximum of 5 retries, with a delay of 2 seconds
        if (retryCount >= 5) return;
        setTimeout(() => revalidate({ retryCount }), 2000);
      },
    }
  );

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  useEffect(() => {
    // Ensure we are updating the pagination URLs only after data changes
    if (data) {
      setNextPage(data.next);
      setPreviousPage(data.previous);
    }
  }, [data]); // dependency on data ensures this runs only when data changes

  // Helper function to change page
  const fetchPage = (newUrl: string) => {
    setUrl(newUrl);
    mutate(); // Trigger revalidation
  };

  return {
    data: data ? (data.results as T) : null,
    loading: !error && !data,
    error: error ? error.message : '',
    nextPage,
    previousPage,
    fetchPage,
  };
}

export default useSWAPIFetch;
