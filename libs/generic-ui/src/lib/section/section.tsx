import React, { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};
