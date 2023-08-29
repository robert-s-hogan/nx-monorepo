import React, { useEffect, useRef } from 'react';
import { Button } from '@with-nx/react-ui';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  DollarSign,
  FileMinus,
  Flag,
  Frown,
  Moon,
  RotateCw,
  RefreshCw,
  Shield,
  Star,
  Users,
  Target,
  TrendingUp,
  X,
  Zap,
  ZapOff,
} from '@with-nx/icons';
import { Box, Flex } from '@with-nx/react-ui';

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
      icon: (
        <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
          <span className="absolute left-3 h-8 w-8 text-white">Y</span>
          <TrendingUp className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-green-500" />
        </div>
      ),
      description: 'Value Pick',
    },
    {
      icon: (
        <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
          <span className="absolute left-3 h-8 w-8 text-white">Y</span>
          <DollarSign className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-red-500" />
        </div>
      ),
      description: 'Overpriced',
    },
    { icon: <Flag className="h-8 " />, description: 'Flag Player' },
    { icon: <Moon className="h-8  text-white" />, description: 'Sleeper' },
    {
      icon: <AlertTriangle className="h-8  text-red-500" />,
      description: 'Injury Concerns',
    },
    {
      icon: <Frown className="h-8 text-blue-500" />,
      description: 'Worried We Are Wrong About',
    },
    {
      icon: <Star className="h-8  text-yellow-400" />,
      description: 'Great Offensive Line, Coach Upgrade, ',
    },
    {
      icon: <RotateCw className="h-8  text-black-custom" />,
      description: 'Swing Player',
    },
    {
      icon: <RefreshCw className="h-8 " />,
      description: 'Post Hype Sleeper',
    },
    {
      icon: <AlertOctagon className="h-8  text-yellow-500" />,
      description: 'Suspension',
    },
    { icon: <Shield className="h-8 " />, description: 'Safe' },
    {
      icon: <ArrowDown className="h-8  text-red-500" />,
      description: 'Downgraded Offensive Line',
    },
    {
      icon: <FileMinus className="h-8  text-white" />,
      description: 'Contract Issue',
    },
    {
      icon: <Users className="h-8  text-white" />,
      description: 'Crowded offense or backfield',
    },
    {
      icon: <Target className="h-8  text-red-500" />,
      description: 'Prioritize these players',
    },
    {
      icon: <Zap className="h-8  text-green-500" />,
      description: 'Breakout Player',
    },
    {
      icon: <ZapOff className="h-8  text-red-500" />,
      description: 'Bust Player',
    },
    {
      icon: <span className="h-8  text-3xl text-red-300">R</span>,
      description: 'Rookie',
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
      <Flex className="p-4 flex-col space-y-2">
        {legends.map((legend, index) => (
          <Box key={index} className="flex items-center space-x-2">
            <span>{legend.icon}</span>
            <span>{legend.description}</span>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default LegendSidebar;
