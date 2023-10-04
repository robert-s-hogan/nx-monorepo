import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDoorRingHandleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'door-ring-handle'];
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
        d="M247.1 42c-1.4 3.19-3.3 6.09-5.5 8.64-4.2 4.77-9.4 8.71-15 12.08-8.2 4.94-17.1 8.67-25.6 10.32v53.26c4.2-1.3 8.4-2.4 12.7-3.4 10.5-11.6 25.5-18.9 42.3-18.9 16.8 0 31.8 7.3 42.3 18.9 4.3 1 8.5 2.1 12.7 3.4V73.04c-8.5-1.65-17.4-5.38-25.6-10.32-5.6-3.37-10.8-7.31-15-12.08-2.2-2.55-4.1-5.45-5.5-8.64zm8.9 80c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm-54.7 23.2C135.9 167.8 89 229.9 89 303c0 92.3 74.7 167 167 167s167-74.7 167-167c0-73.1-46.9-135.2-112.3-157.8 1.5 5 2.3 10.3 2.3 15.8 0 9-2.1 17.5-5.8 25 45.2 20.1 76.8 65.5 76.8 118 0 71.1-57.9 129-129 129-71.2 0-129-57.9-129-129 0-53.2 32.4-99 78.5-118.7-3.5-7.4-5.5-15.6-5.5-24.3 0-5.5.8-10.8 2.3-15.8zm13.7 55.3c-4.9 1.8-9.5 4-14 6.5v10.3c7.4 1.9 14 6 19.4 11.3 5.3 5.4 9.4 12 11.3 19.4h48.6c1.9-7.4 6-14 11.3-19.4 5.4-5.3 12-9.4 19.4-11.3v-9.2c-4.6-2.7-9.5-5.1-14.5-7.1-10.3 10.5-24.7 17-40.5 17-16.1 0-30.7-6.7-41-17.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDoorRingHandleIcon })
);
