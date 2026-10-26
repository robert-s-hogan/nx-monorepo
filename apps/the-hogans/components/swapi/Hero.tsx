import styles from './Swapi.module.css';

// "STAR WARS" spelled in colored tiles.
const WORDS = [
  [
    ['S', 'sky'],
    ['T', 'yellow'],
    ['A', 'orange'],
    ['R', 'red'],
  ],
  [
    ['W', 'pink'],
    ['A', 'green'],
    ['R', 'dark-blue'],
    ['S', 'purple'],
  ],
];

export function Hero() {
  return (
    <h1 className={styles.hero} aria-label="Star Wars">
      {WORDS.map((word, w) => (
        <span key={w} className={styles.word} aria-hidden="true">
          {word.map(([letter, color], i) => (
            <span
              key={i}
              className={styles.letter}
              style={{ background: `var(--${color})` }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
