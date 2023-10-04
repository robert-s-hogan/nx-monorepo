import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDiscIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'disc'];
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
        d="M163.2 33.1l-49.6 33.04L27.29 389.9l361.31 89 96.1-356-66.3-18.5-24.5 91.4-105-28.1-14.7 55.2c15.2 9.7 22.3 28.2 17.7 45.6-5.9 22.2-28.7 35.3-50.8 29.4-22.1-5.9-35.2-28.7-29.3-50.8 4.7-17.6 20.2-30.1 38.4-30.8 2.1-.1 4.3 0 6.4.3l14.3-53.8-115-30.8 2.4-9 22.8-84.91zm34.9 7.78l-19.4 77.92 202.1 54.1 19.4-77.87zM70.32 331.6l312.08 74.7-4.4 18.2-312.04-74.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDiscIcon })
);
