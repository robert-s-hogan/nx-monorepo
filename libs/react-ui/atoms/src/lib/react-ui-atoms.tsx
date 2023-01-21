import styles from './react-ui-atoms.module.css';

/* eslint-disable-next-line */
export interface ReactUiAtomsProps {}

export function ReactUiAtoms(props: ReactUiAtomsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUiAtoms!</h1>
    </div>
  );
}

export default ReactUiAtoms;
