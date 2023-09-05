// Ear.tsx
interface EarProps {
  color: string;
  size: string;
  position?: string;
}

const Ear: React.FC<EarProps> = ({ color, size, position }) => {
  return (
    <div
      className={`ear rounded-full absolute ${position} ${size} bg-${color}`}
    ></div>
  );
};

export default Ear;
