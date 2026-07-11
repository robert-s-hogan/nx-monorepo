interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

// Plain responsive iframe embed — youtube-nocookie.com avoids setting
// tracking cookies until the visitor actually presses play. No new
// dependency needed for this.
const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
