import Button from '../button/button';

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
    <div onClick={toggle} id="overlay">
      <div onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
