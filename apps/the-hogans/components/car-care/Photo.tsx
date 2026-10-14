interface PhotoProps {
  src?: string;
  caption: string;
}

// Static photo from public/car-care/ (see content.ts). Renders nothing
// until a file for this slot has been added, so steps without a photo yet
// just read as text.
export function Photo({ src, caption }: PhotoProps) {
  if (!src) return null;
  return (
    <figure className="photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
