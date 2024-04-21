interface SwapiCardsBushTwoProps {
  className: string;
  color: string;
}

const SwapiCardsBushTwo: React.FC<SwapiCardsBushTwoProps> = ({
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
        <stop offset="0%" stopColor={color} stopOpacity="0.95" />
        <stop offset="98%" stopColor={color} stopOpacity="0.98" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      d="M775.26,1172.75c-24.11-.36-48.83-12.83-74.58-13-32.22-.2-63.52,8.37-95.4,11.24-54.29,4.89-123.95,2.21-144.51-57.67-14.67-42.71-9.77-87.09,29.32-112,22.82-14.56,52.69-19,77.55-29.08,30.58-12.37,42.27-28.44,66.71-47.91,37-29.48,116.21-36.29,162.19-27.12,42.78,8.54,50.65,38.16,60.94,76.15,12.25,45.19,42.79,90.58,23.38,138.74C863.63,1154.8,818.85,1172.88,775.26,1172.75Z"
      transform="translate(19.5 19.5)"
      fill={`url(#${className}-gradient)`}
    />
  </>
);

export default SwapiCardsBushTwo;
