import styles from './analytics.module.css';

/* eslint-disable-next-line */
export interface AnalyticsProps {}

export function Analytics(props: AnalyticsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Analytics!</h1>
    </div>
  );
}

export default Analytics;
