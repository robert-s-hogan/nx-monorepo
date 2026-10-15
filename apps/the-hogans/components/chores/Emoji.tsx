import { useState } from 'react';

// Emoji are drawn as Twemoji images rather than font glyphs so the printed
// sheet comes out in color everywhere, instead of as empty boxes on
// printers/PDF engines without a color emoji font.
const TWEMOJI = 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg';

function codepoints(emoji: string) {
  const cps = Array.from(emoji).map((ch) => ch.codePointAt(0)!.toString(16));
  // Twemoji file names drop the variation selector except inside ZWJ sequences.
  return (emoji.includes('‍') ? cps : cps.filter((cp) => cp !== 'fe0f')).join('-');
}

export function Emoji({ emoji, className }: { emoji: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!emoji.trim()) return null;
  if (failed) {
    return (
      <span className={className} aria-hidden="true">
        {emoji}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={`${TWEMOJI}/${codepoints(emoji.trim())}.svg`}
      alt=""
      aria-hidden="true"
      onError={() => setFailed(true)}
    />
  );
}
