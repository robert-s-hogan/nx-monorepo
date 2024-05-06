import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiX } from 'react-icons/fi';

import { IconButton } from '@with-nx/generic-ui';

interface ConquestModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  fullScreen?: boolean;
}

const ConquestModal: React.FC<ConquestModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  fullScreen,
}) => {
  const screenSize = fullScreen ? 'max-w-7xl' : 'max-w-xl';
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${
                    screenSize && screenSize
                  } w-full  transform overflow-hidden rounded-2xl bg-surface-color p-6 text-left align-middle shadow-xl transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6'`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <Dialog.Title
                      as="h2"
                      className="font-medium leading-6 text-on-primary-color"
                    >
                      {title}
                    </Dialog.Title>
                    <IconButton
                      icon={<FiX size="2rem" />}
                      label="Close Modal"
                      onClick={onClose}
                    />
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ConquestModal;
