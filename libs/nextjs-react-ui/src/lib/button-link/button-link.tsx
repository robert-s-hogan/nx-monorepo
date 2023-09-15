import { useRouter } from 'next/router';
import styles from './button-link.module.css';

/* eslint-disable-next-line */
export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'; // Incorporating the common button types
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  disabled = false,
  type = 'button',
  style,
  className,
  onClick,
}) => {
  const router = useRouter();
  const combinedStyles = [styles.buttonLink, styles[type], className].join(' ');

  const handleNavigate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!disabled && onClick) {
      onClick(event);
    }
    if (!disabled) {
      router.push(href);
    }
  };

  return (
    <button
      className={combinedStyles}
      style={style}
      aria-disabled={disabled ? 'true' : 'false'}
      tabIndex={disabled ? -1 : 0}
      onClick={handleNavigate}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
