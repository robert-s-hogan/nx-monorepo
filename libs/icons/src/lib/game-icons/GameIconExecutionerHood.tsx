import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconExecutionerHoodIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'executioner-hood'];
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
        d="M326.1 32.71C225.6 59.65 191.7 102.6 180.2 136.3l-18.9 189c-33.4 27.9-75.14 45.3-122.16 60.9l18.31 37.3 38.59-13.8 22.06 21.4-17.3 27.6 36.2 19.1 20.5-29.9 36.8 7.2-10.9 30.4 41.8 9.9 12.6-37.5 42 .4 23 32.7 42.4-3.6-15.1-32.4 35.9-9.6 23.7 28.6 47.9-19.2-35.3-27.5 25.2-17.2 30.8 9.6 15.7-33c-42.9-18.7-87-37.1-114.8-59.9l-15.8-197.4c.6-19.4-43.1-50.58-17.3-96.69zM198.5 208c6 28.1 28.7 33.1 57.5 40.9-26.5.9-43.2 15.6-57.5 0-10.7-11.5-6.3-27.8 0-40.9zm131 0c6.3 13.1 10.7 29.4 0 40.9-14.3 15.6-31 .9-57.5 0 28.8-7.8 51.5-12.8 57.5-40.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconExecutionerHoodIcon })
);
