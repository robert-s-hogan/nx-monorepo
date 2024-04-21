interface SwapiCardsMountainThreeProps {
  className: string;
  color: string;
}

const SwapiCardsMountainThree: React.FC<SwapiCardsMountainThreeProps> = ({
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
        <stop offset="8%" stopColor={color} stopOpacity="0.99" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      d="M2048,1311.21H0v-540s11.92-13.93,37.69-14q31.82-.13,63.64-.17c76.87-.17,153.76-.08,230.61-2.07,64.52-1.67,131.39-4.41,189.35-36,62.62-34.17,117.17-68.32,184.84-93.88,26.72-10.09,51.72-21,81-16.2,35.49,5.87,59.44,31,97.71,27.48,69.73-6.43,149.54-52.14,215.79-75.35,80-28,159.45-59.74,240.43-84.57,35-10.72,71-18.23,104.89-32.23s60.38-38.58,93.23-53.49c70-31.76,165.62-20.35,240.85-28.69,91.17-10.12,176.87-36.62,266.51-52.85C2046.58,643.17,2045.58,977.19,2048,1311.21Z"
      transform="translate(19.5 19.5)"
      fill={`url(#${className}-gradient)`}
    />
  </>
);

export default SwapiCardsMountainThree;
