interface SmileProps {
  color: string;
  height: number;
  width: number;
  className?: string;
}

const Smile: React.FC<SmileProps> = ({ color, height, width, className }) => {
  const smilePartWidth = width / 2;

  return (
    <div className={`relative ${className}`}>
      <div
        className={`smilePart absolute top-24 right-9 rounded-br-full bg-${color}`}
        style={{
          height: `${height}px`,
          width: `${smilePartWidth}px`,
        }}
      ></div>
      <div
        className={`smilePart absolute top-24 left-9 rounded-bl-full bg-${color}`}
        style={{
          height: `${height}px`,
          width: `${smilePartWidth}px`,
        }}
      ></div>
    </div>
  );
};

export default Smile;
