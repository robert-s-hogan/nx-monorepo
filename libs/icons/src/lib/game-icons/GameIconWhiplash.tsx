import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWhiplashIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'whiplash'];
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
        d="M407.056 376.454C511.348 517.65 270.95 424.988 194.373 328.11c-59.935-75.823 212.347-41.197 101.407-177.47C172.653-.453-54.165-13.92 65.816 92.687 35.032 6.53 299.823 128.57 311.883 205.35c10.934 69.623-308.9 30.456-112.237 175.655 137.22 101.312 397.83 144.363 207.41-4.55z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWhiplashIcon })
);
