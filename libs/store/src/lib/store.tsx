import styles from './store.module.css';

/* eslint-disable-next-line */
export interface StoreProps {}

export function Store(props: StoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>
    </div>
  );
}

export default Store;
