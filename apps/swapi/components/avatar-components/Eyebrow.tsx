// Eyebrow.tsx
interface EyebrowProps {
  color: string;
  size: string;
  position: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({ color, size, position }) => {
  return (
    <div
      className={`eyebrow absolute ${position} ${size} rounded-md bg-${color}`}
    ></div>
  );
};

export default Eyebrow;
