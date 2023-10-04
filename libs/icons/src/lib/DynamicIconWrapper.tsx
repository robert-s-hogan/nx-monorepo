// DynamicIconWrapper.js
import React, { FC, CSSProperties } from 'react';
import dynamic from 'next/dynamic';
import { CommonProps } from '@with-nx/types';

export interface IconWrapperProps {
  color?: string;
  className?: string;
}

type IconComponentProps = CommonProps & {
  style?: CSSProperties;
};

const DynamicIconWrapper = (
  importIcon: () => Promise<{ default: FC<IconComponentProps> }>
) => {
  const DynamicIconComponent = dynamic(importIcon, {
    loading: () => <span>Loading...</span>,
    ssr: false,
  });

  const WrappedIcon: FC<IconWrapperProps> = ({
    color = 'currentColor',
    className = '',
    ...props
  }) => (
    <DynamicIconComponent
      {...props}
      style={{
        fill: 'none',
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      className={`dynamic-icon-wrapper ${className}`}
    />
  );

  return WrappedIcon;
};

export default DynamicIconWrapper;
