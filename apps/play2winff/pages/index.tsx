import styles from './index.module.css';
import PlayersWithHighVariability from '../components/PlayersWithHighVariability';
import { useADPData } from '../hooks/useADPData';
import { Grid, Heading, Section, Text } from '@with-nx/react-ui';

import PlayToWinFFLayout from '../components/PlayToWinFFLayout';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const { adpPlayers, isADPLoading, isADPError } = useADPData();

  if (isADPLoading) {
    return <div>Loading...</div>;
  }
  if (isADPError) return <div>An error occurred</div>;

  return (
    <PlayToWinFFLayout>
      <Section className="text-center">
        <Heading level={1}>Play2WinFF</Heading>
        <Text className="text-lg max-w-xl mx-auto px-6">
          Play 2 Win Fantasy Football brings you the latest news, strategies,
          and tools for success. Explore the mock draft wizard and stay ahead of
          the competition.
        </Text>
      </Section>
      <Section className="pb-0">
        {/* hero section */}
        <PlayersWithHighVariability players={adpPlayers!} />
      </Section>
    </PlayToWinFFLayout>
  );
}

export default Index;
