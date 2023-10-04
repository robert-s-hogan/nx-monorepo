import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHalfTornadoIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'half-tornado'];
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
        d="M226.156 40.938c-46.454-.08-96.45 19.73-137.47 58.812C39.464 146.653 15.052 209.82 18.627 267c9.67-40.365 31.79-80.226 65.56-112.406C162.24 80.224 272.514 74.9 330.346 142.72c5.225 6.127 9.85 12.63 13.875 19.436-46.88-21.615-109.684-9.01-157.22 36.28-38.973 37.136-58.27 87.135-55.438 132.408 7.657-31.96 25.136-63.49 51.875-88.97C239.012 188.923 315.226 180.17 363.313 218c.042.304.085.602.125.906.042-.24.085-.478.125-.72 5.293 4.19 10.24 8.958 14.782 14.283 4.636 5.437 8.65 11.236 12.094 17.343-35.916-13.992-82.265-3.594-117.72 30.187-30.336 28.904-45.357 67.82-43.156 103.063 5.96-24.877 19.56-49.45 40.375-69.282 41.144-39.2 96.825-47.264 134.375-22.624.08.544.178 1.08.25 1.625.077-.438.147-.872.22-1.31 6.167 4.108 11.846 9.102 16.874 15 5.932 6.954 10.594 14.685 14.03 22.967-28.21-13.206-66.125-5.706-94.81 21.625-23.427 22.322-35.047 52.38-33.345 79.594 4.604-19.21 15.115-38.153 31.19-53.47 37.144-35.39 89.632-37.932 117.155-5.655 4.622 5.422 8.245 11.444 10.906 17.908-21.254-8.385-48.76-2.248-69.78 17.78-17.93 17.084-26.803 40.08-25.5 60.907 3.523-14.702 11.574-29.216 23.875-40.938 28.43-27.09 68.59-29.015 89.656-4.312 6.714 7.872 10.696 17.402 12.064 27.75 3.046-17.547-.535-34.938-11.406-47.688-3.694-4.33-7.977-7.816-12.688-10.5.04-17.47-5.24-34.025-16.25-46.937-3.854-4.52-8.207-8.355-12.938-11.5.146-22.794-6.676-44.415-21.03-61.25-4.852-5.69-10.323-10.493-16.25-14.5-1.593-25.722-10.332-49.84-26.75-69.094-4.257-4.99-8.856-9.486-13.782-13.47-1.945-32.638-12.992-63.268-33.813-87.686-26.816-31.447-65.042-46.992-106.03-47.063z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHalfTornadoIcon })
);
