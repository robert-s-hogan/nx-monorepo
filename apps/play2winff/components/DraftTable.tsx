import DraftTableEntry from './DraftTableEntry';

const DraftTable = ({ players, hiddenPlayers, togglePlayerVisibility }) => {
  return (
    <>
      <div className={`bg-viridian grid grid-cols-9 gap-2 h-16 items-center `}>
        <p className="col-span-2 text-center">ADP</p>
        <p className="col-span-7">NAME</p>
      </div>
      {players.map((player) => (
        <DraftTableEntry
          adp={player.adp}
          name={player.name}
          position={player.position}
          playerId={player.player_id}
          hidden={hiddenPlayers[player.player_id]}
          togglePlayerVisibility={togglePlayerVisibility} // Passing down the function
          key={player.player_id}
        />
      ))}
    </>
  );
};

export default DraftTable;
