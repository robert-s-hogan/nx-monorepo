function SwapiCardsStar() {
  return <div className="bg-white h-[1px] w-[1px] absolute"></div>;
}

// For creating multiple stars dynamically
function SwapiCardsSky({ count = 100 }) {
  return (
    <div className="relative h-screen w-screen">
      {Array.from({ length: count }).map((_, index) => (
        <SwapiCardsStar key={index} />
      ))}
    </div>
  );
}

export default SwapiCardsSky;
