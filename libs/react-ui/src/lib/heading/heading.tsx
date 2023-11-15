import React from 'react';
import { HeadingProps } from '@with-nx/types';
import { SkeletonText } from '../skeleton-text/skeleton-text';

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
    case 3:
      return <h3 {...props}>{children}</h3>;
    case 4:
      return <h4 {...props}>{children}</h4>;
    case 5:
      return <h5 {...props}>{children}</h5>;
    case 6:
      return <h6 {...props}>{children}</h6>;
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
    return (
      <SkeletonText
        rows={1}
        isLoading={isLoading}
        width={width}
        level={level}
        className={className}
      />
    );
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
