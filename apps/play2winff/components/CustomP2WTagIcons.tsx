import React from 'react';
import {
  FeatherAlertOctagon,
  FeatherAlertTriangle,
  FeatherArrowDown,
  FeatherDollarSign,
  FeatherFlag,
  FeatherFileMinus,
  FeatherFrown,
  FeatherMoon,
  FeatherRotateCw,
  FeatherRefreshCw,
  FeatherShield,
  FeatherStar,
  FeatherTag,
  FeatherTarget,
  FeatherTrendingDown,
  FeatherTrendingUp,
  FeatherUsers,
  FeatherXCircle,
  FeatherZap,
  FeatherZapOff,
} from '@with-nx/icons';

export const BreakoutIcon = () => (
  <FeatherZap className="h-8 pt-1 text-green-500" />
);

export const BustIcon = () => (
  <FeatherZapOff className="h-8 pt-1 text-red-500" />
);

export const CoachedImprovedIcon = () => (
  <FeatherStar className="h-8 pt-1 text-yellow-400" />
);

export const ContractIssuesIcon = () => (
  <FeatherFileMinus className="h-8 pt-1 text-white" />
);

export const CrowdedPositionGroupIcon = () => (
  <FeatherUsers className="h-8 pt-1 text-white" />
);

export const FlagPlayerIcon = () => <FeatherFlag className="h-8 pt-1" />;

export const InjuryConcernsIcon = () => (
  <FeatherAlertTriangle className="h-8 pt-1 text-red-500" />
);

export const OffensiveLineDownIcon = () => (
  <FeatherArrowDown className="h-8 pt-1 text-red-500" />
);

export const OffensiveLinePlusIcon = () => (
  <FeatherStar className="h-8 pt-1 text-yellow-400" />
);

export const OverPricedIcon = () => (
  <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
    <span className="absolute left-3 h-8 w-8 text-white">Y</span>
    <FeatherDollarSign className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-red-500" />
  </div>
);

export const PostHypeSleeperIcon = () => (
  <FeatherRefreshCw className="h-8 pt-1" />
);

export const RookieIcon = () => (
  <span className="h-8 pb-1 text-3xl text-red-300">R</span>
);

export const SafePlayerIcon = () => <FeatherShield className="h-8 pt-1" />;

export const SleeperIcon = () => (
  <FeatherMoon className="h-8 pt-1 text-white" />
);

export const SuspensionIcon = () => (
  <FeatherAlertOctagon className="h-8 pt-1 text-yellow-500" />
);

export const SwingPlayerIcon = () => (
  <FeatherRotateCw className="h-8 pt-1 text-black-custom" />
);

export const TargetIcon = () => (
  <FeatherTarget className="h-8 pt-1 text-red-500" />
);

export const ValuePickIcon = () => (
  <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
    <span className="absolute left-3 h-8 w-8 text-white">Y</span>
    <FeatherTrendingUp className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-green-500" />
  </div>
);

export const WorriedIcon = () => (
  <FeatherFrown className="h-8 pt-1 text-blue-500" />
);
