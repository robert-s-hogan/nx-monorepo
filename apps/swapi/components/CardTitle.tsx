interface Props {
  name: string;
  eyeColor?: string;
}

const CardTitle: React.FC<Props> = (props) => {
  const { name } = props;

  return <h3 className="card-title z-20">{name}</h3>;
};

export default CardTitle;
