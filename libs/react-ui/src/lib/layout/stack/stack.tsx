import React from 'react';
import { StackProps } from '@with-nx/types';

export const Stack: React.FC<StackProps> = ({ spacing, children }) => {
  return <div className={`space-y-${spacing}`}>{children}</div>;
};
