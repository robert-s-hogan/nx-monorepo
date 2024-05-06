interface ListItem {
  id: string;
  text: string;
  href?: string;
}

interface ListProps {
  items: ListItem[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
