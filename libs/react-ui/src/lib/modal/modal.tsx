import Button from '../button/button';
import modalStyles from './modal.module.css';
import { ModalProps } from '@with-nx/types';
import { Heading, Text } from '@with-nx/generic-ui';

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
      className={`modal-overlay ${modalStyles['overlay']}`}
      id="overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal ${modalStyles['modal']}`}
      >
        <div className={`modal-header ${modalStyles['modalHeader']}`}>
          <Heading
            level={2}
            className={`modal-title ${modalStyles['modalTitle']}`}
            text={title || 'Modal Title'}
          />
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
          <Text
            className={`modal-description ${modalStyles['modalDescription']}`}
            text={description}
          />
        )}
        <div className={`modal-content ${modalStyles['modalContent']}`}>
          {children}
        </div>
        {onClick && (
          <div
            className={`modal-actions ${modalStyles['modalActions']} ${modalStyles[buttonLocation]}`}
          >
            <Button onClick={onClick}>Confirm</Button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
