// hooks/useSnapshots.ts
import useSWR from 'swr';

import { ParsedRow, ListType, RankingSnapshot } from '../lib/rankings';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSnapshots() {
  const { data, error, mutate } = useSWR<RankingSnapshot[]>(
    '/api/snapshots',
    fetcher
  );

  return {
    snapshots: data ?? [],
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export async function commitSnapshot(
  rows: ParsedRow[],
  listType: ListType,
  label: string
): Promise<number> {
  const res = await fetch('/api/snapshots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rows, listType, label }),
  });
  const { id } = await res.json();
  return id;
}

export async function deleteSnapshot(id: number): Promise<void> {
  await fetch(`/api/snapshots/${id}`, { method: 'DELETE' });
}
