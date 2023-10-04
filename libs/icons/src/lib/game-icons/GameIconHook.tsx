import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHookIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hook'];
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
        d="M264 25c-34.9 0-63 28.1-63 63s28.1 63 63 63 63-28.1 63-63-28.1-63-63-63zm0 30c18.1 0 33 14.88 33 33 0 18.1-14.9 33-33 33s-33-14.9-33-33c0-18.12 14.9-33 33-33zm0 18c-8.4 0-15 6.61-15 15s6.6 15 15 15 15-6.61 15-15-6.6-15-15-15zm-45.3 82.1c-3.7 9.1-9.5 17.5-16.4 25.6-11.7 13.6-26.6 26.7-41.2 41.5-29 29.4-56.4 64.2-55.2 120 .6 32.9 21.2 67.6 51 93.9 29.8 26.3 68.4 43.8 101.8 44.2 28.9.4 62-7.4 87.1-25.1 25.2-17.7 42.7-44.5 42.6-85.6 0-16.8-10.5-43.4-15.1-67.4-2.3-12-3.3-23.9 1.1-34.8 3.8-9.7 12.7-17.2 25.1-20.7 3-7.3 2-11.1-.2-13.9-2.5-3.1-8.6-5.9-16.3-5.8-7.6.1-16.1 2.9-22.3 8.1-6.1 5.3-10.4 12.8-10.4 24.6.1 27.9-3.6 54.7-13 77-9.5 22.3-25.4 40.3-48.6 48-18.7 6.1-40 1.5-58.1-8.2-18.1-9.8-33.6-25.1-38.9-44.1-5.9-21.5-.4-43.2 10.1-63.4 10.5-20.2 26.1-39.4 42.3-57.3 15.1-16.7 30.6-32.4 42.9-46.1-7.3 2.2-15 3.4-23 3.4-16.8 0-32.4-5.1-45.3-13.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHookIcon })
);
