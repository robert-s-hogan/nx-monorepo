import { ListProps } from '@with-nx/types';

export const List = ({
  items,
  className,
  id,
  style,
  onClick,
  testId,
}: ListProps): JSX.Element => {
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
