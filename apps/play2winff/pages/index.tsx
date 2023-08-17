import styles from './index.module.css';
import RisersAndFallers from '../components/RisersAndFallers';
import { useADPData } from '../hooks/useADPData';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const { players, isLoading, isError } = useADPData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) return <div>An error occurred</div>;

  return (
    <div className="container mx-auto">
      <RisersAndFallers players={players!} />
    </div>
  );
  // return <pre className={styles.pre}>{JSON.stringify(players, null, 2)}</pre>;
}

export default Index;
