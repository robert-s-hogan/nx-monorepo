import Button from '../button/button';
import { ModalProps } from '@with-nx/types';

export const Modal = ({
  isShowing,
  toggle,
  title,
  description,
  icon,
  children,
  onClick,
  buttonLocation = 'right',
}: ModalProps) => {
  return isShowing ? (
    <div
      onClick={toggle}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
      id="overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-5 rounded-lg max-w-md w-full shadow-lg"
      >
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold flex-grow">{title}</h2>
          {icon ? (
            <div onClick={toggle} className={`modal-icon`}>
              {icon}
            </div>
          ) : (
            <Button onClick={toggle} icon="close">
              Close
            </Button>
          )}
        </div>
        {description && <p className="mb-4">{description}</p>}
        <div className="mb-4">{children}</div>
        {onClick && (
          <div
            className={`flex ${
              buttonLocation === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <Button onClick={onClick}>Confirm</Button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
