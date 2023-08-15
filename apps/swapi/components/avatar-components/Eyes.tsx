// Eyes.tsx
interface EyesProps {
  color: string;
  size: string;
  position: string;
}

const Eyes: React.FC<EyesProps> = ({ color, size, position }) => {
  return (
    <div
      className={`eye ${size} ${position} absolute rounded-md bg-${color}`}
    ></div>
  );
};

export default Eyes;
