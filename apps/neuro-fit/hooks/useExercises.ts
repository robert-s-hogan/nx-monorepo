// hooks/useExercises.ts
import useSWR from 'swr';

import type { Exercise, ExerciseInput } from '../types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useExercises() {
  const { data, error, mutate } = useSWR<Exercise[]>('/api/exercises', fetcher);

  return {
    exercises: data ?? [],
    isLoading: !data && !error,
    isError: error,
    refresh: mutate,
  };
}

export async function createExercise(input: ExerciseInput): Promise<number> {
  const res = await fetch('/api/exercises', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const { id } = await res.json();
  return id;
}

export async function updateExercise(
  id: number,
  input: ExerciseInput
): Promise<void> {
  await fetch(`/api/exercises/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export async function deleteExercise(id: number): Promise<void> {
  await fetch(`/api/exercises/${id}`, { method: 'DELETE' });
}
