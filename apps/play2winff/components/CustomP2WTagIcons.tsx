import React from 'react';
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

export const BreakoutIcon = () => <Zap className="h-8 pt-1 text-green-500" />;

export const BustIcon = () => <ZapOff className="h-8 pt-1 text-red-500" />;

export const CoachedImprovedIcon = () => (
  <Star className="h-8 pt-1 text-yellow-400" />
);

export const ContractIssuesIcon = () => (
  <FileMinus className="h-8 pt-1 text-white" />
);

export const CrowdedPositionGroupIcon = () => (
  <Users className="h-8 pt-1 text-white" />
);

export const FlagPlayerIcon = () => <Flag className="h-8 pt-1" />;

export const InjuryConcernsIcon = () => (
  <AlertTriangle className="h-8 pt-1 text-red-500" />
);

export const OffensiveLineDownIcon = () => (
  <ArrowDown className="h-8 pt-1 text-red-500" />
);

export const OffensiveLinePlusIcon = () => (
  <Star className="h-8 pt-1 text-yellow-400" />
);

export const OverPricedIcon = () => (
  <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
    <span className="absolute left-3 h-8 w-8 text-white">Y</span>
    <DollarSign className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-red-500" />
  </div>
);

export const PostHypeSleeperIcon = () => <RefreshCw className="h-8 pt-1" />;

export const RookieIcon = () => (
  <span className="h-8 pb-1 text-3xl text-red-300">R</span>
);

export const SafePlayerIcon = () => <Shield className="h-8 pt-1" />;

export const SleeperIcon = () => <Moon className="h-8 pt-1 text-white" />;

export const SuspensionIcon = () => (
  <AlertOctagon className="h-8 pt-1 text-yellow-500" />
);

export const SwingPlayerIcon = () => (
  <RotateCw className="h-8 pt-1 text-black-custom" />
);

export const TargetIcon = () => <Target className="h-8 pt-1 text-red-500" />;

export const ValuePickIcon = () => (
  <div className="icon-container relative flex justify-center items-center w-12 h-12 bg-purple-700 rounded-full text-2xl">
    <span className="absolute left-3 h-8 w-8 text-white">Y</span>
    <TrendingUp className="icon-inner absolute bottom-4 left-6 h-4 w-4 text-green-500" />
  </div>
);

export const WorriedIcon = () => <Frown className="h-8 pt-1 text-blue-500" />;
