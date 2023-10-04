import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Button, Flex, Heading, Text } from '@with-nx/react-ui';
import { FiX } from 'react-icons/fi';

interface DialogProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  isShowing: boolean;
  toggle: () => void;
  backdropRef: any;
}

export const Dialog: FC<DialogProps> = ({
  children,
  title,
  onClose,
  isShowing,
  toggle,
  backdropRef,
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        backdropRef.current &&
        !backdropRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isShowing) {
      backdropRef.current?.showModal();
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      backdropRef.current?.close();
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowing]);

  const handleClose = () => {
    toggle(); // Toggle the dialog visibility
    onClose(); // Call onClose prop function
  };

  return (
    <dialog ref={backdropRef}>
      <header className="flex justify-end">
        <Button onClick={handleClose}>
          <FiX className="w-6 h-6" />
        </Button>
      </header>
      {children}
    </dialog>
  );
};
