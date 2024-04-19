interface SwapiCardsGroundProps {
  color: string;
}

const SwapiCardsGround: React.FC<SwapiCardsGroundProps> = ({ color }) => {
  return (
    <div
      className="ground absolute w-full h-full"
      style={{ backgroundColor: `var(${color})` }}
    ></div>
  );
};

export default SwapiCardsGround;
