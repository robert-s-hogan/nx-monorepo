// hooks/useSnapshots.ts
import useSWR from 'swr';

import { ParsedRow, ListType, RankingSnapshot, SnapshotRole } from '../lib/rankings';
import { authedFetch } from '../lib/authedFetch';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useOriginalAndLatest(listType: ListType) {
  const { data, error, mutate } = useSWR<{
    original: RankingSnapshot | null;
    latest: RankingSnapshot | null;
  }>(`/api/snapshots?listType=${listType}`, fetcher);

  return {
    original: data?.original ?? null,
    latest: data?.latest ?? null,
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export async function commitSnapshot(
  rows: ParsedRow[],
  listType: ListType,
  role: SnapshotRole
): Promise<{ id: number } | { error: string }> {
  const res = await authedFetch('/api/snapshots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rows, listType, role }),
  });
  const body = await res.json();
  if (!res.ok) return { error: body.error ?? 'Commit failed' };
  return body;
}
