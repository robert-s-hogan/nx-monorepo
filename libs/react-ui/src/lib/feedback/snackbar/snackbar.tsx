import React from 'react';
import { SnackbarProps } from '@with-nx/types';

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type,
  isVisible,
}) => {
  const getColor = () => {
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
    isVisible && (
      <div
        className={`fixed bottom-0 left-0 right-0 m-3 p-3 rounded ${getColor()} text-white text-center`}
      >
        {message}
      </div>
    )
  );
};
