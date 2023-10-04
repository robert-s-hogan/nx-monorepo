import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHammerBreakIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hammer-break'];
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
        d="M215.9 63.71l-49.6 44.79 101.8 112.7 24.4-22.1c-8.6-9.6-15.6-18.3-19.6-28.9-4.3-11.8-3.6-25.2 1.8-41.4l-58.8-65.09zm225.9 16.22l-87.9 78.37-10.6-38.5-36 93s41.3-11.7 62-17.5v32.6l122.5-79.6-95.1 24.7 45.1-93.07zM187.2 158.5L24.17 305.7l22.09 24.5L209.2 182.8l-22-24.3zm65.4 96.5v36.6l53.5 56-6.6 23 57.3 57.2-12.8 12.8-12-12-48.2 27.3-8.8-15.6 43.8-24.8-25-25-6.6 23.3-17.4-5 16.1-56.2-33.3-34.9V493h238V255H348.5l18.8 44.3 54.8 6.2 38.9-34.9 12 13.4-17.2 15.5 12.8 38-17 5.8-10.4-30.8-13.1 11.8-52.7-6 18.4 43.3-23.2 30.8-14.4-10.8 17-22.6-29.7-69.7-24.4 15.1-9.4-15.2 26.6-16.5.5.9-7.9-18.6h-76.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHammerBreakIcon })
);
