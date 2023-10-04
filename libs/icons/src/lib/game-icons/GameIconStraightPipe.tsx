import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStraightPipeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'straight-pipe'];
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
        d="M445.8 26.44c-.6 0-1.1 0-1.6.1-2 .26-3.6 1.14-5.1 2.63L54.19 414c10.18 1.9 20.27 7.3 28.39 15.4 8.14 8.2 13.47 18.3 15.43 28.5L482.9 73.03c3-3 3.5-6.42 1.7-12.57-1.9-6.15-6.8-13.73-13-19.95-6.2-6.23-13.8-11.1-20-12.98-2.3-.68-4.2-1.06-5.8-1.09zM45.19 431.2c-5.39.2-10.19 2-13.52 5.3-8.2 8.2-7.21 25.3 5.66 38.2 12.87 12.8 29.98 13.8 38.18 5.6 8.2-8.2 7.21-25.3-5.66-38.2-7.64-7.6-16.78-11-24.66-10.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStraightPipeIcon })
);
