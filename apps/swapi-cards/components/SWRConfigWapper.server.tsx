// SWRConfigWrapper.server.tsx
import React from 'react';
import { SWRConfig } from 'swr';

interface SWRConfigWrapperProps {
  children: React.ReactNode;
}

const SWRConfigWrapper: React.FC<SWRConfigWrapperProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigWrapper;
