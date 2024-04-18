interface SwapiCardsCardTitleProps {
  name: string;
  eyeColor: string;
}

const SwapiCardsCardTitle: React.FC<SwapiCardsCardTitleProps> = ({
  name,
  eyeColor,
}) => {
  return <h3 className="card-title z-20">{name}</h3>;
};

export default SwapiCardsCardTitle;
