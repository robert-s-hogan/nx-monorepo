/**
  List (Atom)
  The List component is an atom that represents a basic list element. It consists of a ul element with the specified items, className, id, style, onClick, testId and ariaLabel props.
  Props:
  items (Array): An array of objects, containing the elements to be rendered in the list.
  className (string): A class name to be added to the list element.
  id (string): A unique identifier for the element, which can be used for styling or for JavaScript manipulation.
  style (object): An object containing CSS styles to be applied to the list element.
  onClick (function): A function that will be called when the list is clicked.
  ariaLabel (string): A string to be used as an accessible label for the list element.
*/

/* eslint-disable-next-line */
export interface ListProps {
  items: any[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  testId?: string;
}

export const List: React.FC<ListProps> = ({
  items,
  className,
  id,
  style,
  onClick,
  testId,
}) => {
  return (
    <ul
      className={className}
      id={id}
      style={style}
      onClick={onClick}
      data-testid={testId}
    >
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
};

export default List;
