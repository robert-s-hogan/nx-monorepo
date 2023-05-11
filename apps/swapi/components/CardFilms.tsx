interface CardFilmsProps {
  films: string[];
}

const CardFilms = (props: CardFilmsProps) => {
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

export default CardFilms;
