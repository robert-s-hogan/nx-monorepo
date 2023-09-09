import React, { createContext, useContext } from 'react';

export type AvatarSizeProviderProps = {
  children: React.ReactNode;
  size: string; // or you can be more specific with type e.g. 'sm' | 'md' | 'lg' | ...
};

export const AvatarSizeContext = createContext<string | undefined>(undefined);

export const AvatarSizeProvider: React.FC<AvatarSizeProviderProps> = ({
  children,
  size,
}) => {
  return (
    <AvatarSizeContext.Provider value={size}>
      {children}
    </AvatarSizeContext.Provider>
  );
};
