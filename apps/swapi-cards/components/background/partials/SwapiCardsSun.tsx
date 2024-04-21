interface SwapiCardsSunProps {
  className: string;
  color: string;
}

const SwapiCardsSun: React.FC<SwapiCardsSunProps> = ({ className, color }) => (
  <>
    <defs>
      <linearGradient
        id={`${className}-gradient`}
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor={color} stopOpacity="1" />
        <stop offset="48%" stopColor={color} stopOpacity="0.75" />
        <stop offset="100%" stopColor={color} stopOpacity=".25" />
      </linearGradient>
    </defs>
    <circle cx="1043.5" cy="200" r="150" fill={`url(#${className}-gradient)`} />
  </>
);

export default SwapiCardsSun;
