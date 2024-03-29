import { Button, Modal } from '@with-nx/react-ui';
import { ModalProps } from '@with-nx/types';
import { FiX } from 'react-icons/fi';

export function JHModal({
  isShowing,
  toggle,
  title,
  description,
  icon,
  children,
  onClick,
  buttonLocation = 'right',
}: ModalProps) {
  return (
    <>
      {isShowing && (
        <Modal isShowing={isShowing} toggle={toggle}>
          <div
            className="modal overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center justify-items-center "
            id="sampleModal"
            tabIndex={-1}
            role="dialog"
            onClick={toggle}
            aria-labelledby="sampleModalLabel"
            aria-hidden={false}
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
          >
            <div
              className="modal-dialog relative w-auto my-6 mx-auto max-w-5xl"
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
                    className="icon border-0 close absolute top-1 right-2 my-0"
                    onClick={toggle}
                    icon={
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
                      >
                        <FiX className="w-6 h-6" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    }
                  />
                  <div className="p-6 lg:px-8">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default JHModal;
