// useDraftedPlayers.js
import { useState, useEffect } from 'react';

const useDraftedPlayers = (players) => {
  const [draftedPlayers, setDraftedPlayers] = useState({});

  useEffect(() => {
    if (players) {
      const initialDraftedPlayers = players.reduce((acc, player) => {
        acc[player.player_id] = false;
        return acc;
      }, {});
      setDraftedPlayers(initialDraftedPlayers);
    }
  }, [players]);

  const togglePlayerDraftStatus = (playerId) => {
    console.log('Toggling draft status for player:', playerId);

    setDraftedPlayers({
      ...draftedPlayers,
      [playerId]: !draftedPlayers[playerId],
    });
  };

  return {
    draftedPlayers,
    togglePlayerDraftStatus,
  };
};

export default useDraftedPlayers;
