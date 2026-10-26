import useSWR from 'swr';

// Reads from the public SWAPI mirror at swapi.info (no backend of our own).
// Responses are cached in sessionStorage so revisits in the same tab don't
// refetch, and SWR dedupes cards that share a homeworld.
export const API = 'https://swapi.info/api';

async function fetcher<T>(url: string): Promise<T> {
  try {
    const cached = sessionStorage.getItem(url);
    if (cached) return JSON.parse(cached) as T;
  } catch {
    // storage blocked: just fetch
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} from ${url}`);
  const data = (await res.json()) as T;
  try {
    sessionStorage.setItem(url, JSON.stringify(data));
  } catch {
    // full or blocked: fine without the cache
  }
  return data;
}

/** Fetches `url`, or does nothing while it's null. */
export function useSwapi<T>(url: string | null) {
  return useSWR<T>(url, fetcher, {
    errorRetryCount: 3,
    revalidateOnFocus: false,
    dedupingInterval: 600000,
  });
}
