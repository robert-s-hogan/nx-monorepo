import React from 'react';
import { StatusIndicatorProps } from '@with-nx/types';

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-gray-500';
      case 'away':
        return 'bg-yellow-500';
      default:
        return '';
    }
  };

  return <div className={`h-3 w-3 rounded-full ${getColor()}`} />;
};
