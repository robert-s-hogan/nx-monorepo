import React from 'react';
import { ImageProps } from '@with-nx/types';

export const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-24 h-24';
      case 'medium':
        return 'w-48 h-48';
      case 'large':
        return 'w-64 h-64';
      default:
        return '';
    }
  };

  return (
    <img src={src} alt={alt} className={`object-cover ${getSizeClass()}`} />
  );
};
