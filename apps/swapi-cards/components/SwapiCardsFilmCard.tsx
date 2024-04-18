interface SwapiCardsFilmCardProps {
  films: Array<string>;
}

const SwapiCardsFilmCard: React.FC<SwapiCardsFilmCardProps> = (props) => {
  const { films } = props;

  return (
    <p>
      Films:
      {films.map((film) => (
        <span key={film}>{film}</span>
      ))}
    </p>
  );
};

export default SwapiCardsFilmCard;
