// import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  // theme: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  // type: ButtonTypes;
  disabled?: boolean;
}

export type ButtonTypes = 'submit' | 'reset' | ' button';

export function Button(props: ButtonProps) {
  const { onClick, children, disabled, className, icon } = props;

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
      {icon ? icon : children}
    </button>
  );
}

export default Button;
