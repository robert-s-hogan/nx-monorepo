import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMoldovaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'moldova'];
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
        d="M60.55 44.17L181.3 16.43 341 94.41l3 89.99 36.8 10.5 5.2 69.7 33.8 9s34.5 81 31.5 81-123.8-27-123.8-27l-64.4 168-43.5-3.7 19.5-179.3-55.5-110.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMoldovaIcon })
);
