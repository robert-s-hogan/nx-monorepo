import React from 'react';
import { VideoProps } from '@with-nx/types';

export const Video: React.FC<VideoProps> = ({ src, size }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-48 h-27'; // Aspect ratio 16:9
      case 'medium':
        return 'w-96 h-54'; // Aspect ratio 16:9
      case 'large':
        return 'w-144 h-81'; // Aspect ratio 16:9
      default:
        return '';
    }
  };

  return <video src={src} controls className={`${getSizeClass()}`} />;
};
