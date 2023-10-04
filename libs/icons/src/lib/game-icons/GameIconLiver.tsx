import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLiverIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'liver'];
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
        d="M154.13 98.45c-74.523-.454-118.57 44.693-124.821 87.952-13.777 104.53-24.78 197.596 42.572 226.59 21.234 9.14 139.689-96.135 223.23-119.239 10.255-63.758 9.712-95.298 3.509-157.142 0 0-3.245-18.8-17.582-21.94-29.596-6.482-80.816-16.355-126.909-16.22zm267.935 10.313c-30.34-.091-65.864 3.56-95.367 9.5-6.687 1.347-10.656 15.303-9.916 19.024 5.8 59.214 6.503 87.53-2.395 149.486 165.98-69.253 180.409-116.413 178.531-136.756-2.967-32.153-33.145-41.14-70.853-41.254zM284.659 314.628c-39.357 14.62-79.953 40.882-113.676 64.54 20.086 5.945 56.674 6.638 74.525-3.397 18.28-15.838 34.462-37.393 39.15-61.143z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLiverIcon })
);
