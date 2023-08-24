import { useState } from 'react';
import {
  DollarSign,
  Minus,
  Tag,
  TrendingUp,
  TrendingDown,
} from '@with-nx/icons';
import { Flex } from '@with-nx/react-ui';

const DraftTableEntry = ({
  player,
  hidden,
  togglePlayerVisibility,
  yahooADP,
}) => {
  const [show, toggleShow] = useState(true);

  const handleDelete = () => {
    console.log('Deleting player:', player.player_id);
    toggleShow(false);
    togglePlayerVisibility(player.player_id);
  };

  const rankingHistory = player.ranking_history;
  const latestRank = rankingHistory[rankingHistory.length - 1]?.rank;

  // Convert adp to integer. If ADP is missing/invalid, return null.
  function adpToInt(adp) {
    if (!adp) {
      console.error('Invalid ADP value:', adp);
      return null;
    }
    return (Math.floor((adp - 1) / 12) + 1) * 12 + (((adp - 1) % 12) + 1);
  }

  function intToAdpString(value) {
    const round = Math.floor(value / 12) + 1;
    const pick = value % 12 || 0; // Handle the case where pick number can be 12
    return `${round}.${pick}`;
  }

  const harrisInt = latestRank; // already a number, no conversion required
  const yahooInt = yahooADP?.rank || null;

  // Ensure both ADP values are valid before calculating the difference.
  const difference = yahooInt && harrisInt ? yahooInt - harrisInt : null;

  // Base the checks on the difference value.
  const isValuePick = difference !== null && difference >= 12;
  const isOverPriced = difference !== null && difference <= -12;

  console.log('yahooADP:', yahooADP);

  console.log('harrisInt:', harrisInt);
  console.log('yahooInt:', yahooInt);
  console.log('difference:', difference);

  return (
    <div>
      {show && !hidden && (
        <div
          className={`grid grid-cols-9 gap-2 h-16 items-center cursor-pointer md:hover:bg-viridian md:hover:border-gunmetal md:hover:border border-gunmetal border-b border-opacity-10"
          ${player.position === 'QB' && 'bg-qb'}
          ${player.position === 'RB' && 'bg-rb'}
          ${player.position === 'WR' && 'bg-wr'}
          ${player.position === 'TE' && 'bg-te'}
          ${player.position === 'PK' && 'bg-pk'}
          ${player.position === 'DEF' && 'bg-def'}`}
          onClick={handleDelete}
        >
          <p className="col-span-2 text-center">{intToAdpString(harrisInt)}</p>
          <p className="col-span-5">{player.name}</p>
          <p
            className={`col-span-2  ${
              isValuePick
                ? 'text-green-500'
                : isOverPriced
                ? 'text-red-500'
                : ''
            }`}
          >
            <Flex className="w-full justify-center lg:justify-start">
              {isValuePick && <Tag className="h-8" />}
              {isOverPriced && <DollarSign className="h-8" />}
            </Flex>
          </p>
        </div>
      )}
    </div>
  );
};

export default DraftTableEntry;
