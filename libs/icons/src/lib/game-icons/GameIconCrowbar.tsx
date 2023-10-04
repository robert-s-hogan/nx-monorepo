import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrowbarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crowbar'];
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
        d="M417.186 30.744c12.997 11.133 42.59 56.346 39.306 97.635-1.062 43.45-8.042 83.123-20.326 115.91l-53.443 63.673c-11.52 28.003-20.44 60.487-33.024 84.76l-15.93-8.383c13.343-29.754 23.773-60.04 33.152-85.55l53.416-63.644c27.66-74.695 20.835-130.908 2.615-166.083-46.748-89.71-131.486 12.928-167.7 64.822l-95.968 132.588s9.633 11.59 16.127 19.236c14.846-20.453 67.174-89.815 104.817-133.747 27.56-32.168 71.878-85.727 102.04-69.326 8.757 4.65 9.267 9.775 14.37 27.263 5.104 17.49 4.986 106.234-14.238 145.098l-30.47 38.74-31.23 97.5 21.19 17.35 19.985-3.47 51.7-71.854-16.33 59.623-7.423 27.404-10.047 4.75 26.957 5.345 5.518-5.537c8.46-13.59 35.28-53.34 44.082-83.32l4.414-82.33c27.852-64.092 49.867-167.234-21.46-219.372-10.932-6.942-10.954-6.95-22.102-9.082zm-55.82 73.03c-23.088 10.194-39.402 27.09-66.65 58.675-43.976 50.97 0 0-104.378 133.34 8.856 3.515 21.662 8.974 21.662 8.974 45.562-49.32 113.515-196.82 184.64-194.864-1.83-3.83-4.207-6.543-6.68-8.35-9.062-5.913-19.99-2.063-28.593 2.225zm-211.68 174.828L18 460.734V494h57.52l128.47-177.686-32.297-11.544z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrowbarIcon })
);
