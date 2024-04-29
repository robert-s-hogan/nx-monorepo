import React, { useState, useRef, useEffect } from 'react';
import popoverStyles from './popover.module.css';
import { PopoverProps } from '@with-nx/types';

export function Popover({ trigger, content, className = '' }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      (popoverRef.current as HTMLElement).contains(event.target as Node) &&
      triggerRef.current &&
      (triggerRef.current as HTMLElement).contains(event.target as Node)
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
      className={`popover-container ${popoverStyles['popoverContainer']}  ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={triggerRef}
        onClick={handleClick}
        className={`popover-trigger ${popoverStyles['popoverTrigger']}`}
      >
        {trigger}
      </div>
      {showPopover && (
        <div
          ref={popoverRef}
          className={`popover-content ${popoverStyles['popoverContent']}`}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Popover;
