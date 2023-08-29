import { useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  DollarSign,
  Flag,
  FileMinus,
  Frown,
  Moon,
  RotateCw,
  RefreshCw,
  Shield,
  Star,
  Tag,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  XCircle,
  Zap,
  ZapOff,
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
    let round = Math.floor(value / 12) + 1;
    let pick = value % 12;

    if (pick === 0) {
      pick = 12;
      round -= 1;
    }

    return `${round}.${pick}`;
  }

  const harrisInt = latestRank;
  const yahooInt = yahooADP?.xrank || null;

  // Ensure both ADP values are valid before calculating the difference.
  const difference = yahooInt && harrisInt ? yahooInt - harrisInt : null;

  console.log(`harrisInt: ${harrisInt}`);
  console.log(`yahooInt: ${yahooInt}`);
  console.log(`difference: ${difference}`);

  // Base the checks on the difference value.
  const isValuePick = difference !== null && difference >= 12;
  const isOverPriced = difference !== null && difference <= -12;

  function getPlayerTags(player) {
    const tags = [];

    if (isValuePick)
      tags.push(
        <Flex className="yahoo-icon space-x-1">
          <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
            <span className="absolute left-3 h-8 w-8 text-white">Y</span>
            <TrendingUp className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-green-500" />
          </div>
        </Flex>
      );

    if (isOverPriced)
      tags.push(
        <Flex className="space-x-1">
          <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
            <span className="absolute left-3 h-8 w-8 text-white">Y</span>
            <DollarSign className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-red-500" />
          </div>
        </Flex>
      );

    if (player.tags.includes('target'))
      tags.push(<Target className="h-8 pt-1 text-red-500" />);

    if (player.tags.includes('breakout'))
      tags.push(<Zap className="h-8 pt-1 text-green-500" />);

    if (player.tags.includes('bust'))
      tags.push(<ZapOff className="h-8 pt-1 text-red-500" />);

    if (player.tags.includes('rookie'))
      tags.push(<span className="h-8 pb-1 text-3xl text-red-300">R</span>);

    if (player.tags.includes('flag_player'))
      tags.push(<Flag className="h-8 pt-1" />);

    if (player.tags.includes('worried'))
      tags.push(<Frown className="h-8 pt-1 text-blue-500" />);

    if (player.tags.includes('sleeper'))
      tags.push(<Moon className="h-8 pt-1 text-white" />);

    if (player.tags.includes('injury_concerns'))
      tags.push(<AlertTriangle className="h-8 pt-1 text-red-500" />);

    if (player.tags.includes('ol_plus'))
      tags.push(<Star className="h-8 pt-1 text-yellow-400" />);

    if (player.tags.includes('coach_improved'))
      tags.push(<Star className="h-8 pt-1 text-yellow-400" />);

    if (player.tags.includes('swing'))
      tags.push(<RotateCw className="h-8 pt-1 text-black-custom" />);

    if (player.tags.includes('post_hype_sleepers'))
      tags.push(<RefreshCw className="h-8 pt-1" />);

    if (player.tags.includes('suspension'))
      tags.push(<AlertOctagon className="h-8 pt-1 text-yellow-500" />);

    if (player.tags.includes('safe'))
      tags.push(<Shield className="h-8 pt-1 text-orange-200" />);

    if (player.tags.includes('ol_down'))
      tags.push(<ArrowDown className="h-8 pt-1 text-red-500" />);

    if (player.tags.includes('contract_issues'))
      tags.push(<FileMinus className="h-8 pt-1 text-white" />);

    if (player.tags.includes('crowded'))
      tags.push(<Users className="h-8 pt-1 text-white" />);

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
          <p className="col-span-4">
            {player.name}{' '}
            {/* <pre className="text-sm">{JSON.stringify(yahooADP)}</pre> */}
          </p>
          <Box
            className={`col-span-3  
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
