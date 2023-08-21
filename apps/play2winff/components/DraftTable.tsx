import DraftTableEntry from './DraftTableEntry';

const DraftTable = ({ players, hiddenPlayers, togglePlayerVisibility }) => {
  if (!players) {
    return <div>No players available</div>;
  }

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
        <p className="col-span-5">NAME</p>
        <p className="col-span-2">CHANGE</p>
      </div>
      {players.map((player) => (
        <DraftTableEntry
          player={player}
          hidden={hiddenPlayers[player.player_id]}
          togglePlayerVisibility={togglePlayerVisibility}
          key={player.player_id}
        />
      ))}
    </>
  );
};

export default DraftTable;
