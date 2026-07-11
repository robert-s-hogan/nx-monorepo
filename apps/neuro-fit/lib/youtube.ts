// Accepts a raw video ID or any common YouTube URL shape and returns just
// the video ID, so the exercise form can take a pasted URL instead of
// requiring people to dig out the raw ID.
export function extractYouTubeId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Already looks like a bare video ID.
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.slice(1) || null;
    }
    if (url.hostname.includes('youtube.com')) {
      if (url.pathname === '/watch') return url.searchParams.get('v');
      if (url.pathname.startsWith('/embed/')) {
        return url.pathname.replace('/embed/', '');
      }
      if (url.pathname.startsWith('/shorts/')) {
        return url.pathname.replace('/shorts/', '');
      }
    }
  } catch {
    // Not a valid URL — fall through to null.
  }

  return null;
}
