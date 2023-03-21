import React, { useState, useRef, useEffect } from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuProps {
  options: { value: string; label: string; link: string }[];
  label: string;
  buttonClassName?: string;
  menuClassName?: string;
  iconClosed?: React.ReactNode;
  iconOpened?: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  label,
  buttonClassName = 'nav-link text-center w-auto focus:outline-none',
  menuClassName = 'absolute mt-2 bg-white pl-0 w-max rounded-sm shadow-lg px-2 py-2 z-10 bg-brand-foreground',
  iconClosed,
  iconOpened,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 cursor-pointer ${buttonClassName}`}
      >
        <button className="focus:outline-none">{label}</button>
        {isOpen ? iconOpened : iconClosed}
      </div>
      {isOpen && (
        <ul className={menuClassName}>
          {options.map((option) => (
            <li key={option.value} className="p-2">
              <a
                href={option.link}
                className="block w-full hover:text-brand-font-four"
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
