import { Button } from '@with-nx/react-ui';
import { Modal } from '@with-nx/react-ui';

interface JHModalProps {
  isShowing: boolean;
  toggle?: () => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  hide?: () => void;
}

export function JHModal({
  isShowing,
  toggle,
  title,
  description,
  icon,
  children,
  hide,
}: JHModalProps) {
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
                <div className="modal-body relative p-4 flex-auto">
                  <div className="overflow-hidden">
                    <Button
                      className="icon border-0 close absolute top-1 right-2 my-0"
                      // data-dismiss="modal"
                      // aria-label="Close"
                      onClick={toggle}
                      icon={
                        <span
                          className="text-5xl font-light text-right  text-black"
                          aria-hidden="true"
                        >
                          &times;
                        </span>
                      }
                    />
                    <div className="w-full">{children}</div>
                  </div>
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
