import './button.module.css';

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
  children: React.ReactNode;
  disabled?: boolean;
  type?: ButtonTypes;
}

type Props = {
  type: string;
  theme: string;
  size: string;
  onClick: Function;
  children: React.Node;
  className: string;
  disabled: boolean;
};

const Button = (props: Props): React.Element<*> => {
  const { type, onClick, children, theme, size, className, disabled } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
