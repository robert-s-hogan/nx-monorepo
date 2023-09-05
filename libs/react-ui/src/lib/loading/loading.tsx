import React, { useState, useEffect } from 'react';
import loadingStyles from './loading.module.css';

export interface LoadingProps {
  timeout?: number; // optional timeout prop in milliseconds
}

export function Loading({ timeout = 2000 }: LoadingProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [timeout]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={loadingStyles.loader}></div>
    </div>
  );
}

export default Loading;
