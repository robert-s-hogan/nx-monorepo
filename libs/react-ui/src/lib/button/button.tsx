/**
 * This component is an atom, it is the smallest unit of the application.
 */

/* eslint-disable-next-line */
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  text?: string;
}

export function Button(props: ButtonProps) {
  const { onClick, children, className } = props;

  return (
    <button onClick={onClick} className={className}>
      {children}
      {!children && props.text}
    </button>
  );
}

export default Button;
