import React, { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
};
