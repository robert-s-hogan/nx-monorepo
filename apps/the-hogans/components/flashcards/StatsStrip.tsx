import styles from './Flashcards.module.css';

export function StatsStrip({ stats }: { stats: { label: string; value: string | number }[] }) {
  return (
    <dl className={styles.stats}>
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
