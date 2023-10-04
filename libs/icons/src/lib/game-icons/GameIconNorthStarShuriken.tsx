import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNorthStarShurikenIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'north-star-shuriken'];
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
        d="M346.864 367.468l-25.053-34.472c11.758-14.539 18.833-33.005 18.833-53.113 0-1.446-.146-2.85-.214-4.28l40.568-13.182-17.865 46.392L493.89 202.594l-168.224-9.086 41.72 27.032-40.537 13.173c-11.231-17.177-28.527-29.978-48.828-35.468v-42.628l38.597 31.328L256 29.753l-60.62 157.191 38.598-31.328v42.629c-20.3 5.49-37.596 18.29-48.826 35.467l-40.527-13.172 41.715-27.021-168.23 9.075L148.878 308.82l-17.866-46.387 40.558 13.178c-.07 1.423-.214 2.832-.214 4.273 0 20.113 7.078 38.58 18.835 53.124l-25.045 34.471-12.812-48.025-43.354 162.794 141.434-91.537-49.637 2.656 25.06-34.495c9.384 3.602 19.526 5.656 30.163 5.656s20.781-2.059 30.172-5.656l25.059 34.488-49.634-2.649 141.428 91.537-43.349-162.799zm-131.466-87.585c0-22.386 18.215-40.6 40.602-40.6 22.386 0 40.601 18.214 40.601 40.6 0 22.387-18.215 40.602-40.601 40.602-22.387 0-40.602-18.215-40.602-40.602z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNorthStarShurikenIcon })
);
