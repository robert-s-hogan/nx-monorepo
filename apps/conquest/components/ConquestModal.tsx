import { Button } from '@with-nx/react-ui';
import { Modal } from '@with-nx/react-ui';
import { motion, AnimatePresence } from 'framer-motion';

interface ConquestModalProps {
  isShowing: boolean;
  toggle?: () => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  hide?: () => void;
}

export function ConquestModal({
  isShowing,
  toggle,
  title,
  description,
  icon,
  children,
  hide,
}: ConquestModalProps) {
  return (
    <>
      <AnimatePresence mode="wait">
        {isShowing && (
          <Modal isShowing={isShowing} toggle={toggle} buttonLocation="left">
            <motion.div
              className="modal fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
              id="sampleModal"
              tabIndex={-1}
              role="dialog"
              onClick={toggle}
              aria-labelledby="sampleModalLabel"
              aria-hidden={false}
              style={{ background: 'rgba(0, 0, 0, 0.5)' }}
            >
              <motion.div
                className="modal-dialog relative w-auto my-6 mx-auto max-w-3xl"
                role="document"
                onClick={toggle}
              >
                <div
                  className="bg-white border-2 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none w-5/6 mx-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="relative bg-white rounded-lg shadow">
                    <Button
                      className="icon border-0 close absolute top-5 left-7 my-0"
                      onClick={toggle}
                      icon={
                        <>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </>
                      }
                    />

                    <h4 className="text-center p-3 border-b border-brand mb-4">
                      Log In
                    </h4>

                    {children}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ConquestModal;
