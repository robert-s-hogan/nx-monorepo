import React, { useState, useRef, useEffect } from 'react';
import popoverStyles from './popover.module.css';
/* eslint-disable-next-line */
export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

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
      className={`popover-container ${popoverStyles.popoverContainer}  ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={triggerRef}
        onClick={handleClick}
        className={`popover-trigger ${popoverStyles.popoverTrigger}`}
      >
        {trigger}
      </div>
      {showPopover && (
        <div
          ref={popoverRef}
          className={`popover-content ${popoverStyles.popoverContent}`}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Popover;
