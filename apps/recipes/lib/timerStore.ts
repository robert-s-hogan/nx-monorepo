// Kitchen timers shared across every recipe page. Each timer stores when it
// ends rather than a countdown, so reloads and locked screens don't drift it.
import { useEffect, useState } from 'react';
import { createLocalStore } from './localStore';

export interface KitchenTimer {
  id: string;
  label: string;
  recipeId: number | null;
  step: number | null;
  /** Total length in seconds, including any "+1 min" added. */
  duration: number;
  /** Epoch ms when it finishes. Ignored while paused. */
  end: number;
  paused: boolean;
  /** Ms left at the moment it was paused. */
  remaining: number;
  /** When the finish was first noticed, so the alarm rings once per finish. */
  doneAt: number | null;
}

export const timerStore = createLocalStore<{ timers: KitchenTimer[] }>('recipes:timers:v1', { timers: [] });

export const remainingMs = (t: KitchenTimer, now: number) => (t.paused ? t.remaining : Math.max(0, t.end - now));
export const isDone = (t: KitchenTimer, now: number) => !t.paused && now >= t.end;
export const progressPct = (t: KitchenTimer, now: number) =>
  isDone(t, now) ? 100 : Math.min(100, Math.max(0, 100 - (remainingMs(t, now) / (t.duration * 1000)) * 100));

/** Finished first, then soonest to finish, then paused. */
export function sortTimers(timers: KitchenTimer[], now: number): KitchenTimer[] {
  const rank = (t: KitchenTimer) => (isDone(t, now) ? 0 : t.paused ? 2 : 1);
  return [...timers].sort((a, b) => rank(a) - rank(b) || remainingMs(a, now) - remainingMs(b, now) || a.end - b.end);
}

function update(id: string, fn: (t: KitchenTimer, now: number) => KitchenTimer) {
  const now = Date.now();
  timerStore.set((s) => ({ timers: s.timers.map((t) => (t.id === id ? fn(t, now) : t)) }));
}

export function startTimer(input: { label: string; seconds: number; recipeId?: number; step?: number }) {
  const now = Date.now();
  const timer: KitchenTimer = {
    id: `${now.toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    label: input.label,
    recipeId: input.recipeId ?? null,
    step: input.step ?? null,
    duration: input.seconds,
    end: now + input.seconds * 1000,
    paused: false,
    remaining: 0,
    doneAt: null,
  };
  timerStore.set((s) => ({ timers: [...s.timers, timer] }));
}

export const addMinute = (id: string) =>
  update(id, (t, now) =>
    t.paused
      ? { ...t, remaining: t.remaining + 60_000, duration: t.duration + 60 }
      : { ...t, end: Math.max(t.end, now) + 60_000, duration: t.duration + 60, doneAt: null }
  );

export const togglePause = (id: string) =>
  update(id, (t, now) =>
    t.paused ? { ...t, paused: false, end: now + t.remaining } : { ...t, paused: true, remaining: Math.max(0, t.end - now) }
  );

export const removeTimer = (id: string) => timerStore.set((s) => ({ timers: s.timers.filter((t) => t.id !== id) }));

export function markDone(ids: string[], now: number) {
  timerStore.set((s) => ({ timers: s.timers.map((t) => (ids.includes(t.id) ? { ...t, doneAt: now } : t)) }));
}

/** Re-renders every `interval` ms while `active`, for live countdowns. */
export function useNow(interval: number, active = true): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!active) return;
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), interval);
    return () => clearInterval(id);
  }, [interval, active]);
  return now;
}
