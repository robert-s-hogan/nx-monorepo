import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

interface ConquestModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode; // Accept any React node as children
}

const ConquestModal: React.FC<ConquestModalProps> = ({
  isOpen,
  onClose,
  title,
  children, // Now using children prop
}) => {
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h2"
                      className="font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <button type="button" onClick={onClose}>
                      <IonIcon icon={close} size="large" />
                    </button>
                  </div>
                  {children} {/* Render children here */}
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
