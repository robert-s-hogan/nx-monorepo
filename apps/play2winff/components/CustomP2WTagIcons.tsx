import React from 'react';
import {
  FiAlertOctagon,
  FiAlertTriangle,
  FiArrowDown,
  FiDollarSign,
  FiFlag,
  FiFileMinus,
  FiFrown,
  FiMoon,
  FiRotateCw,
  FiRefreshCw,
  FiShield,
  FiStar,
  FiTag,
  FiTarget,
  FiTrendingDown,
  FiTrendingUp,
  FiUsers,
  FiXCircle,
  FiZap,
  FiZapOff,
} from 'react-icons/fi';

export const BreakoutIcon = () => <FiZap className="h-8 pt-1 text-green-500" />;

export const BustIcon = () => <FiZapOff className="h-8 pt-1 text-red-500" />;

export const CoachedImprovedIcon = () => (
  <FiStar className="h-8 pt-1 text-yellow-400" />
);

export const ContractIssuesIcon = () => (
  <FiFileMinus className="h-8 pt-1 text-white" />
);

export const CrowdedPositionGroupIcon = () => (
  <FiUsers className="h-8 pt-1 text-white" />
);

export const FlagPlayerIcon = () => <FiFlag className="h-8 pt-1" />;

export const InjuryConcernsIcon = () => (
  <FiAlertTriangle className="h-8 pt-1 text-red-500" />
);

export const OffensiveLineDownIcon = () => (
  <FiArrowDown className="h-8 pt-1 text-red-500" />
);

export const OffensiveLinePlusIcon = () => (
  <FiStar className="h-8 pt-1 text-yellow-400" />
);

export const OverPricedIcon = () => (
  <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
    <span className="absolute left-3 h-8 w-8 text-white">Y</span>
    <FiDollarSign className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-red-500" />
  </div>
);

export const PostHypeSleeperIcon = () => <FiRefreshCw className="h-8 pt-1" />;

export const RookieIcon = () => (
  <span className="h-8 pb-1 text-3xl text-red-300">R</span>
);

export const SafePlayerIcon = () => <FiShield className="h-8 pt-1" />;

export const SleeperIcon = () => <FiMoon className="h-8 pt-1 text-white" />;

export const SuspensionIcon = () => (
  <FiAlertOctagon className="h-8 pt-1 text-yellow-500" />
);

export const SwingPlayerIcon = () => (
  <FiRotateCw className="h-8 pt-1 text-black-custom" />
);

export const TargetIcon = () => <FiTarget className="h-8 pt-1 text-red-500" />;

export const ValuePickIcon = () => (
  <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
    <span className="absolute left-3 h-8 w-8 text-white">Y</span>
    <FiTrendingUp className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-green-500" />
  </div>
);

export const WorriedIcon = () => <FiFrown className="h-8 pt-1 text-blue-500" />;
