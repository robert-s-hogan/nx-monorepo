interface FaceProps {
  color: string;
  height: number;
  width: number;
  position?: string;
  style: string;
  children?: React.ReactNode;
}

const Face: React.FC<FaceProps> = ({
  color,
  height,
  width,
  position,
  style,
  children,
}) => {
  return (
    <div
      className={`face shadow-2xl absolute ${position} rounded-full ${style} bg-${color}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Face;
