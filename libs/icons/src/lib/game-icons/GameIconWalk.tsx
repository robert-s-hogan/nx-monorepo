import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWalkIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'walk'];
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
        d="M271.9 25.85c-18.4 0-36 16.73-39.2 40.97-3.4 25.83 11.3 47.48 30.9 49.88 19.7 2.4 39.5-14.9 43-40.77 3.5-25.86-11.5-47.43-31-49.85-1.2-.15-2.5-.23-3.7-.23zm-38.2 95.75c-38 6.3-75.2 41.9-94 66-11.5 33.4-14.5 66.7-20.7 100l28.2-.8c6.6-25.2 8.2-51.9 21-75.4 14.8-8.2 26.9-20.6 38.4-33.8-6.4 32.9-14 72.3-13.2 101.8 29.8 70.9 95.7 140.4 133 206.4l29.9-24.3c-28.8-55.7-57.5-106.4-94.3-160.2 2.1-7.1 43.3-163.5 28-171.9-20.2 9-40.9 6-56.3-7.8zm71.9 58.6c-3.1 17.8-5.3 35.1-10 52.8 4.5 5.4 7.5 10.5 14.3 15.3 26 15.3 52 26.3 78 36.7l9.2-29.9-77.5-37.6c-4.3-12.5-7.9-25.2-14-37.3zM187.1 310.1c-5.1 25-9.8 50.2-11.6 76.5-15.9 31.7-35.7 51.6-60.5 76.4l30 23.2c23.1-25 49.9-47 66.7-73.8l14-42.6c-15.7-19-28.4-38.8-38.6-59.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWalkIcon })
);
