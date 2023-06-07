import React from 'react';
import { SidebarProps } from '@with-nx/types';

export const Sidebar: React.FC<SidebarProps> = ({ width, children }) => {
  return <div className={`w-${width} h-full bg-gray-100 p-4`}>{children}</div>;
};
