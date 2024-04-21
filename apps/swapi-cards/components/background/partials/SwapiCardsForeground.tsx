interface SwapiCardsForegroundProps {
  className: string;
  color: string;
}

const SwapiCardsForeground: React.FC<SwapiCardsForegroundProps> = ({
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
        <stop offset="98%" stopColor={color} stopOpacity="0.99" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      d="M2048,1048.23v263H0V997c168.25,0,334.1-27.82,502.57-30,174.78-2.28,349.66,10.71,523-12.54,167.54-22.47,340.61.4,507.49,18.58C1705,991.74,1883.3,990.12,2048,1048.23Z"
      transform="translate(19.5 19.5)"
      fill={`url(#${className}-gradient)`}
    />
  </>
);

export default SwapiCardsForeground;
