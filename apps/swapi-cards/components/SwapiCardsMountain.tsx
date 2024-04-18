const swapiCardsMountainStyles = `
.mountain-m1 {
  background-color: var(--pink-darker10); /* Define this color in your tailwind.config.js */
  border-radius: 100%;
  height: 200px;
  width: 120%;
  left: -10%;
  bottom: -15%;
  transform: rotate(-9deg);
}

.mountain-m2 {
  background-color: var(--pink-darker15); /* Define this color in your tailwind.config.js */
  border-radius: 40% 0 0 0;
  height: 280px;
  right: 0;
  left: -15%;
  top: 50%;
  bottom: -50%;
  transform: rotate(6deg);
}
`;

function SwapiCardsMountain() {
  return (
    <>
      <style>{swapiCardsMountainStyles}</style>
      <div className="relative">
        <div className="absolute mountain-m1"></div>
        <div className="absolute mountain-m2"></div>
      </div>
    </>
  );
}

export default SwapiCardsMountain;
