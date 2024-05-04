'use client';

//libs/react-ui/src/lib/collapse.tsx
import React, { useState } from 'react';
import collapseStyles from './collapse.module.css';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${collapseStyles['collapse']} ${className}`}>
      <button
        className={collapseStyles['button']}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className={collapseStyles['content']}>{children}</div>}
    </div>
  );
};
