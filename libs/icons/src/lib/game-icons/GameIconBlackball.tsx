import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBlackballIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'blackball'];
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
        d="M257.5 18C127 18 20.91 124.1 20.91 254.6S127 491.1 257.5 491.1 494 385.1 494 254.6 388 18 257.5 18zm0 18.09c120.4 0 217.3 98.11 217.3 218.51 0 120.4-96.9 217.3-217.3 217.3S39 375 39 254.6 137.1 36.1 257.5 36.1zm1.7 21.25c-18.1 0-35.6 2.46-52.2 7.03 16.1-.1 32.3 2.14 48.2 6.5-6.8 5.03-11.2 13.11-11.2 22.22 0 15.31 12.4 27.61 27.6 27.61 8.5 0 16-3.7 21.1-9.7 1.1 10.6 7.7 19.6 16.9 24-14 11.3-23 28.7-23 48.1 0 34.1 27.6 61.7 61.6 61.7 24.6 0 45.8-14.3 55.7-35 26.6 67.2 20.2 139.2-14.6 190.3 40.4-35.9 66-88.3 66-146.7 0-108.2-87.8-196.05-196.1-196.05zM243.1 218.1c-16.6 0-30.1 13.5-30.1 30.1s13.5 30.1 30.1 30.1 30.1-13.5 30.1-30.1-13.5-30.1-30.1-30.1zm83.3 60c-22.6 0-41 18.3-41 40.9 0 22.6 18.4 41 41 41s40.9-18.4 40.9-41-18.3-40.9-40.9-40.9zm-97.6 34c-16.6 0-30.1 13.4-30.1 30.1 0 16.6 13.5 30.1 30.1 30.1s30.1-13.5 30.1-30.1c0-16.7-13.5-30.1-30.1-30.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBlackballIcon })
);
