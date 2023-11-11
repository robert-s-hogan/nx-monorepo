import React from 'react';
import { HeadingProps } from '@with-nx/types';
import SkeletonText from '../skeleton/skeleton-text';

function DynamicHeading({
  level,
  children,
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLElement>) {
  switch (level) {
    case 1:
      return <h1 {...props}>{children}</h1>;
    case 2:
      return <h2 {...props}>{children}</h2>;
    // Add cases for other heading levels as needed
    default:
      return <h1 {...props}>{children}</h1>;
  }
}

export const Heading = ({
  level,
  children,
  className,
  id,
  style,
  'aria-labelledby': ariaLabelledby,
  tabIndex,
  isLoading,
  width,
  height,
  onClick,
}: HeadingProps) => {
  if (isLoading) {
    return <SkeletonText rows={1} height={height} isLoading={isLoading} />;
  }

  return (
    <DynamicHeading
      level={level}
      className={className}
      id={id}
      style={style}
      aria-labelledby={ariaLabelledby}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {children}
    </DynamicHeading>
  );
};

export default Heading;
