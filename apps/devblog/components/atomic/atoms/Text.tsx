// apps/devblog/components/atomic/atoms/Text.tsx
import React from 'react';

interface TextProps {
  text: string;
  className?: string;
  as?: 'p' | 'span' | 'div'; // optional override
}

export const Text = ({ text, className = '', as = 'p' }: TextProps) => {
  const baseClasses = 'text-text-color leading-relaxed';
  const Tag = as;

  return <Tag className={`${baseClasses} ${className}`}>{text}</Tag>;
};
