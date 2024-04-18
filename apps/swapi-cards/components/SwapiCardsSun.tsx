const swapiCardsSunAnimationStyles = `
  @keyframes sunshineBef {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.2; }
  }
  @keyframes sunshineAft {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.05; }
  }
`;

function SwapiCardsSun() {
  return (
    <>
      <style>{swapiCardsSunAnimationStyles}</style>
      <div className="bg-yellow-300 rounded-full absolute bottom-[40%] left-0 right-0 mx-auto opacity-40 h-24 w-24 animate-sunshineBef before:bg-yellow-300 before:rounded-full before:absolute before:content-[''] before:h-32 before:w-32 before:left-[-15px] before:top-[-15px] before:opacity-40 before:animate-sunshineBef after:bg-yellow-300 after:rounded-full after:absolute after:content-[''] after:h-40 after:w-40 after:left-[-30px] after:top-[-30px] after:opacity-20 after:animate-sunshineAft"></div>
    </>
  );
}

export default SwapiCardsSun;
