import { useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  Flag,
  FileMinus,
  Injury,
  Moon,
  RotateCw,
  RefreshCw,
  Shield,
  Star,
  Tag,
  Target,
  TrendingUp,
  Users,
  XCircle,
} from '@with-nx/icons';
import { Box, Flex } from '@with-nx/react-ui';

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

  function getPlayerTags(player) {
    const tags = [];

    if (player.tags.includes('rookie'))
      tags.push(<span className="h-8 text-3xl text-red-300">R</span>);

    if (player.tags.includes('flag_player'))
      tags.push(<Flag className="h-8" />);

    if (player.tags.includes('sleepers')) tags.push(<Moon className="h-8" />);

    if (player.tags.includes('injury_concerns'))
      tags.push(<AlertTriangle className="h-8 text-red-500" />);

    if (player.tags.includes('ol_plus'))
      tags.push(<Star className="h-8 text-yellow-500" />);

    if (player.tags.includes('offensive_lines_improved'))
      tags.push(<Star className="h-8 text-yellow-500" />);

    if (player.tags.includes('coach_improved'))
      tags.push(<Star className="h-8 text-yellow-500" />);

    if (player.tags.includes('swing_players'))
      tags.push(<RotateCw className="h-8" />);

    if (player.tags.includes('post_hype_sleepers'))
      tags.push(<RefreshCw className="h-8" />);

    if (player.tags.includes('deep_sleepers'))
      tags.push(<Moon className="h-8" style={{ color: 'darkgray' }} />);

    if (player.tags.includes('risky_players'))
      tags.push(<AlertOctagon className="h-8 text-orange-500" />);

    if (player.tags.includes('suspension'))
      tags.push(<AlertOctagon className="h-8 text-orange-500" />);

    if (player.tags.includes('busts'))
      tags.push(<XCircle className="h-8 text-white" />);

    if (player.tags.includes('avoid'))
      tags.push(<XCircle className="h-8 text-orange-600" />);

    if (player.tags.includes('safe_players'))
      tags.push(<Shield className="h-8" />);

    if (player.tags.includes('contract_issues'))
      tags.push(<FileMinus className="h-8 text-white" />);

    if (player.tags.includes('crowded'))
      tags.push(<Users className="h-8 text-white" />);

    if (player.tags.includes('target'))
      tags.push(<Target className="h-8 text-red-500" />);

    return tags;
  }

  const tags = getPlayerTags(player);

  // ${
  //   isValuePick
  //     ? 'text-green-500'
  //     : isOverPriced
  //     ? 'text-red-500'
  //     : ''
  // }

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
          <Box
            className={`col-span-2  
         `}
          >
            <Flex className="w-full justify-start space-x-1">{tags}</Flex>
          </Box>
        </div>
      )}
    </div>
  );
};

export default DraftTableEntry;
