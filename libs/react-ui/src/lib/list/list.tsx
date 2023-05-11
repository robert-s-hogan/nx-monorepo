import listStyles from './list.module.css';
import { ListProps } from '@with-nx/types';
import ListItem from '../list-item/list-item';

export const List = ({
  items,
  id,
  style,
  onClick,
  testId,
}: ListProps): JSX.Element => {
  return (
    <ul
      className={`list ${listStyles.list}`}
      id={id}
      style={style}
      onClick={onClick}
      data-testid={testId}
    >
      {items.map((item) => (
        <ListItem key={id}>{item.value}</ListItem>
      ))}
    </ul>
  );
};

export default List;
