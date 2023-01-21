import styles from './react-ui-organisms.module.css';

/* eslint-disable-next-line */
export interface ReactUiOrganismsProps {}

export function ReactUiOrganisms(props: ReactUiOrganismsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUiOrganisms!</h1>
    </div>
  );
}

export default ReactUiOrganisms;
