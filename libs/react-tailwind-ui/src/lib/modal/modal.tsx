// import Button from '../../../../react-ui/src/lib/button/button';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Modal = ({
  isShowing,
  toggle,
  title,
  description,
  icon,
  children,
}: ModalProps) => {
  return isShowing ? (
    <div
      onClick={toggle}
      id="overlay"
      className="z-50 h-screen fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ background: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-10 overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-full md:w-1/2 xl:w-1/4">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="justify-end flex py-3 cursor">
                <span onClick={toggle}>
                  <FiX size={24} color="black" />
                </span>
              </div>
              <div className="mx-auto flex flex-shrink-0 items-center justify-center rounded-full">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
