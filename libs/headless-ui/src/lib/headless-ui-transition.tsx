import { Transition } from '@headlessui/react';
import { ReactNode, useState, useEffect } from 'react';

export interface HeadlessUiTransitionProps {
  show: boolean;
  children: ReactNode;
}

const HeadlessUiTransition: React.FC<HeadlessUiTransitionProps> = ({
  show,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(show);

  // Update isOpen state if the show prop changes
  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};

export default HeadlessUiTransition;
