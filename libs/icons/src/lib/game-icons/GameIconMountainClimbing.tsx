import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMountainClimbingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mountain-climbing'];
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
        d="m90.67 25 96.83 144.3-1.5-24.6L105.7 25zM131 25l156.2 123.1-5-41.8 121.5 129.5L435 487h51.7V25zm70.5 98.2 3.6 61.8c-5 7.4-24.1 32.5-56.9 36.8-4.1.5-7.2 4-7.2 8.2 0 0-.8 37.2 45.7 83.1l34.7-55.7c-7-7.3-14-16.5-21.5-28.7l27.6-30.1c1.8-1.9 2.5-4.4 2.1-7L218 121.4c-2.7-11.2-16.9-7.5-16.5 1.8zm-69.8 27c-9.2 0-16.9 3.8-20.8 10.3-7.1 11.8-.1 29.1 15.8 38.6s34.5 7.4 41.5-4.5-.1-29.1-15.9-38.5c-6.5-3.8-13.7-5.9-20.6-5.9zm155.5 76.2-42.6 32.7-12.1 80.1c12.4 3.1 25.4 4 38.3 2.2l22.5-3.1 45.9 50.4c1.9 2 4.6 3 7.3 2.6l29-4c11.2-3.3 7.2-16.5-1.4-16.6l-21.4.7-30.6-66.1c-1.1-2.2-3-3.8-5.3-4.5l-38.7-11.2 22.6-19.4L353 289c4.7 1.5 9.3-1.1 10.8-5.3l10.5-34c1.7-11.3-11.7-13.6-15.5-6l-8.1 17.1-53.9-34.8c-3.2-1.8-6.8-1.5-9.6.4zM223.9 285l-24.3 38.9c5.3 3.8 11 7.1 16.9 9.7zm19 74.3L274.4 487h12.8l-31.4-127.4c-4.3.1-8.6 0-12.9-.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMountainClimbingIcon })
);
