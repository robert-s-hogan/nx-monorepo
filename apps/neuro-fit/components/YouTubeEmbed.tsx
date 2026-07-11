interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  startSeconds?: number | null;
  endSeconds?: number | null;
}

// Plain iframe embed — deliberately NOT the YouTube IFrame Player JS API.
// That was tried first for more precise start/end/loop control, but its
// onReady/onError callbacks never fired reliably (confirmed: hung
// indefinitely even past 20s in testing, and failed differently again on a
// real device) — the underlying cross-origin iframe it creates internally
// doesn't reliably complete its handshake. A bare iframe with URL params is
// less precise (loop=1 + playlist=videoId loops the *whole* video, not
// guaranteed to respect a clipped start/end range exactly) but is the
// version already proven to actually play real video, so reliability wins
// over precision here.
const YouTubeEmbed = ({
  videoId,
  title,
  startSeconds,
  endSeconds,
}: YouTubeEmbedProps) => {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
  });
  if (startSeconds) params.set('start', String(startSeconds));
  if (endSeconds) params.set('end', String(endSeconds));
  if (startSeconds || endSeconds) {
    // loop=1 only takes effect on a single video when `playlist` is set to
    // that same video's ID — an undocumented-but-required YouTube quirk.
    params.set('loop', '1');
    params.set('playlist', videoId);
  }

  return (
    <div className="space-y-2">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* Always-visible escape hatch — if the embed silently fails for any
          reason (network, embedding disabled, ad blocker, etc.) there's no
          reliable way to detect that from a bare iframe, so just always
          offer a direct link instead of trying to catch every failure mode. */}
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noreferrer"
        className="text-primary text-xs underline block text-center"
      >
        Watch on YouTube instead
      </a>
    </div>
  );
};

export default YouTubeEmbed;
