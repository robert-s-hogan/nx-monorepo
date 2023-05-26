import { ListProps } from '@with-nx/types';
import ListItem from '../list-item/list-item';

export const List = ({
  className,
  items,
  id,
  style,
  onClick,
  testId,
  value,
  onChange,
}: ListProps): JSX.Element => {
  return (
    <ul
      className={`p-0 m-0 ${className}`}
      id={id}
      style={style}
      onClick={onClick}
      data-testid={testId}
    >
      {items.map((item, index) => (
        <ListItem
          key={index.toString()} // convert index to a string
          selected={value === item.children}
          onClick={() => {
            if (typeof item.children === 'string') {
              onChange(item.children);
            }
          }}
        >
          <a href={item.href} className={item.className}>
            {item.children}
          </a>
        </ListItem>
      ))}
    </ul>
  );
};
export default List;
