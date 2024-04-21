interface SwapiCardsSkyProps {
  className: string;
  color: string;
}

const SwapiCardsSky: React.FC<SwapiCardsSkyProps> = ({ className, color }) => (
  <>
    <defs>
      <linearGradient
        id={`${className}-gradient`}
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor={color} stopOpacity="0.25" />
        <stop offset="48%" stopColor={color} stopOpacity="0.75" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      d="M0,1311.21V0H2048c0,19.59-1.36,904.19,0,1311.21C1987.54,1311.77,667.9,1311.21,0,1311.21Z"
      transform="translate(19.5 19.5)"
      fill={`url(#${className}-gradient)`}
    />
  </>
);

export default SwapiCardsSky;
