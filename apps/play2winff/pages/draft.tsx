import { Heading, Section } from '@with-nx/react-ui';
import PlayToWinFFLayout from '../components/PlayToWinFFLayout';
import { useHarrisRankings } from '../hooks/useHarrisRankings';
import useDraftedPlayers from '../hooks/useDraftedPlayers';

import DraftTable from '../components/DraftTable';
import { useState, useEffect } from 'react';

const Draft = () => {
  const { data, isLoading, isError } = useHarrisRankings();
  console.log('Data from the hook:', data);

  const { draftedPlayers, togglePlayerDraftStatus } = useDraftedPlayers(
    data?.players
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data!</p>;

  return (
    <PlayToWinFFLayout className="text-white">
      <Section className="container mx-auto">
        <Heading level={1}>Draft Page</Heading>

        <DraftTable
          players={data}
          hiddenPlayers={draftedPlayers}
          togglePlayerVisibility={togglePlayerDraftStatus} // Use the function from the hook
        />
      </Section>
    </PlayToWinFFLayout>
  );
};

export default Draft;
