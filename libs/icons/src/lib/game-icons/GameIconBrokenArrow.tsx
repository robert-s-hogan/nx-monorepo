import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBrokenArrowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'broken-arrow'];
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
        d="M93.46 20.72c1.63 23.26 3.31 46.51 4.95 69.77-23.11 2.13-46.17 4.3-69.28 6.43 29.35 18.68 58.74 37.28 88.07 55.88 9.3-3.6 18.5-7.2 27.7-10.9 26.7 22.8 53.5 45.6 80.2 68.3 7.5-1.6 15.2-3.3 22.7-4.9-30.5-25.7-61-51.5-91.5-77.2 2.3-9.9 4.6-19.8 6.9-29.69C140 72.53 116.7 46.6 93.46 20.72zM245.9 220.1c-1.5 7-3 13.9-4.5 20.8 11.4 11.7 22.8 23.4 34.1 35.1.4.2.7.4 1 .5 1.4-7.4 2.7-14.8 4-22.2-11.5-11.4-23.1-22.8-34.6-34.2zM217.7 231c-5.8 1.2-11.6 2.3-17.4 3.5 5 4.9 9.9 9.9 14.9 14.8 1.9-3.4 5-15.9 2.5-18.3zm89 5.5c-1.1 6.9-2.3 13.8-3.4 20.7 1.8 2.2 3.6 4.3 5.4 6.5l.5.5c5.4-3.2 10.9-6.3 16.3-9.4v-.5c-6.3-6-12.5-11.9-18.8-17.8zm10.9 36.1c-5.4 2.4-10.9 4.9-16.3 7.4v.5c37.2 46.2 74.5 92.4 111.8 138.5-12.7 1.7-25.4 3.4-38.1 5-.1.5-.3 1-.5 1.5 36.1 21.9 72.2 43.9 108.4 65.8-13.9-40.3-27.7-80.5-41.6-120.8l-12.9 37.2H427c-36.5-45.1-72.9-90.1-109.4-135.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBrokenArrowIcon })
);
