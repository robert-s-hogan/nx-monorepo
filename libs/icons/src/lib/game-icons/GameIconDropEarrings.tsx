import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDropEarringsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'drop-earrings'];
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
        d="M157 33.11L60.66 71.64l6.68 16.72L131 62.89l-10.2 40.71C101.7 107.1 87 123.9 87 144c0 19.9 14.4 36.6 33.3 40.3-8.7 18.1-19.3 40.9-29.97 67.1C72.49 295 57 343 57 372c0 21.5 8.53 36.5 21.62 47 13.1 10.4 31.18 16 49.38 16 18.2 0 36.3-5.6 49.4-16 13.1-10.5 21.6-25.5 21.6-47 0-29-15.5-77-33.3-120.6-10.7-26.2-21.3-49-30-67.1 18.9-3.7 33.3-20.4 33.3-40.3 0-18.7-12.7-34.5-29.9-39.4L157 33.11zm256 .04l-96.3 38.54 6.6 16.72L387 62.95l-10.2 40.65c-19.1 3.5-33.8 20.3-33.8 40.4 0 19.9 14.4 36.6 33.3 40.3-8.7 18.1-19.3 40.9-30 67.1C328.5 295 313 343 313 372c0 21.5 8.5 36.5 21.6 47 13.1 10.4 31.2 16 49.4 16s36.3-5.6 49.4-16c13.1-10.5 21.6-25.5 21.6-47 0-29-15.5-77-33.3-120.6-10.7-26.2-21.3-49-30-67.1 18.9-3.7 33.3-20.4 33.3-40.3 0-18.7-12.7-34.5-29.9-39.4L413 33.15zM128 121c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23zm256 0c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23zM128 453c-7 0-13.2 2.2-17.2 5.2-4.1 3.1-5.8 6.4-5.8 9.8 0 3.4 1.7 6.7 5.8 9.8 4 3 10.2 5.2 17.2 5.2s13.2-2.2 17.2-5.2c4.1-3.1 5.8-6.4 5.8-9.8 0-3.4-1.7-6.7-5.8-9.8-4-3-10.2-5.2-17.2-5.2zm256 0c-7 0-13.2 2.2-17.2 5.2-4.1 3.1-5.8 6.4-5.8 9.8 0 3.4 1.7 6.7 5.8 9.8 4 3 10.2 5.2 17.2 5.2s13.2-2.2 17.2-5.2c4.1-3.1 5.8-6.4 5.8-9.8 0-3.4-1.7-6.7-5.8-9.8-4-3-10.2-5.2-17.2-5.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDropEarringsIcon })
);
