import listItemStyles from './list-item.module.css';

/* eslint-disable-next-line */
export interface ListItemProps {
  id?: string;
  value?: string;
  key?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ListItem({ id, value, key, onClick, children }: ListItemProps) {
  return (
    <li id={id} key={key} className={`list-item ${listItemStyles.listItem}`}>
      {children}
    </li>
  );
}

export default ListItem;
