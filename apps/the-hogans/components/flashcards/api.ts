// Browser side of pages/api/flashcards. Every call carries the session's
// token (useAuthedFetch) and the local start of today, so "due today" and
// the daily limits follow the person's own clock, with Anki's 4am rollover.
import { useEffect, useState } from 'react';
import { useAuth, useAuthedFetch } from '@with-nx/auth';

const BASE = '/api/flashcards';
const ROLLOVER_HOUR = 4;

export function localDayStart(now = new Date()): Date {
  const d = new Date(now);
  d.setHours(ROLLOVER_HOUR, 0, 0, 0);
  if (now < d) d.setDate(d.getDate() - 1);
  return d;
}

function withDay(path: string) {
  const sep = path.includes('?') ? '&' : '?';
  return `${BASE}${path}${sep}dayStart=${encodeURIComponent(localDayStart().toISOString())}`;
}

export type Api = ReturnType<typeof useApi>;

export function useApi() {
  const authedFetch = useAuthedFetch();

  const call = async <T>(method: string, path: string, body?: unknown, raw?: BodyInit): Promise<T> => {
    const res = await authedFetch(withDay(path), {
      method,
      headers: raw ? undefined : body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
      body: raw ?? (body !== undefined ? JSON.stringify(body) : undefined),
    });
    if (!res.ok) {
      let message = `Request failed (${res.status})`;
      try {
        message = ((await res.json()) as { error?: string }).error ?? message;
      } catch {
        // not JSON
      }
      throw new Error(message);
    }
    if (res.status === 204) return undefined as T;
    return (await res.json()) as T;
  };

  return {
    get: <T>(path: string) => call<T>('GET', path),
    post: <T>(path: string, body?: unknown) => call<T>('POST', path, body ?? {}),
    patch: <T>(path: string, body: unknown) => call<T>('PATCH', path, body),
    del: <T = void>(path: string) => call<T>('DELETE', path),
    /** Raw body upload (CSV text, media files). */
    upload: <T>(path: string, body: BodyInit) => call<T>('POST', path, undefined, body),
    /** For file downloads. */
    fetchRaw: (path: string) => authedFetch(withDay(path)),
  };
}

// ---- session ---------------------------------------------------------------

interface Session {
  email: string;
  mediaToken: string;
}

let sessionCache: { email: string; promise: Promise<Session> } | null = null;

/**
 * Sets the person up on first visit and gets the signature that media URLs
 * need. Cached for the page's lifetime per signed-in email.
 */
export function useFlashcardsSession(): { session: Session | null; error: string | null } {
  const { user } = useAuth();
  const api = useApi();
  const email = user?.email?.toLowerCase() ?? null;
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) return;
    if (!sessionCache || sessionCache.email !== email) {
      const promise = api.get<Session>('/session');
      sessionCache = { email, promise };
      promise.catch(() => {
        if (sessionCache?.promise === promise) sessionCache = null;
      });
    }
    let cancelled = false;
    sessionCache.promise.then(
      (s) => !cancelled && setSession(s),
      (e: Error) => !cancelled && setError(e.message),
    );
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return { session, error };
}

export function mediaUrl(token: string, name: string): string {
  return `${BASE}/media/${encodeURIComponent(name)}?${token}`;
}

/** Loads something once the session is ready, with loading/error state. */
export function useLoad<T>(load: () => Promise<T>, deps: unknown[]) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(0);
  useEffect(() => {
    let cancelled = false;
    setError(null);
    load().then(
      (d) => !cancelled && setData(d),
      (e: Error) => !cancelled && setError(e.message),
    );
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, version]);
  return { data, setData, error, reload: () => setVersion((v) => v + 1) };
}
