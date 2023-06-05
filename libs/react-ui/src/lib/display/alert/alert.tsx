import React from 'react';
import { AlertProps } from '@with-nx/types';

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const getAlertColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return '';
    }
  };

  return (
    <div className={`text-white p-4 rounded ${getAlertColor()}`}>{message}</div>
  );
};
