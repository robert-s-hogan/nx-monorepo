import { useState, useEffect } from 'react';

const useDraftedPlayers = (players) => {
  const [draftedPlayers, setDraftedPlayers] = useState({});
  const [showDraftedPlayers, setShowDraftedPlayers] = useState(false);

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
    setDraftedPlayers((prevPlayers) => ({
      ...prevPlayers,
      [playerId]: !prevPlayers[playerId],
    }));
  };

  return {
    draftedPlayers,
    togglePlayerDraftStatus,
    showDraftedPlayers,
    setShowDraftedPlayers,
  };
};

export default useDraftedPlayers;
