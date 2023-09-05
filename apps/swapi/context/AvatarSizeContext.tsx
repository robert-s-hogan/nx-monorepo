import React, { createContext, useContext } from 'react';
import { Person } from '../types/people';

export const AvatarSizeProvider: React.FC<{
  children: React.ReactNode;
  size: string;
}> = ({ children, size }) => (
  <AvatarSizeContext.Provider value={size}>
    {children}
  </AvatarSizeContext.Provider>
);

export const AvatarSizeContext = createContext<string | null>('md'); // default to 'md' as an example

export const useAvatarSize = () => {
  return useContext(AvatarSizeContext);
};
