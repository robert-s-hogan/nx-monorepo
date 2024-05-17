export interface ListItemProps {
  text: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ListItem: React.FC<ListItemProps> = ({
  text,
  onClick,
  className,
  style,
}) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {text}
    </div>
  );
};
