interface CardTitleProps {
  name: string;
  eyeColor: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ name, eyeColor }) => {
  return <h3 className="card-title z-20">{name}</h3>;
};

export default CardTitle;
