import React from 'react';
import { cn } from '@with-nx/utils';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  style,
  fullWidth = false,
}) => {
  const widthStyles = fullWidth ? 'max-w-full' : 'max-w-7xl';

  return (
    <section
      className={cn(
        'mx-auto space-y-6 py-6 md:py-12 px-4',
        className,
        widthStyles
      )}
      style={style}
    >
      {children}
    </section>
  );
};
