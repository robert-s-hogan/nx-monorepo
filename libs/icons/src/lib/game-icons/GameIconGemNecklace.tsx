import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGemNecklaceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gem-necklace'];
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
        d="M26.537 18.69c-5.14 13.737 1.93 32.374 21.42 32.374 1.11 0 2.175-.07 3.205-.185-14.21 12.198-9.28 41.503 15.158 41.503 3.21 0 6.075-.513 8.612-1.418-7.113 13.846-.416 34.93 20.31 34.93 5.08 0 9.312-1.273 12.71-3.39-5.43 13.773 1.582 32.77 21.26 32.77 3.985 0 7.446-.785 10.395-2.142-2.018 11.57 3.74 24.662 17.375 27.35l-55.47 76.296 169.78 233.525L441.067 256.78 364.97 152.11c13.87-2.34 19.88-15.235 18.147-26.84 1.81.403 3.756.625 5.852.625 20.725 0 27.42-21.084 20.307-34.93 2.537.905 5.403 1.418 8.612 1.418 24.436 0 29.365-29.305 15.157-41.504 1.03.115 2.095.184 3.205.184 19.49 0 26.56-18.637 21.42-32.375h-42.84c-3.445 9.207-1.397 20.607 6.19 27.13-1.007-.113-2.05-.175-3.133-.175-20.563 0-27.425 21.08-20.367 34.925-2.524-.904-5.373-1.414-8.554-1.414-17 0-24.62 14.408-22.767 27.225-1.804-.404-3.745-.628-5.832-.628-10.137 0-16.94 5.126-20.39 11.982L298.366 60.5 271.29 23.256l-7.558 10.394-81.398 111.96c-3.543-6.543-10.237-11.366-20.068-11.366-3.973 0-7.43.792-10.38 2.162 2.21-12.973-5.388-27.87-22.673-27.87-5.053 0-9.275 1.28-12.67 3.405 5.38-13.772-1.77-32.784-21.3-32.784-3.184 0-6.034.51-8.56 1.416 7.06-13.846.2-34.927-20.363-34.927-1.084 0-2.126.062-3.134.175 7.588-6.523 9.636-17.923 6.19-27.13h-42.84zm271.83 73.59l38.38 52.788L326 185.18c-2.728-.513-5.523-.795-8.377-.795-3.85 0-7.593.504-11.203 1.422l-20.498-76.41 12.445-17.118zm-26.578 36.558l17.48 65.16c-4.572 3.337-8.695 7.403-12.225 12.022-3.006 3.932-5.625 8.27-7.824 12.927l-44.646-25.168 47.215-64.942zm79.095 35.68l32.416 44.587-17.308 9.772c-2.192-4.632-4.8-8.947-7.79-12.86-4.17-5.453-9.16-10.144-14.75-13.76l7.433-27.74zm-33.262 38.554c9.644 0 18.64 5.02 25.73 14.297 7.092 9.277 11.81 22.688 11.81 37.696 0 15.01-4.72 28.42-11.81 37.7-7.094 9.278-16.086 14.296-25.73 14.296-9.644 0-18.638-5.018-25.73-14.296-7.092-9.28-11.813-22.69-11.813-37.7 0-15.007 4.72-28.42 11.813-37.697 7.092-9.28 16.086-14.298 25.73-14.298zm-104.11 5.924l49.716 28.03c-1.198 5.775-1.84 11.817-1.84 18.04 0 7.44.913 14.623 2.606 21.395L213.72 304.85l-34.947-48.07 34.74-47.782zm180.85 15.324l23.598 32.46-23.73 32.642-22.982-12.955c1.694-6.774 2.606-13.958 2.606-21.4 0-6.252-.647-12.32-1.854-18.12l22.363-12.627zm-123.666 69.82c1.87 3.546 3.988 6.888 6.348 9.975 3.883 5.08 8.48 9.495 13.607 13l-18.314 68.36-47.555-65.41 45.914-25.924zm93.85.003l18.62 10.498-32.774 45.08-8.313-30.988c6.148-3.716 11.614-8.72 16.12-14.617 2.36-3.087 4.478-6.428 6.347-9.972zm-56.576 30.55c3.13.682 6.352 1.06 9.653 1.06 2.323 0 4.604-.2 6.846-.542l11.79 43.948-37.893 52.12-11.89-16.356 21.494-80.23z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGemNecklaceIcon })
);
