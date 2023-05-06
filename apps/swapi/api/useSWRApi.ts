// api/useSWRApi.ts
import useSWR from 'swr';
import { ApiResponse } from '../types/api/types';
import { fetcher } from './fetcher';
import { API_BASE_URL, endpoints, Endpoint } from './endpoints';

export const useSWRApi = <T>(
  endpoint: Endpoint,
  search?: string,
  transformData?: (data: ApiResponse<T>) => ApiResponse<T>,
  page?: number
) => {
  if (typeof endpoint === 'string' && endpoint.trim() === '') {
    return {
      data: undefined,
      isLoading: false,
      isError: false,
    };
  }

  const url = `${API_BASE_URL}${
    typeof endpoint === 'function' ? endpoint(page) : endpoint
  }${search ? `/?search=${encodeURIComponent(search)}` : ''}`;

  const { data, error } = useSWR<ApiResponse<T>>(url, fetcher);

  const transformedData = transformData && data ? transformData(data) : data;

  return {
    data: transformedData,
    isLoading: !error && !data,
    isError: error,
  };
};
