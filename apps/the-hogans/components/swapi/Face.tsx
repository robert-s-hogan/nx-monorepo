import { useId } from 'react';

import styles from './Swapi.module.css';

// The round face in the card's corner. Skin and eye colors come from the
// API ("fair", "blue, grey"); single colors map to the --<color> variables
// on the page root, several become a gradient.
const toColors = (value: string) =>
  value
    .split(',')
    .map((c) => c.trim().replace(/ /g, '-'))
    .flatMap((c) => (c === 'metal' ? ['silver', 'black'] : [c]));

function Gradient({ id, colors }: { id: string; colors: string[] }) {
  return (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      {colors.map((color, i) => (
        <stop
          key={i}
          offset={`${(i / (colors.length - 1)) * 100}%`}
          style={{ stopColor: color }}
        />
      ))}
    </linearGradient>
  );
}

export function Face({ skin, eyes }: { skin: string; eyes: string }) {
  const uid = useId().replace(/:/g, '');
  const skinColors = toColors(skin);
  const eyeColors = toColors(eyes);
  const skinFill =
    skinColors.length > 1 ? `url(#skin-${uid})` : `var(--${skinColors[0]})`;
  const eyeFill =
    eyeColors.length > 1 ? `url(#eye-${uid})` : `var(--${eyeColors[0]})`;

  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.face}
      aria-hidden="true"
    >
      <defs>
        {skinColors.length > 1 && (
          <Gradient id={`skin-${uid}`} colors={skinColors} />
        )}
        {eyeColors.length > 1 && (
          <Gradient id={`eye-${uid}`} colors={eyeColors} />
        )}
      </defs>
      <circle cx="764" cy="944" r="240" fill={skinFill} />
      <circle cx="694" cy="904" r="100" fill="white" />
      <circle cx="834" cy="904" r="100" fill="white" />
      <circle cx="694" cy="904" r="20" fill={eyeFill} />
      <circle cx="844" cy="904" r="20" fill={eyeFill} />
      <ellipse rx="20" ry="40" cx="769" cy="1054" fill="crimson" />
    </svg>
  );
}
