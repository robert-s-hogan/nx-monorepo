import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBusStopIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bus-stop'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M202.6 72.77c-59.2-.34-118.46 11.4-176.32 33.93l3.79 20.2H364.2l4-20.1c-54.3-22.72-109.9-33.7-165.6-34.03zm234.5 52.33c-28.5 0-51.5 23.1-51.5 51.5 0 28.3 23 51.4 51.5 51.4 28.3 0 51.4-23.1 51.4-51.4 0-28.4-23.1-51.5-51.4-51.5zm0 20.8c16.8 0 30.6 13.8 30.6 30.7s-13.8 30.6-30.6 30.6-30.6-13.7-30.6-30.6c0-16.9 13.8-30.7 30.6-30.7zm-404.39 4.6v20.8H361.5v-20.8H32.71zm1.73 44.8v243.3h20.83V195.3H34.44zm304.06 0v243.3h20.9V195.3h-20.9zm88.1 55.5v187.6h20.8V250.8h-20.8zm-316.7 92.6c-16.47 0-29.85 13.4-29.85 29.9V405h40.35v34h20.8v-34h111.9v34h20.8v-34h40.3v-31.7c0-16.5-13.3-29.9-29.8-29.9H109.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBusStopIcon })
);
