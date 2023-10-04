import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconImbricatedArrowsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'imbricated-arrows'];
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
        d="M24.41 26.84L111.1 180.8l52.1-19 17.2-47.1c-52-29.28-104.02-58.56-155.99-87.86zM219.1 63.09l-36.3 99.51 60 70.9 14-38.1c-12.6-44.1-25.2-88.2-37.7-132.31zm84.3 59.11l-43.1 118.1 65.3 77.2 18.7-51.3c-13.6-48-27.2-96-40.9-144zm94.4 52l-55.3 151.5 102.4 120.9-122.5-103.8-146.8 53.5 310.6 88.5c-29.5-103.6-59-207.1-88.4-310.6zm-233.2 7L64.56 217.7l132.24 37.6 38.7-14.1c-23.7-20-47.3-40-70.9-60zm77.7 77.4L123.5 302l144.1 40.9 51.9-18.9c-25.7-21.8-51.5-43.6-77.2-65.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconImbricatedArrowsIcon })
);
