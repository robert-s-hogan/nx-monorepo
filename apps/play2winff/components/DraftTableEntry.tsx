import { useState } from 'react';
import { TrendingUp, TrendingDown } from '@with-nx/icons';

const DraftTableEntry = ({
  player, // pass the entire player object instead of individual properties
  hidden,
  togglePlayerVisibility,
}) => {
  const [show, toggleShow] = useState(true);

  const handleDelete = () => {
    console.log('Deleting player:', player.player_id);

    toggleShow(false);
    togglePlayerVisibility(player.player_id);
  };

  const rankingHistory = player.ranking_history;
  const latestRank =
    rankingHistory[rankingHistory.length - 1]?.rank || player.adp;
  const oldestRank = rankingHistory[0]?.rank || player.adp;

  const rankDifference = latestRank - oldestRank;

  let rankIcon;
  if (latestRank < oldestRank) {
    rankIcon = (
      <span className="flex space-x-2 text-green-500">
        <TrendingUp />
        <span>{` ${Math.abs(rankDifference)}`}</span>
        {/* Display the positive difference */}
      </span>
    );
  } else if (latestRank > oldestRank) {
    rankIcon = (
      <span className="flex space-x-2 text-red-500">
        <TrendingDown />
        <span>{` ${rankDifference}`}</span>
      </span>
    );
  } else {
    rankIcon = <span className="text-custom-black">-</span>;
  }

  return (
    <div>
      {show && !hidden && (
        <div
          className={`grid grid-cols-9 gap-2 h-12 items-center cursor-pointer md:hover:bg-gray-100 border-gunmetal border-b border-opacity-10"
          ${player.position === 'QB' && 'bg-red-400'}
          ${player.position === 'RB' && 'bg-blue-300'}
          ${player.position === 'WR' && 'bg-green-300'}
          ${player.position === 'TE' && 'bg-yellow-400'}
          ${player.position === 'PK' && 'bg-pink-400'}
          ${player.position === 'DEF' && 'bg-purple-400'}`}
          onClick={handleDelete} // Added onClick event listener
        >
          <p className="col-span-2 text-center text-black-custom">
            {Math.floor(latestRank)} {/* add the rank icon here */}
          </p>
          <p className="col-span-5 text-black-custom">{player.name}</p>
          <p className="col-span-2">{rankIcon}</p>
        </div>
      )}
    </div>
  );
};

export default DraftTableEntry;
