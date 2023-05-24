import React, { useState } from 'react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full border border-gray-300 rounded ${className}`}>
      <button
        className="w-full py-2 bg-gray-200 border-none text-left cursor-pointer outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

export default Collapse;
