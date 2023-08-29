import { Button, Heading, Section, Text } from '@with-nx/react-ui';
import PlayToWinFFLayout from '../components/PlayToWinFFLayout';
import useDraftedPlayers from '../hooks/useDraftedPlayers';
import DraftTable from '../components/DraftTable';
import { useState, useEffect } from 'react';
import LegendSidebar from '../components/LegendSidebar';

// Import the new hook
import useMergedData from '../hooks/useMergedData';

const Draft = () => {
  // Use the new hook to fetch the merged data
  const { data: mergedData, isLoading, isError } = useMergedData();

  const { draftedPlayers, togglePlayerDraftStatus } = useDraftedPlayers(
    mergedData?.players
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data!</p>;

  return (
    <PlayToWinFFLayout
      className="text-white"
      title="Play2WinFF Draft Dominator"
    >
      <Section className="container mx-auto">
        <Heading level={1}>Play2WinFF Draft Dominator</Heading>
        <Heading level={2}>
          Master Your 12-Man Yahoo PPR Draft with Play2WinFF{' '}
        </Heading>
        <Text className="text-lg my-4">
          <span className="hidden md:contents">
            Dive into the ultimate draft advantage with Play2WinFF.{' '}
          </span>
          Our tool contrasts expert Harris rankings against popular Yahoo PPR
          picks for 12-man leagues.{' '}
          <span className="hidden md:contents">
            Spot the diamonds in the rough and sidestep those potential
            pitfalls. Elevate your fantasy football strategy, identify
            high-value players, and draft with confidence.{' '}
          </span>
          Get ready to not just play, but to play to win!
        </Text>
        <Button
          className="btn-primary mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Icon Legend
        </Button>
        <DraftTable
          players={mergedData}
          hiddenPlayers={draftedPlayers}
          togglePlayerVisibility={togglePlayerDraftStatus}
        />
      </Section>
      <LegendSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </PlayToWinFFLayout>
  );
};

export default Draft;
