interface Props {
  name: string;
  className?: string;
}

const CardTitle = ({ name, className }: Props) => {
  return <h3 className={className}>{name}</h3>;
};

export default CardTitle;
