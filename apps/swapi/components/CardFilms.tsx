interface Props {
  films: string[];
}

const CardFilms: React.FC<Props> = (props) => {
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
