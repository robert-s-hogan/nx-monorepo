import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPunchingBagIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'punching-bag'];
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
        d="M383 19.27l-88.6 88.63c5.8-2.9 12.7-5 20.6-6.7 4.4-1 9.2-1.84 14.2-2.58L383 44.73l53.8 53.89c5 .74 9.8 1.58 14.2 2.58 7.9 1.7 14.8 3.8 20.6 6.7L383 19.27zm0 93.73c-23.5 0-47.1 2-64 5.8-8.5 1.9-15.4 4.3-19.3 6.5-3.4 2-3.7 3-3.7 2.8v49.2c5.6-1.4 12.2-2.4 20-3.2 18.6-2.1 42.8-3.1 67-3.1 24.2 0 48.4 1 67 3.1 7.8.8 14.4 1.8 20 3.2v-49.2c0 .2-.3-.8-3.7-2.8-3.9-2.2-10.8-4.6-19.3-6.5-16.9-3.8-40.5-5.8-64-5.8zm0 76c-23.7 0-47.6 1-65 2.9-8.7 1-15.9 2.3-20.3 3.5-.6.2-1.2.4-1.7.5v200.2c.5.1 1.1.3 1.7.5 4.4 1.2 11.6 2.5 20.3 3.5 17.4 1.9 41.2 2.9 65 2.9 23.8 0 47.6-1 65-2.9 8.7-1 15.9-2.3 20.3-3.5.6-.2 1.2-.4 1.7-.5V195.9c-.5-.1-1.1-.3-1.7-.5-4.4-1.2-11.6-2.5-20.3-3.5-17.4-1.9-41.2-2.9-65-2.9zm-253.3 6.8C101.8 195.5 59 224 59 224v64s37.9 44.7 79.8 44.4c21.5-.1 86.5-9.5 95.5-37.7 5.8-18 5.7-46.4-9-60.7-20.1-19.6-83.5-10-83.5-10s9.7-17.5 4.1-22.7c-4.1-3.8-9.8-5.4-16.2-5.5zM24 224v64h18v-64H24zm272 190.7v49.2c0-.2.3.8 3.7 2.8 3.9 2.2 10.8 4.6 19.3 6.5 16.9 3.8 40.5 5.8 64 5.8s47.1-2 64-5.8c8.5-1.9 15.4-4.3 19.3-6.5 3.4-2 3.7-3 3.7-2.8v-49.2c-5.6 1.4-12.2 2.4-20 3.2-18.6 2.1-42.8 3.1-67 3.1-24.3 0-48.4-1-67-3.1-7.8-.8-14.4-1.8-20-3.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPunchingBagIcon })
);
