import { Button } from '../button/button';
import { Heading } from '../heading/heading';
import { Text } from '../text/text';
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
          >
            {title || 'Modal Title'}
          </Heading>
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
          >
            {description}
          </Text>
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
