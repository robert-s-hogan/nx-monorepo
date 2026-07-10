// hooks/useLeagues.ts
import useSWR from 'swr';

import { LeagueProfile } from '../lib/leagues';
import { authedFetch } from '../lib/authedFetch';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useLeagues() {
  const { data, error, mutate } = useSWR<LeagueProfile[]>(
    '/api/leagues',
    fetcher
  );

  return {
    leagues: data ?? [],
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export async function createLeague(
  profile: Omit<LeagueProfile, 'id' | 'created_at'>
): Promise<number> {
  const res = await authedFetch('/api/leagues', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });
  const { id } = await res.json();
  return id;
}

export async function updateLeague(
  id: number,
  profile: Omit<LeagueProfile, 'id' | 'created_at'>
): Promise<void> {
  await authedFetch(`/api/leagues/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });
}

export async function deleteLeague(id: number): Promise<void> {
  await authedFetch(`/api/leagues/${id}`, { method: 'DELETE' });
}
