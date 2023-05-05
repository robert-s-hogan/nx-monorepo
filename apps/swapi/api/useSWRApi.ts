import useSWR from 'swr';
import axios from 'axios';
import { ApiResponse } from '../types/api/types';

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useSWRApi = <T>(endpoint: string, search?: string) => {
  const url = `https://swapi.dev/api/${endpoint}${
    search ? `/?search=${encodeURIComponent(search)}` : ''
  }`;

  const { data, error } = useSWR<ApiResponse<T>>(url, fetcher);

  if (data) {
    console.log(`useSWRApi: ${endpoint}`, data);
  }

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
