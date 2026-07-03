interface Props {
  embedUrl: string;
  onClose: () => void;
}

export default function VideoModal({ embedUrl, onClose }: Props) {
  return (
    <>
      <button type="button" className="video-backdrop" onClick={onClose} aria-label="Close video" />
      <div className="video-modal" role="dialog" aria-modal="true" aria-label="Picking guide video">
        <button type="button" className="video-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="video-wrap">
          <iframe
            src={embedUrl}
            title="Picking guide"
            frameBorder={0}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
