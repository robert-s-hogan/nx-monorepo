import React, { CSSProperties } from 'react';

export interface IconWrapperProps {
  color?: string;
  className?: string;
}

type IconComponentProps = {
  style?: CSSProperties;
  className?: string;
};

const IconWrapper = (IconComponent: React.FC<IconComponentProps>) => {
  const WrappedIcon: React.FC<IconWrapperProps> = ({
    color = 'currentColor',
    className,
    ...props
  }) => {
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
