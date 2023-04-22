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

import Skeleton from '../skeleton/skeleton';

/* eslint-disable-next-line */
export interface TextProps {
  children: React.ReactNode;
  key?: string | number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  'aria-label'?: string;
  isLoading?: boolean;
  rows?: number;
  rowWidth?: number;
  height?: number;
  width?: number;
}

export const Text: React.FC<TextProps> = ({
  children,
  key,
  className,
  id,
  style,
  onClick,
  'aria-label': ariaLabel,
  isLoading,
  rows = 1,
  rowWidth = 100,
  height = 16,
  width = 100,
}) => {
  return (
    <div
      className={`text ${className}`}
      id={id}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {isLoading ? (
        <Skeleton
          rows={rows}
          isLoading={isLoading}
          rowWidth={rowWidth}
          height={height}
          width={width}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Text;
