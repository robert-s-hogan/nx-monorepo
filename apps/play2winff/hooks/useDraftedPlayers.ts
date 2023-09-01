import { useState, useEffect } from 'react';

const useDraftedPlayers = (players) => {
  const [draftedPlayers, setDraftedPlayers] = useState([]);
  const [showDraftedPlayers, setShowDraftedPlayers] = useState(false);

  useEffect(() => {
    if (players) {
      const initialDraftedPlayers = players.map((player) => ({
        ...player,
        isDrafted: false,
      }));
      setDraftedPlayers(initialDraftedPlayers);
    }
  }, [players]);

  const togglePlayerDraftStatus = (playerId) => {
    console.log('Before: ', draftedPlayers);

    setDraftedPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.player_id === playerId
          ? { ...player, isDrafted: !player.isDrafted }
          : player
      )
    );

    console.log('After: ', draftedPlayers);
  };

  return {
    draftedPlayers,
    togglePlayerDraftStatus,
    showDraftedPlayers,
    setShowDraftedPlayers,
  };
};

export default useDraftedPlayers;
