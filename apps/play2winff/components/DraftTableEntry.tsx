import { useState } from 'react';
import { Box, Flex } from '@with-nx/react-ui';

import {
  BreakoutIcon,
  BustIcon,
  CoachedImprovedIcon,
  ContractIssuesIcon,
  CrowdedPositionGroupIcon,
  FlagPlayerIcon,
  InjuryConcernsIcon,
  OffensiveLineDownIcon,
  OffensiveLinePlusIcon,
  OverPricedIcon,
  PostHypeSleeperIcon,
  RookieIcon,
  SafePlayerIcon,
  SleeperIcon,
  SuspensionIcon,
  SwingPlayerIcon,
  TargetIcon,
  ValuePickIcon,
  WorriedIcon,
} from './CustomP2WTagIcons';
import { adpToInt, intToAdpString } from '../utils/draftTableUtils';

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

  const harrisInt = latestRank;
  const yahooInt = yahooADP?.xrank || null;

  // Ensure both ADP values are valid before calculating the difference.
  const difference = yahooInt && harrisInt ? yahooInt - harrisInt : null;

  // Base the checks on the difference value.
  const isValuePick = difference !== null && difference >= 12;
  const isOverPriced = difference !== null && difference <= -12;

  function getPlayerTags(player) {
    const tags = [];

    if (isValuePick) tags.push(<ValuePickIcon />);
    if (isOverPriced) tags.push(<OverPricedIcon />);
    if (player.tags.includes('target')) tags.push(<TargetIcon />);
    if (player.tags.includes('breakout')) tags.push(<BreakoutIcon />);
    if (player.tags.includes('bust')) tags.push(<BustIcon />);
    if (player.tags.includes('rookie')) tags.push(<RookieIcon />);
    if (player.tags.includes('flag_player')) tags.push(<FlagPlayerIcon />);
    if (player.tags.includes('worried')) tags.push(<WorriedIcon />);
    if (player.tags.includes('sleeper')) tags.push(<SleeperIcon />);
    if (player.tags.includes('injury_concerns'))
      tags.push(<InjuryConcernsIcon />);
    if (player.tags.includes('offensive_line_plus'))
      tags.push(<OffensiveLinePlusIcon />);
    if (player.tags.includes('coach_improved'))
      tags.push(<CoachedImprovedIcon />);
    if (player.tags.includes('swing_player')) tags.push(<SwingPlayerIcon />);
    if (player.tags.includes('post_hype_sleepers'))
      tags.push(<PostHypeSleeperIcon />);
    if (player.tags.includes('suspension')) tags.push(<SuspensionIcon />);
    if (player.tags.includes('safe_player')) tags.push(<SafePlayerIcon />);
    if (player.tags.includes('offensive_line_down'))
      tags.push(<OffensiveLineDownIcon />);
    if (player.tags.includes('contract_issues'))
      tags.push(<ContractIssuesIcon />);
    if (player.tags.includes('crowded_position_group'))
      tags.push(<CrowdedPositionGroupIcon />);

    return tags;
  }

  const tags = getPlayerTags(player);

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
          <p className="col-span-4">{player.name} </p>
          <Box
            className={`col-span-3  
         `}
          >
            <Flex className="w-full justify-start items-center space-x-1">
              {tags}
            </Flex>
          </Box>
        </div>
      )}
    </div>
  );
};

export default DraftTableEntry;
