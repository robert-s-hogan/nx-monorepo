import useSWR from 'swr';
import { ApiResponse } from '../types/api/types';
import { fetcher } from './fetcher';
import { API_BASE_URL, endpoints, Endpoint } from './endpoints';

interface UseApiResult<T> {
  data: ApiResponse<T> | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function useSWRApi<T>(
  endpoint: Endpoint,
  search?: string,
  transformData?: (data: ApiResponse<T>) => ApiResponse<T>,
  page?: number
): UseApiResult<T> {
  const endpointUrl =
    typeof endpoint === 'function'
      ? endpoint(page)
      : endpoints[endpoint as keyof typeof endpoints];
  const searchParams = new URLSearchParams();

  if (search) searchParams.set('search', encodeURIComponent(search));
  if (page) searchParams.set('page', page.toString());

  const url = `${API_BASE_URL}${endpointUrl}${
    searchParams.toString() ? `?${searchParams.toString()}` : ''
  }`;

  const { data, error } = useSWR<ApiResponse<T>>(url, fetcher);

  // Apply transformation if defined
  const transformedData = transformData && data ? transformData(data) : data;

  console.log('Fetched Data:', data);
  console.log('Transformed Data:', transformedData);

  return {
    data: transformedData,
    isLoading: !error && !data,
    isError: !!error,
  };
}
