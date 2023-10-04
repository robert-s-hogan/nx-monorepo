import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwipeCardIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'swipe-card'];
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
        d="M396.6 69c-6.2-.15-13.3.95-21.5 3.47L54.52 171.3c-16.44 5.1-25.94 12.4-30.67 21.4-4.78 8.9-5.39 21-.36 37.4l5.9 19.2L439.7 122.9l-5.9-19.3c-5.1-16.42-12.4-26-21.4-30.67-4.5-2.41-9.7-3.79-15.8-3.93zm59.3 106.7L45.65 302.2l32.66 106.3c5.03 16.3 12.32 25.9 21.29 30.6 9 4.8 21 5.5 37.4.5l320.5-98.8c16.4-5.1 25.9-12.4 30.6-21.4 4.8-9 5.5-21 .5-37.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwipeCardIcon })
);
