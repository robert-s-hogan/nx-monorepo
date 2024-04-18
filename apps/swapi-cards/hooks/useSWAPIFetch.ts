import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { PaginatedApiResponse } from '../types';

// Update the PaginationResponse to expect results to be of type T
interface PaginationResponse<T> {
  data: T | null;
  loading: boolean;
  error: string;
  nextPage: string | null;
  previousPage: string | null;
  fetchPage: (url: string) => void;
}

function useSWAPIFetch<T>(initialUrl: string): PaginationResponse<T> {
  const [url, setUrl] = useState<string>(initialUrl);
  // Here, data is expected to be of type T which should be an array or similar structure based on your API
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  const fetchPage = useCallback((newUrl: string) => {
    setUrl(newUrl);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setLoading(true);
      try {
        // The axios.get call expects PaginatedApiResponse which should match T
        const response = await axios.get<PaginatedApiResponse<T>>(url);
        // Since T is the type of the results array, we directly set it here
        setData(response.data.results as T);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        setError('');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, nextPage, previousPage, fetchPage };
}

export default useSWAPIFetch;
