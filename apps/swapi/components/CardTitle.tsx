interface Props {
  name: string;
  eyeColor?: string;
  className?: string;
}

const CardTitle: React.FC<Props> = ({ name, eyeColor, className }) => {
  return <h3 className={`${className} z-20`}>{name}</h3>;
};

export default CardTitle;
