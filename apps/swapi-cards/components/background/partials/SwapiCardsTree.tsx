interface SwapiCardsTreeProps {
  className: string;
  color: string;
  style?: React.CSSProperties;
}

const SwapiCardsTree: React.FC<SwapiCardsTreeProps> = ({
  className,
  color,
  style,
}) => (
  <path
    d="M1026.55 355.439c0-29.156-2.93-58.559-3.21-87.84-..."
    fill={color}
    stroke="black"
    strokeWidth=".25"
    className={className}
    style={style}
  />
);

export default SwapiCardsTree;
