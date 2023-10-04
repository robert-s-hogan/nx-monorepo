import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconColombiaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'colombia'];
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
        d="M300.285 18.627l16.062 11.568c-61.797 55.453-66.367 51.932-35.505 133.25l140.122 32.45c-15.192 70.066-3.262 87.445 13.239 129.328l-74.323.29c1.584 53.786 13.364 101.907-6.953 167.86l-24.831-8.94 6.952-46.682-70.35 6.09c-51.27-68.647-121.674-90.653-186.9-125.28 29.958-14.76 57.869-31.287 67.54-63.568L126.466 143.75c41.01-47.538 75.07-92.922 173.819-125.123z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconColombiaIcon })
);
