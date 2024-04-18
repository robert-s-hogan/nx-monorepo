import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { PaginatedApiResponse } from '../types';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useSWAPIFetch<T>(initialUrl: string) {
  const [url, setUrl] = useState(initialUrl);

  // SWR hook for data fetching with dynamic key
  const { data, error, isValidating } = useSWR<PaginatedApiResponse<T>>(
    url,
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
