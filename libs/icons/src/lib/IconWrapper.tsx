import React, { CSSProperties } from 'react';
import { CommonProps } from '@with-nx/types';

export interface IconWrapperProps {
  color?: string;
  className?: string;
}

/*
 * Need an improved solution. undefined currently shows up in the HTML *
 */

type IconComponentProps = CommonProps & {
  style?: CSSProperties;
};

const IconWrapper = (IconComponent: React.FC<IconComponentProps>) => {
  const WrappedIcon: React.FC<IconWrapperProps> = ({
    color = 'currentColor',
    className = '',
    ...props
  }) => {
    console.log(`Rendering IconWrapper:`, WrappedIcon);
    return (
      <IconComponent
        {...props}
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        className={`icon-wrapper ${className}`}
      />
    );
  };
  return WrappedIcon;
};

export default IconWrapper;
