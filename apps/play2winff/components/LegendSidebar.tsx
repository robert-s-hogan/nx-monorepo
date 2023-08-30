import React, { useEffect, useRef } from 'react';
import { Button } from '@with-nx/react-ui';
import { X } from '@with-nx/icons';
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

const LegendSidebar = ({ isOpen, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose(); // This will be your function to close the sidebar
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

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
      className="fixed border-l border-viridian border top-0 right-0 h-full w-1/2 md:w-1/4 bg-gunmetal text-white shadow-lg"
    >
      <Flex className="justify-between items-center p-4 border-viridian border-b">
        <h2 className="text-lg font-bold">Icon Legend</h2>
        <Button onClick={onClose}>
          <X className="cursor-pointer" />
        </Button>
        {/* close icon that can be clicked to close the sidebar */}
      </Flex>
      <Flex className="p-4 flex-col space-y-3 max-h-screen overflow-y-auto">
        {legends.map((legend, index) => (
          <Box key={index} className="">
            <Flex className="flex space-x-2 items-center">
              <span>{legend.icon}</span>
              <span className="font-bold text-xl">{legend.title}</span>
            </Flex>
            <span className="text-xs">{legend.description}</span>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default LegendSidebar;
