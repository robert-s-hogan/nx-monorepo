import { useRouter } from 'next/router';

import styles from './button-link.module.css';

/* eslint-disable-next-line */
export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  target?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  disabled = false,
  type = 'button',
  style,
  className,
  onClick,
  target,
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
      if (target === '_blank') {
        // Check if href is already an absolute URL
        const isAbsoluteURL = new RegExp('^(?:[a-z]+:)?//', 'i').test(href);
        const fullURL = isAbsoluteURL
          ? href
          : `${window.location.origin}${router.basePath}${href}`;
        window.open(fullURL, '_blank');
      } else {
        router.push(href);
      }
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
