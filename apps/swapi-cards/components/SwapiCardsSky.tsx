function SwapiCardsStar() {
  // Generate random positions for each star
  const top = Math.random() * 100;
  const left = Math.random() * 100;

  return (
    <div
      className="bg-white h-[1px] w-[1px] absolute"
      style={{ top: `${top}%`, left: `${left}%` }}
    ></div>
  );
}

function SwapiCardsSky({ count = 100 }) {
  return (
    <div className="relative h-screen w-screen">
      {Array.from({ length: count }, (_, index) => (
        <SwapiCardsStar key={index} />
      ))}
    </div>
  );
}

export default SwapiCardsSky;
