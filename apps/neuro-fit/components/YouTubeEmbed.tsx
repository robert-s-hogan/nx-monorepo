import { useEffect, useRef } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  startSeconds?: number | null;
  endSeconds?: number | null;
}

// Minimal shape of the YouTube IFrame Player API we actually use — avoids
// pulling in a full @types/youtube dependency for a handful of calls.
interface YTPlayer {
  destroy(): void;
  mute(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  playVideo(): void;
}

interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement,
        config: {
          videoId: string;
          playerVars: Record<string, number | string>;
          events: {
            onReady?: (event: YTPlayerEvent) => void;
            onStateChange?: (event: YTPlayerEvent) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Loaded once per page, shared by every embed instance.
let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  });

  return apiPromise;
}

// Uses the real YouTube IFrame Player API (not just a bare <iframe> with URL
// params) so we get reliable programmatic control: always muted — this app
// is meant to play under music from another app, not compete with it — and
// a clip that actually loops between start/end rather than just starting
// there once. A plain iframe embed's loop=1 param doesn't reliably respect
// a clipped range; seeking back to `start` on ENDED does.
const YouTubeEmbed = ({
  videoId,
  title,
  startSeconds,
  endSeconds,
}: YouTubeEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current || !window.YT) return;

      const playerVars: Record<string, number | string> = {
        autoplay: 1,
        mute: 1,
        playsinline: 1,
        rel: 0,
      };
      if (startSeconds) playerVars.start = startSeconds;
      if (endSeconds) playerVars.end = endSeconds;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars,
        events: {
          onReady: (event) => {
            // Belt-and-suspenders: mute() explicitly rather than trusting
            // the mute=1 playerVar alone, and kick off autoplay.
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (window.YT && event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(startSeconds ?? 0, true);
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, startSeconds, endSeconds]);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        aria-label={title}
      />
    </div>
  );
};

export default YouTubeEmbed;
