import Button from '../button/button';
import modalStyles from './modal.module.css';
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
      className={`modal-overlay ${modalStyles.overlay}`}
      id="overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal ${modalStyles.modal}`}
      >
        <div className={`modal-header ${modalStyles.modalHeader}`}>
          <h2 className={`modal-title ${modalStyles.modalTitle}`}>{title}</h2>
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
        {description && (
          <p className={`modal-description ${modalStyles.modalDescription}`}>
            {description}
          </p>
        )}
        <div className={`modal-content ${modalStyles.modalContent}`}>
          {children}
        </div>
        {onClick && (
          <div
            className={`modal-actions ${modalStyles.modalActions} ${modalStyles[buttonLocation]}`}
          >
            <Button onClick={onClick}>Confirm</Button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
