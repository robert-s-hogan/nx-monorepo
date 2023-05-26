import { ListItemProps } from '@with-nx/types';

export function ListItem({ id, onClick, children, selected }: ListItemProps) {
  return (
    <li
      id={id?.toString()}
      className={`p-2 ${
        selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default ListItem;
