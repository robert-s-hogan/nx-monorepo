import { Button, Flex, Heading, Section, Text } from '@with-nx/react-ui';

import PlayToWinFFLayout from '../components/PlayToWinFFLayout';
import useDraftedPlayers from '../hooks/useDraftedPlayers';
import DraftTable from '../components/DraftTable';
import { useState, useEffect } from 'react';
import LegendSidebar from '../components/LegendSidebar';
import Roster from '../components/Roster';

// Import the new hook
import useMergedData from '../hooks/useMergedData';

const Draft = () => {
  // Use the new hook to fetch the merged data
  const { data: mergedData, isLoading, isError } = useMergedData();

  const {
    draftedPlayers,
    togglePlayerDraftStatus,
    showDraftedPlayers,
    setShowDraftedPlayers,
  } = useDraftedPlayers(mergedData?.players);

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
        <Flex
          className={`flex-col flex-grow ${isSidebarOpen ? 'w-3/4' : 'w-full'}`}
        >
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
        </Flex>
      </Section>

      <Section className="container mx-auto flex">
        {/* Sidebar */}
        <Flex
          className={`transition-all duration-300 ease-in-out overflow-hidden h-full ${
            isSidebarOpen ? 'max-w-full md:max-w-sm' : 'max-w-0'
          }`}
          // style={{ willChange: 'max-width' }}
        >
          <LegendSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        </Flex>

        {/* Main content */}
        <Flex
          className={`flex-grow transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'w-3/4' : 'w-full'
          }`}
        >
          <DraftTable
            players={mergedData}
            hiddenPlayers={draftedPlayers}
            togglePlayerVisibility={togglePlayerDraftStatus}
            showDraftedPlayers={showDraftedPlayers}
            setShowDraftedPlayers={setShowDraftedPlayers}
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </Flex>
        {/* <Roster draftedPlayers={draftedPlayers} /> */}
      </Section>
    </PlayToWinFFLayout>
  );
};

export default Draft;
