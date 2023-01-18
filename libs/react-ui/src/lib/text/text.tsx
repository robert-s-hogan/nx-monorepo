/**
  Text (Atom)
  The Text component is an atom that represents a basic text element. It consists of a text element with the specified text, className, id, style, onClick, aria-label, testId, and children props.
  Props:
  text (string): The text to be rendered inside the text element.
  className (string): A class name to be added to the text element.
  id (string): A unique identifier for the element, which can be used for styling or for JavaScript manipulation.
  style (object): An object containing CSS styles to be applied to the text element.
  onClick (function): A function that will be called when the element is clicked.
  'aria-label' (string):  A string to be used as an accessible label for the button element.
  children (React.ReactNode): The children to be rendered inside the text element.
*/

/* eslint-disable-next-line */
export interface TextProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  'aria-label'?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  id,
  style,
  onClick,
  'aria-label': ariaLabel,
}) => {
  return (
    <p
      className={className}
      id={id}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </p>
  );
};

export default Text;