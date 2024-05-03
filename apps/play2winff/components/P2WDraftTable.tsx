import React, { useState, useEffect } from 'react';
import { Flex, Grid } from '@with-nx/react-ui';
import { Button, Text } from '@with-nx/generic-ui';

import useDraftedPlayers from '../hooks/useDraftedPlayers';
import DraftTableEntry from './P2WDraftTableEntry';

const P2WDraftTable = ({
  players,
  hiddenPlayers,
  togglePlayerVisibility,
  showDraftedPlayers,
  setShowDraftedPlayers,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  if (!players) {
    return <div>No players available</div>;
  }

  const { draftedPlayers, togglePlayerDraftStatus } =
    useDraftedPlayers(players);

  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [showRoundMarkers, setShowRoundMarkers] = useState(true);
  const [pickedCount, setPickedCount] = useState(0);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [sortedPlayers, setSortedPlayers] = useState([]);

  useEffect(() => {
    const getMostRecentRank = (player) => {
      const targetDate = '2023-09-01';
      // Filter rankings up to targetDate and then retrieve the most recent
      const sortedRankHistory = player.ranking_history
        .filter((entry) => new Date(entry.date) <= new Date(targetDate))
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ); // most recent first

      return sortedRankHistory.length
        ? sortedRankHistory[0].rank
        : Number.MAX_SAFE_INTEGER;
    };
    const sorted = [...players].sort(
      (a, b) => getMostRecentRank(a) - getMostRecentRank(b)
    );
    setSortedPlayers(sorted);
  }, [players]);

  const handleToggleVisibility = (playerId) => {
    if (hiddenIds.includes(playerId)) {
      setHiddenIds((prevState) => prevState.filter((id) => id !== playerId));
      setPickedCount((prevCount) => prevCount - 1);
    } else {
      setHiddenIds((prevState) => [...prevState, playerId]);
      setPickedCount((prevCount) => prevCount + 1);
    }
    togglePlayerVisibility(playerId);
  };

  const ROUND_SIZE = 12;

  const shouldShowRoundMarker = (index) => {
    return index % ROUND_SIZE === 0;
  };

  return (
    <Flex className="flex-col w-full border-accent border-2">
      <Grid className="grid-cols-2 lg:grid-cols-3 bg-secondary py-2 gap-6 justify-between">
        <Button
          className="hidden lg:block w-24 md:w-48 ml-2"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          theme="primary"
          text="Icon Legend"
        />

        <label className="py-2 text-center flex">
          <input
            type="checkbox"
            checked={showDraftedPlayers}
            className="ml-4"
            onChange={() => setShowDraftedPlayers(!showDraftedPlayers)}
          />
          <Text className="ml-1" text="Show&nbsp;Drafted&nbsp;" />
          <Text className="hidden md:flex" text="Players" />
        </label>
        <div className="py-2 mr-2 md:mr-2 text-right md:text-center">
          <Text className="hidden md:inline-flex" text="Total Drafted&nbsp;" />
          <Text className="inline-flex md:hidden" text="Taken&nbsp;" />
          {pickedCount})
        </div>
      </Grid>
      <div
        className={`bg-primary grid grid-cols-9 gap-2 h-16 items-center border-sm`}
      >
        <Text className="col-span-2 text-center" text="ADP" />
        <Text className="col-span-4" text="NAME" />
        <Text className="col-span" text="TAGS " />
      </div>
      {sortedPlayers.map((player, index) => {
        const isHidden = hiddenIds.includes(player.player_id);

        // Don't render if the player is drafted and showDraftedPlayers is false
        if (isHidden && !showDraftedPlayers) {
          return null;
        }
        const getRankForDate = (player, targetDate) => {
          const rankEntry = player.ranking_history.find(
            (entry) => entry.date === targetDate
          );
          return rankEntry ? rankEntry.rank : null;
        };

        const targetDate = '2023-09-01';
        const playerAdpRaw =
          getRankForDate(player, targetDate)?.toString() || '0';

        return (
          <React.Fragment key={index}>
            {shouldShowRoundMarker(index) && (
              <div className="pl-24 uppercase font-bold">
                <Text text={`Round ${Math.floor(index / ROUND_SIZE) + 1}`} />
              </div>
            )}

            <DraftTableEntry
              key={player.player_id}
              player={player}
              hidden={isHidden}
              togglePlayerVisibility={handleToggleVisibility}
              draftedPlayers={draftedPlayers}
              togglePlayerDraftStatus={togglePlayerDraftStatus}
              yahooADP={player.yahooADP}
              playerRank={playerAdpRaw}
            />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default P2WDraftTable;
