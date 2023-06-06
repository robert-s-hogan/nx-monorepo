import React, { useState, useEffect } from 'react';
import { ToastProps } from '@with-nx/types';

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  isVisible,
  duration = 3000,
}) => {
  const [visible, setVisible] = useState(isVisible);

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

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  return (
    visible && (
      <div
        className={`fixed bottom-0 left-0 right-0 m-3 p-3 rounded ${getColor()} text-white text-center`}
      >
        {message}
      </div>
    )
  );
};
