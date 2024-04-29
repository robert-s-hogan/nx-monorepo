function SwapiCardsStar() {
  // Random positioning for each star
  const style = {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  };

  return (
    <div className="bg-white h-[1px] w-[1px] absolute" style={style}></div>
  );
}

export default function SwapiCardsUnknown() {
  const starCount = 100; // Number of stars to display

  return (
    <div className="relative w-96 h-96 lg:w-80 xl:w-72 bg-black z-0">
      {Array.from({ length: starCount }).map((_, index) => (
        <SwapiCardsStar key={index} />
      ))}
    </div>
  );
}
