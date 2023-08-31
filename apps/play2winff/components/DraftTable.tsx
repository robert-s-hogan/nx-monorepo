import React, { useState, useEffect } from 'react';
import { Flex } from '@with-nx/react-ui';

import useDraftedPlayers from '../hooks/useDraftedPlayers';
import DraftTableEntry from './DraftTableEntry';

const DraftTable = ({
  players,
  hiddenPlayers,
  togglePlayerVisibility,
  showDraftedPlayers,
  setShowDraftedPlayers,
}) => {
  if (!players) {
    return <div>No players available</div>;
  }

  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [showRoundMarkers, setShowRoundMarkers] = useState(true);
  const [pickedCount, setPickedCount] = useState(0);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [sortedPlayers, setSortedPlayers] = useState([]);

  useEffect(() => {
    const getMostRecentRank = (player) => {
      const targetDate = '2023-08-29';
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
    <Flex className="flex-col w-full">
      <div>
        <button onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}>
          Toggle Advanced Settings
        </button>
        {showAdvancedSettings && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={showDraftedPlayers}
                onChange={() => setShowDraftedPlayers(!showDraftedPlayers)}
              />
              Show Drafted Players
            </label>
          </div>
        )}
      </div>
      <div>Players Taken: {pickedCount}</div>
      <div
        className={`bg-viridian grid grid-cols-9 gap-2 h-16 items-center border-sm`}
      >
        <p className="col-span-2 text-center">ADP</p>
        <p className="col-span-4">NAME</p>
        <p className="col-span-3">TAGS</p>
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

        const targetDate = '2023-08-29';
        const playerAdpRaw =
          getRankForDate(player, targetDate)?.toString() || '0';

        return (
          <React.Fragment key={index}>
            {shouldShowRoundMarker(index) && (
              <div className="bg-white text-black pl-24 uppercase font-bold">
                Round {Math.floor(index / ROUND_SIZE) + 1}
              </div>
            )}

            <DraftTableEntry
              player={player}
              hidden={isHidden}
              togglePlayerVisibility={handleToggleVisibility}
              yahooADP={player.yahooADP}
              playerRank={playerAdpRaw}
            />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default DraftTable;
