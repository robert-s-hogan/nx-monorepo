interface SwapiCardsDirtProps {
  className: string;
  color: string;
}

const SwapiCardsDirt: React.FC<SwapiCardsDirtProps> = ({
  className,
  color,
}) => (
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
      d="M2048,1216.31c0,13.23,0,94.9,0,94.9H670.5c204.89-120.15,464.16-72.06,691.58-92.47,120.85-10.84,228.46-40.26,343.91-74.72C1821.2,1109.63,1941.14,1179.56,2048,1216.31Z"
      transform="translate(19.5 19.5)"
      fill={`url(#${className}-gradient)`}
    />
  </>
);

export default SwapiCardsDirt;
