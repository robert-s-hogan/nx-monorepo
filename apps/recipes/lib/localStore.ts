// Tiny localStorage-backed store for per-device cooking state (timers, checked
// ingredients, current step). Read with useLocalStore; the server render always
// sees `initial`, and the client swaps in the saved value after hydration.
import { useSyncExternalStore } from 'react';

export interface LocalStore<T extends object> {
  get: () => T;
  set: (update: (state: T) => T) => void;
  subscribe: (listener: () => void) => () => void;
  initial: T;
}

export function createLocalStore<T extends object>(key: string, initial: T): LocalStore<T> {
  let state = initial;
  let loaded = false;
  const listeners = new Set<() => void>();

  function read() {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) state = { ...initial, ...JSON.parse(raw) };
    } catch {
      // Private mode or corrupt data — fall back to the initial state.
    }
  }

  function load() {
    if (loaded || typeof window === 'undefined') return;
    loaded = true;
    read();
    // Keep two open tabs in step (e.g. a timer started on another recipe).
    window.addEventListener('storage', (e) => {
      if (e.key !== key) return;
      read();
      listeners.forEach((l) => l());
    });
  }

  return {
    initial,
    get() {
      load();
      return state;
    },
    set(update) {
      load();
      state = update(state);
      try {
        window.localStorage.setItem(key, JSON.stringify(state));
      } catch {
        // Storage full or blocked — state still updates for this tab.
      }
      listeners.forEach((l) => l());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function useLocalStore<T extends object>(store: LocalStore<T>): T {
  return useSyncExternalStore(store.subscribe, store.get, () => store.initial);
}
