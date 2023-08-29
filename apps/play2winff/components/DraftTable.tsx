import { useState } from 'react';
import DraftTableEntry from './DraftTableEntry';

const DraftTable = ({ players, hiddenPlayers, togglePlayerVisibility }) => {
  if (!players) {
    return <div>No players available</div>;
  }

  const handleToggleVisibility = (playerId) => {
    if (hiddenIds.includes(playerId)) {
      setHiddenIds((prevState) => prevState.filter((id) => id !== playerId));
    } else {
      setHiddenIds((prevState) => [...prevState, playerId]);
    }
    togglePlayerVisibility(playerId);
  };

  const [hiddenIds, setHiddenIds] = useState([]);

  players.sort((a, b) => {
    const rankA =
      a.ranking_history.find((entry) => entry.date === '2023-08-21')?.rank ||
      Number.MAX_SAFE_INTEGER;
    const rankB =
      b.ranking_history.find((entry) => entry.date === '2023-08-21')?.rank ||
      Number.MAX_SAFE_INTEGER;
    return rankA - rankB;
  });

  return (
    <>
      <div className={`bg-viridian grid grid-cols-9 gap-2 h-16 items-center `}>
        <p className="col-span-2 text-center">ADP</p>
        <p className="col-span-4">NAME</p>
        <p className="col-span-3">TAGS</p>
      </div>
      {players.map((player, index) => (
        <DraftTableEntry
          key={index}
          player={player}
          hidden={hiddenIds.includes(player.player_id)}
          togglePlayerVisibility={togglePlayerVisibility}
          yahooADP={player.yahooADP}
        />
      ))}
    </>
  );
};

export default DraftTable;
