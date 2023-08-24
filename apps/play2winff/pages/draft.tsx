import { Heading, Section, Text } from '@with-nx/react-ui';
import PlayToWinFFLayout from '../components/PlayToWinFFLayout';

import useYahooAdp from '../hooks/useYahooAdp';
import { useHarrisRankings } from '../hooks/useHarrisRankings';
import useDraftedPlayers from '../hooks/useDraftedPlayers';

import DraftTable from '../components/DraftTable';
import { useState, useEffect } from 'react';

const Draft = () => {
  const { data, isLoading, isError } = useHarrisRankings();
  const { data: yahooDataAdp, yahooIsLoading, yahooIsError } = useYahooAdp();
  const { draftedPlayers, togglePlayerDraftStatus } = useDraftedPlayers(
    data?.players
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data!</p>;

  const mergedData = data?.map((player) => {
    const yahooPlayer = yahooDataAdp?.find(
      (yPlayer) => yPlayer.name === player.name
    );
    return {
      ...player,
      yahooADP: yahooPlayer || { rank: Number.MAX_SAFE_INTEGER },
    };
  });

  return (
    <PlayToWinFFLayout
      className="text-white"
      title="Play2WinFF Draft Dominator"
    >
      <Section className="container mx-auto">
        <Heading level={1}>Play2WinFF Draft Dominator</Heading>
        <Heading level={2}>
          Master Your 12-Man Yahoo PPR Draft with Play2WinFF
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
        <DraftTable
          players={mergedData}
          hiddenPlayers={draftedPlayers}
          togglePlayerVisibility={togglePlayerDraftStatus}
        />
      </Section>
    </PlayToWinFFLayout>
  );
};

export default Draft;
