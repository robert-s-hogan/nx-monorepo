interface SwapiCardsCactusProps {
  className: string;
  color: string;
}

const SwapiCardsCactus: React.FC<SwapiCardsCactusProps> = ({
  className,
  color,
}) => {
  return (
    <>
      <defs>
        <linearGradient
          id={`${className}-gradient`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity=".9" />
          <stop offset="50%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${className}-gradient)`}
        stroke={`url(#${className}-gradient)`}
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M757.6,326.5c-10.6,0-19.2,8.6-19.2,19.2v36.4
          c0,10.9-8,19.9-18.3,21.6v-72.7c0-14.9-12.1-27.1-27.1-27.1s-27.1,12.1-27.1,27.1v104.1c-10.4-1.7-18.3-10.7-18.3-21.6v-36.4
          c0-10.6-8.6-19.2-19.2-19.2c-10.6,0-19.2,8.6-19.2,19.2v36.4c0,32.1,25.2,58.4,56.8,60.2v43.6h-10.6c-1.9,0-3.5,1.6-3.5,3.5
          c0,1.9,1.6,3.5,3.5,3.5h75.2c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5H720v-75c31.6-1.8,56.8-28.1,56.8-60.2v-36.4
          C776.8,335.2,768.2,326.5,757.6,326.5z M769.8,382.2"
      />
    </>
  );
};

export default SwapiCardsCactus;
