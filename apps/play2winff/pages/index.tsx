import { useState, useEffect } from 'react';
import DraftConfigModal from '../components/DraftConfigModal'; // Import the modal component
import styles from './index.module.css';
import PlayersWithHighVariability from '../components/PlayersWithHighVariability';
import { useADPData } from '../hooks/useADPData';
import { Button, Grid, Heading, Section, Text } from '@with-nx/react-ui';
import Image from 'next/image';

import PlayToWinFFLayout from '../components/PlayToWinFFLayout';
import EspnNewsFeed from '../components/EspnNewsFeed';

export function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [news, setNews] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const { adpPlayers, isADPLoading, isADPError } = useADPData();

  if (isADPLoading) {
    return <div>Loading...</div>;
  }
  if (isADPError) return <div>An error occurred</div>;

  return (
    <PlayToWinFFLayout>
      <DraftConfigModal isOpen={isModalOpen} onClose={handleModalClose} />

      <Grid className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section className="text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src="https://rshogan.imgix.net/projects/play2winff/play2winff_logo_nobg.png"
              height={300}
              width={300}
              alt="Play2Win Fantasy Football Logo"
            />
          </div>

          <Heading level={1}>Play2WinFF</Heading>
          <Text className="text-lg max-w-xl mx-auto px-6">
            Play 2 Win Fantasy Football brings you the latest news, strategies,
            and tools for success. Explore the mock draft wizard and stay ahead
            of the competition.
          </Text>
          <Button
            onClick={handleModalOpen}
            className="bg-viridian px-3 py-2 rounded-lg text-white"
          >
            Start Draft Wizard
          </Button>
        </Section>
        <EspnNewsFeed />

        <Section className="pb-0">
          <PlayersWithHighVariability players={adpPlayers!} />
        </Section>
      </Grid>
    </PlayToWinFFLayout>
  );
}

export default Index;
