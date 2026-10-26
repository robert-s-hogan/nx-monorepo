import { useState } from 'react';

// Starfield for planets the API marks as "unknown". Inline styles keep the
// scenes free of the page's CSS, like the rest of this folder.
const STAR_COUNT = 100;

export default function Unknown() {
  // Randomized once, at mount, so re-renders don't reshuffle the stars.
  const [stars] = useState(() =>
    Array.from({ length: STAR_COUNT }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    })),
  );

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'var(--black)',
      }}
    >
      {stars.map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            background: 'var(--white)',
            ...pos,
          }}
        />
      ))}
    </div>
  );
}
