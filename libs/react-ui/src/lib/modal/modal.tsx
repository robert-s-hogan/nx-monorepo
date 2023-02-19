import Button from '../button/button';

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
    <div onClick={toggle} id="overlay">
      <div onClick={(e) => e.stopPropagation()}>
        <Button onClick={toggle}></Button>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
