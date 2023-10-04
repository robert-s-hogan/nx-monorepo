import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSandSnakeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sand-snake'];
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
        d="M31.7 83.93C9.492 194.9 191.1 121 195.3 136.6c2.4 8.9-156.4 35.9-163.56 95.4-16.49 137 321.16.7 323.76 8.9 5.5 17.8-218.6 46.4-149.8 157.7 39.7 64.2 114.8 32 164.1 33.4 26.3 42.4 66.5 60.5 96 48 27.7-11.7 14.8-45.6 1.5-76.5l-14.2 15.7 7.7-28.7c-40.3-63.2-182.5-6.2-188.3-19.9-10.2-24.1 216.2-41.5 180.2-158.7-29-94.2-332.7 21.2-332.9 6.1-.2-20.9 188.1-50.4 167.4-94.9-34.3-73.82-210.22 40.8-224.95-33.59C57 63.05 140.3 42.6 132.3 35.24 106.4 11.35 37.92 52.9 31.7 83.93zM387.8 390.8l35.9 33.6-43.5-12.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSandSnakeIcon })
);
