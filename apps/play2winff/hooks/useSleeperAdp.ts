// hooks/useSleeperAdp.ts
import useSWR from 'swr';

import { ParsedRow } from '../lib/rankings';
import { authedFetch } from '../lib/authedFetch';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSleeperAdpStatus() {
  const { data, error, mutate } = useSWR<{
    count: number;
    lastUpdated: string | null;
  }>('/api/sleeper-adp', fetcher);

  return {
    count: data?.count ?? 0,
    lastUpdated: data?.lastUpdated ?? null,
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export async function replaceSleeperAdp(
  rows: ParsedRow[]
): Promise<{ count: number } | { error: string }> {
  const res = await authedFetch('/api/sleeper-adp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      rows: rows.map((r) => ({
        name_canon: r.name_canon,
        rank: r.rank,
        team: r.team,
      })),
    }),
  });
  const body = await res.json();
  if (!res.ok) return { error: body.error ?? 'Update failed' };
  return body;
}
