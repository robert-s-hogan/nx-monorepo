import './button.module.css';

export type ButtonTypes = 'submit' | 'reset' | ' button';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: ButtonTypes;
}

export function Button(props: ButtonProps) {
  const { onClick, className, children, disabled } = props;

  return (
    <button
      onClick={onClick}
      // type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
