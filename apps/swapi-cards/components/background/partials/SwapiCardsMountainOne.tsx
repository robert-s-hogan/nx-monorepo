interface SwapiCardsMountainOneProps {
  className: string;
  color: string;
}

const SwapiCardsMountainOne: React.FC<SwapiCardsMountainOneProps> = ({
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
      d="M2048,1311.21H0V590.11s52.64-15.5,67.3-16.85c37.23-3.44,63.79,10.55,95.73,27.4,52.54,27.71,99.73,78.88,162.26,73.92,75.62-6,159-21.34,231-45,36-11.82,70.56-23.61,109.16-21.43,36.28,2.05,63.53,12.31,98.6-3.3C828.93,576,875.13,532,947.23,514.52c77.43-18.8,155.23-26.67,225.61-67.34,31.23-18.05,56.07-42.7,84.16-64.75,36.44-28.6,71.24-33.84,115.19-46.26,71.22-20.11,144.17-32.93,214.72-52.3,68.2-18.72,153.69,25.81,231.07,15.26,82.59-11.25,158.87-65.28,230-105.17Z"
      transform="translate(19.5 19.5)"
      fill={`url(#${className}-gradient)`}
    />
  </>
);

export default SwapiCardsMountainOne;
