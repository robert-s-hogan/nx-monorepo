import React, { useState, useRef, useEffect } from 'react';
import { PopoverProps } from '@with-nx/types';

export function Popover({ trigger, content, className = '' }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      !triggerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsHover(false);
  };

  const showPopover = isOpen;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={triggerRef} onClick={handleClick} className="cursor-pointer">
        {trigger}
      </div>
      {showPopover && (
        <div ref={popoverRef} className="absolute top-6 left-0 bg-white z-10">
          {content}
        </div>
      )}
    </div>
  );
}

export default Popover;
