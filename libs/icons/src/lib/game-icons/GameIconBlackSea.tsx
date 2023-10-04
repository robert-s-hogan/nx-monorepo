import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBlackSeaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'black-sea'];
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
        d="M416.5 116l-171.3 48.6 34.8 37.3 42.2-7-.9 17.3-28.4-2.4-48.7 31.3-19.3-10.4 8.9-22.4-33.8-15.9 38.8-18.3-4.5-11.4-46.7-13 .5-29.8C109.9 155.5 72.82 236.6 25.74 305.2c-8.41 12.3 7.05 71.8 108.76 74 0 0 61.2-37.6 95.3-37.3 39.8.3 110.4 45.3 110.4 45.3l72.3 7.8c81.8 8.8 83.7-47.3 68.1-77.4-7.5-14.5-91.7-76.9-147-104.3l-1.6-.1 4.1-6.4 22.5-4.3c4.2-13.1 3.8-28 28.1-32.9l-22.8-21.3 47.7-17.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBlackSeaIcon })
);
