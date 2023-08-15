import React, { createContext, useContext } from 'react';

interface AvatarSizeProviderProps {
  size: keyof typeof sizes;
}

export const AvatarSizeProvider: React.FC<AvatarSizeProviderProps> = ({
  children,
  size,
}) => (
  <AvatarSizeContext.Provider value={size}>
    {children}
  </AvatarSizeContext.Provider>
);

export const AvatarSizeContext = createContext<string | null>('md'); // default to 'md' as an example

export const useAvatarSize = () => {
  return useContext(AvatarSizeContext);
};
