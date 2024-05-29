export interface HeadingProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  map?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  level,
  map,
  text,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={className}
      aria-label={text}
      aria-level={level}
      role="heading"
    >
      {text}
    </Tag>
  );
};
