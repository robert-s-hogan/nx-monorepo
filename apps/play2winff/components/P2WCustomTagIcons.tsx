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

import { Text } from '@with-nx/generic-ui';

export const BreakoutIcon = () => (
  <FiZap className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const BustIcon = () => (
  <FiZapOff className="w-10 h-10 primary-stroke pt-1" />
);

export const CoachedImprovedIcon = () => (
  <FiStar className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const ContractIssuesIcon = () => (
  <FiFileMinus className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const CrowdedPositionGroupIcon = () => (
  <FiUsers className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const FlagPlayerIcon = () => (
  <FiFlag className="w-10 h-10 primary-stroke pt-1" />
);

export const InjuryConcernsIcon = () => (
  <FiAlertTriangle className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const OffensiveLineDownIcon = () => (
  <FiArrowDown className="w-10 h-10 primary-stroke pt-1" />
);

export const OffensiveLinePlusIcon = () => (
  <FiStar className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const OverPricedIcon = () => (
  <FiDollarSign className="h-10 w-10 stroke-red-500" />
);

export const PostHypeSleeperIcon = () => (
  <FiRefreshCw className="w-10 h-10 primary-stroke pt-1" />
);

export const RookieIcon = () => (
  <Text className="mb-[-4px] text-primary-fill text-3xl" text="R" />
);

export const SafePlayerIcon = () => (
  <FiShield className="w-10 h-10 primary-stroke secondary-fill pt-1" />
);

export const SleeperIcon = () => (
  <FiMoon className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const SuspensionIcon = () => (
  <FiAlertOctagon className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const SwingPlayerIcon = () => (
  <FiRotateCw className="w-10 h-10 primary-stroke pt-1" />
);

export const TargetIcon = () => (
  <FiTarget className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);

export const ValuePickIcon = () => (
  <FiTrendingUp className="h-10 w-10 primary-stroke" />
);

export const WorriedIcon = () => (
  <FiFrown className="w-10 h-10 primary-stroke pt-1 secondary-fill" />
);
