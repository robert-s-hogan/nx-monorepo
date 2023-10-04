import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLinkedRingsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'linked-rings'];
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
        d="M321.7 21.36c-43.2 0-86.4 16.5-119.4 49.5-19.1 19.08-32.6 41.54-40.7 65.44 16.9-2.4 32.9-2.7 48.7-1.1 3.9-5.5 8.3-10.7 13.2-15.6 23.3-23.26 53.8-34.9 84.4-34.9 30.6 0 61.2 11.64 84.5 34.9 46.6 46.6 46.6 122.4 0 168.9-46.5 46.6-122.4 46.6-168.9 0-22.2-22.2-33.9-51.1-34.9-80.2-11.5 1.8-22.8 5.6-33.2 11.4 5.8 33 21.4 64.5 46.9 90 66 66 172.9 66.1 238.9 0 66-66 66-172.8 0-238.84-33-33-76.3-49.5-119.5-49.5zM147.6 158.2c-27.9 7.7-58.94 25.4-76.75 44-47.5 47.4-60.8 116-40.1 175.3 8.91 24.1 23.56 47.1 40.1 63.6 66.05 66 172.95 66 238.95 0 19.1-19.1 32.6-41.6 40.7-65.5-16.2 2.5-32.6 2.9-48.8 1.2-3.8 5.4-8.2 10.6-13.1 15.5-62.7 39.7-137.8 40.6-173.3-4.4-20.57-26-32.05-58.8-30.55-85.8 2.58-41.6 26.85-79.9 57.75-98.5 10.2-5.9 37.6-15.1 61.6-15.1 33.7 1.5 60.6 11.1 84.5 34.9 22.3 22.1 33.8 51.1 34.8 80.3 11.6-1.8 22.9-5.6 33.3-11.4-9.4-41.6-26.9-73.2-53.9-96.7-21.4-18.7-44.1-31.4-70.6-37.6-28.4-7-58.6-6.5-84.6.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLinkedRingsIcon })
);
