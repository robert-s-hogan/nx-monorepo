import React, { useState } from 'react';
import { AccordionProps } from '@with-nx/types';

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-4 bg-gray-200"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};
