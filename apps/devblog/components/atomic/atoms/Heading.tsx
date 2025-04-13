// apps/devblog/components/atomic/atoms/Heading.tsx
import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  className?: string;
}

const baseClasses = 'font-bold tracking-tight text-text-color';

const levelClassMap: Record<number, string> = {
  1: 'text-4xl md:text-5xl',
  2: 'text-3xl md:text-4xl',
  3: 'text-2xl md:text-3xl',
  4: 'text-xl md:text-2xl',
  5: 'text-lg',
  6: 'text-base',
};

export const Heading = ({ level = 2, text, className = '' }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const levelClasses = levelClassMap[level] || levelClassMap[2];

  return (
    <Tag className={`${baseClasses} ${levelClasses} ${className}`}>{text}</Tag>
  );
};
