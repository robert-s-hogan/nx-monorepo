import { Button, Link } from '@with-nx/react-ui';
/* eslint-disable-next-line */
export interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isShowing,
  toggle,
  children,
}) => {
  return (
    <div>
      {isShowing && (
        <div
          className="modal overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center justify-items-center "
          id="sampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="sampleModalLabel"
          aria-hidden={false}
          style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div
            className="modal-dialog relative w-auto my-6 mx-auto max-w-3xl"
            role="document"
          >
            <div className="bg-white border-2 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none w-5/6 mx-auto">
              <div className="modal-body relative p-4 flex-auto">
                <div className="overflow-hidden">
                  <Button
                    className="icon border-0 close absolute top-0 right-0 my-0"
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
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
