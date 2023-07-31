import styles from './stars.module.css';

function StarBackground() {
  const stars = Array.from({ length: 500 }).map((_, i) => (
    <div key={i} className={styles.star} />
  ));

  return <div className={styles.bg}>{stars}</div>;
}

export default StarBackground;
