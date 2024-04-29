import listItemStyles from './list-item.module.css';

export interface ListItemProps {
  id?: string | number;
  value?: string; // This is unused at the moment
  key?: string; // React keys are not usually passed as props, they are special in React
  onClick?: () => void;
  children?: React.ReactNode;
  selected?: boolean; // This prop will be used to indicate if the item is selected
  onChange?: () => void; // This prop will be used to change the active item
}

export function ListItem({
  id,
  onClick,
  children,
  selected,
  onChange,
}: ListItemProps) {
  return (
    <li
      id={id?.toString()}
      className={`list-item ${selected ? 'selected' : ''} ${
        listItemStyles['listItem']
      }`}
      onClick={onChange}
    >
      {children}
    </li>
  );
}

export default ListItem;
