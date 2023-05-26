import React from 'react';
import { SectionProps } from '@with-nx/types';

export function Section({
  id,
  children,
  className,
  style,
  ariaLabel,
}: SectionProps) {
  const baseClass = 'px-4 py-6 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm';
  const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <section
      className={combinedClass}
      id={id}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

export default Section;
