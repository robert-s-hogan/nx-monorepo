import listStyles from './list.module.css';
// import { ListProps } from '@with-nx/types';
import ListItem from '../list-item/list-item';

interface ListProps {
  className?: string;
  items: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }[];
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
  testId?: string;
  value?: string;
  onChange?: (value: string) => void;
}

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
      className={`list ${className ? className : listStyles.list}`}
      id={id}
      style={style}
      onClick={onClick}
      data-testid={testId}
    >
      {items.map((item, index) => (
        <ListItem
          key={index.toString()} // convert index to a string
          selected={value === item.children}
          onChange={() => {
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
