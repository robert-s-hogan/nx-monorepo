// Modal.tsx

import React from 'react';
import Button from '../button/button';
import modalStyles from './modal.module.css';

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  buttonLocation?: 'left' | 'right';
}

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
          {icon && (
            <div className={`modal-icon ${modalStyles.modalIcon}`}>{icon}</div>
          )}
          <h2 className={`modal-title ${modalStyles.modalTitle}`}>{title}</h2>
          <Button onClick={toggle} icon="close">
            Close
          </Button>
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
