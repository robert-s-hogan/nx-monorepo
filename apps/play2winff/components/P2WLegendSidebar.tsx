import React, { useRef } from 'react';
import { FiX } from 'react-icons/fi';

import { Box, Button, Flex } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';

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
} from './P2WCustomTagIcons';

const LegendSidebar = ({ isOpen, onClose }) => {
  const ref = useRef(null);

  if (!isOpen) return null;

  const legends = [
    {
      icon: <ValuePickIcon />,
      title: 'Value Pick',
      description:
        'Based on Harris Rankings compared to where Yahoo ADP has them',
    },
    {
      icon: <OverPricedIcon />,
      title: 'Over Priced',
      description:
        'Based on Harris Rankings compared to where Yahoo ADP has them',
    },
    {
      icon: <FlagPlayerIcon />,
      title: 'Flag Player',
      description:
        'Players we are betting on this year. Based on: pure talent, opportunity, and outperforming their ADP.',
    },
    {
      icon: <SleeperIcon />,
      title: 'Sleeper',
      description:
        'Players we wouldnt be surprised if they outperform their ADP',
    },
    {
      icon: <InjuryConcernsIcon />,
      title: 'Injury Concerns',
      description:
        'Players that have checkered injury history, recent injury, or an injury from last year',
    },
    {
      icon: <WorriedIcon />,
      title: 'Worried We Are Wrong About',
      description:
        'Players were situation could be worse or we are worried we are wrong about their talent',
    },
    {
      icon: <CoachedImprovedIcon />,
      title: 'Coached Improved',
      description:
        'Players that have had an upgrade at an coaching position that should give the entire offense a boost',
    },
    {
      icon: <SwingPlayerIcon />,
      title: 'Swing Player',
      description:
        'Players that have a wide range of outcomes.  Could be a league winner or a bust',
    },
    {
      icon: <PostHypeSleeperIcon />,
      title: 'Post Hype Sleeper',
      description:
        'Players that have been hyped in the past but have not lived up to expectations.  Could be a league winner or a bust',
    },
    {
      icon: <SuspensionIcon />,
      title: 'Suspension',
      description: 'Players that are suspended for a portion of the season',
    },
    {
      icon: <SafePlayerIcon />,
      title: 'Safe Player',
      description:
        'Players that are safe picks.  Players that healthy and consistent',
    },
    {
      icon: <OffensiveLineDownIcon />,
      title: 'Offensive Line Downgraded',
      description:
        'Players that have a downgraded offensive line that should hurt their production',
    },
    {
      icon: <ContractIssuesIcon />,
      title: 'Contract Issues',
      description:
        'Players that have contract issues that could affect their production',
    },
    {
      icon: <CrowdedPositionGroupIcon />,
      title: 'Crowded Position Group',
      description:
        'Players that are in a crowded offense or backfield.  Feels like they will be in a timeshare or hard to breakout',
    },
    {
      icon: <TargetIcon />,
      title: 'Target',
      description:
        'Prioritize these players in the draft.  Determined by Value Based Drafting or Talent',
    },
    {
      icon: <BreakoutIcon />,
      title: 'Breakout Player',
      description: 'Players that we think will breakout this year',
    },
    {
      icon: <BustIcon />,
      title: 'Bust Player',
      description: 'Players that we think will bust this year',
    },
    {
      icon: <RookieIcon />,
      title: 'Rookie',
      description: 'Players that are rookies',
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-secondary text-white border-l border-primary border-[.5px] h-auto mr-3"
    >
      <Flex className="justify-between items-center p-4 border-primary border-b">
        <Heading level={2} className="text-lg font-bold" text="Icon Legend" />
        <Button className="p-4" onClick={onClose}>
          <FiX className="cursor-pointer" />
        </Button>
      </Flex>
      <div className="p-4 flex-col space-y-3">
        {legends.map((legend, index) => (
          <Box key={index} className="">
            <Flex className="flex space-x-2 items-center">
              <span>{legend.icon}</span>
              <Text className="font-bold text-xl" text={legend.title} />
            </Flex>
            <Text className="text-xs" text={legend.description} />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default LegendSidebar;
