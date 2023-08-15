interface DroidProps {
  name: string;
  color: string;
  shape: string;
}

const Droid = ({ name, color, shape }: DroidProps) => {
  return (
    <div className={`droid ${shape} ${color}`}>
      <p>{name}</p>
    </div>
  );
};

export default Droid;
