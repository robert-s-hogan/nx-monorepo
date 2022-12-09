import classnames from 'classnames';
// import styles from './button.module.css';

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
};

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
};

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  // theme: string;
  children: React.ReactNode;
  // type: ButtonTypes;
  disabled?: boolean;
}

export type ButtonTypes = 'submit' | 'reset' | ' button';

export function Button(props: ButtonProps) {
  const { onClick, className, children, disabled } = props;

  // const classProps: string = classnames(
  //   styles.button,
  //   styles[theme],
  //   styles[size],
  //   { [styles.disabled]: disabled },
  //   className
  // );

  return (
    <button
      onClick={onClick}
      // type={type}
      disabled={disabled}
      className={className}
      // theme={theme}
    >
      {children}
    </button>
  );
}

export default Button;
