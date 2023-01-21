import styles from './react-ui-molecules.module.css';

/* eslint-disable-next-line */
export interface ReactUiMoleculesProps {}

export function ReactUiMolecules(props: ReactUiMoleculesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUiMolecules!</h1>
    </div>
  );
}

export default ReactUiMolecules;
