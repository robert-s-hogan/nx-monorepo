interface ListItem {
  id: string;
  text: string;
  href?: string;
}

export interface ListProps {
  items: ListItem[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.href ? <a href={item.href}>{item.text}</a> : item.text}
        </li>
      ))}
    </ul>
  );
};
