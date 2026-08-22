// hooks/useCustomTags.ts
import useSWR from 'swr';

import { authedFetch } from '../lib/authedFetch';
import type { CustomTag } from '../lib/tags';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Shared tag-library list — every PlayerTagPicker instance in the table
// reads the same SWR cache key, so creating a tag in one row's popover
// updates the library everywhere without extra plumbing.
export function useCustomTags() {
  const { data, error, mutate } = useSWR<CustomTag[]>('/api/custom-tags', fetcher);
  return {
    tags: data ?? [],
    isLoading: !data && !error,
    refresh: mutate,
  };
}

export async function createTag(
  name: string,
  icon: string
): Promise<CustomTag | { error: string }> {
  const res = await authedFetch('/api/custom-tags', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, icon }),
  });
  const body = await res.json();
  if (!res.ok) return { error: body.error ?? 'Failed to create tag' };
  return body;
}

export async function toggleTagForPlayer(
  name: string,
  tagId: number
): Promise<CustomTag[]> {
  const res = await authedFetch('/api/player-tags', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, tagId }),
  });
  return res.json();
}
