import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTreeBranchIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tree-branch'];
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
        d="M335.594 18.53c-40.164.157-75.583 36.542-88.656 51.75-25.09-4.49-50.48-6.746-76.094-6.53-19.542.165-39.218 1.786-58.97 4.875-22.38-17.928-46.586-31.63-72.5-36.97C12.973 45.292 20.87 66.202 26.75 86.688c33.85-2.782 68.376 8.017 103.063 24.438 7.513 5.012 15.003 10.257 22.468 15.75 10.193 36.02 15.185 71.684 16.75 107.22-24.967 5.267-73.76 20.245-87.968 58.56l56.657-8.06-60.782 30.592c-1.59 28.013 4.228 50.995 12.28 71.844l38.626-40.874-29.063 63.25c12.435 27.13 25.52 52.227 25.75 82.844 15.673-15.742 30.667-28.657 44.314-40.78l-9.313-58.94 22.22 47.25c17.657-16.465 32.232-32.686 41.78-54.155l-36.28-56.063 44.594 30.47c.21-.965.4-1.953.594-2.938 11.05-55.837-31.68-107.473-44.657-121.625-1.19-29.747-4.676-59.735-11.5-90.032 39.703 32.23 78.083 71.073 113.064 115.28-8.172 28.668-12.69 52.292-14.156 71.97l31.593-28.47-30.81 61.626c3.548 23.952 13.97 39.684 29 51.562l25.342-46.156-9.062 56.813c16.678 9.177 36.777 16.253 58.406 24.78-.176-16.76.29-29.34.28-48.343l17.564 55.688c18.85 8.084 38.462 17.87 57.72 31.562 2.478-28.53 2.51-57.14-.345-84.188l-53.688-20.625 51.594 4.313c-3.97-25.8-10.814-49.764-20.967-70.313L371.5 307.344l47.094-8.53c-21.232-29.417-52.085-47.727-94.563-47.69-5.655.006-11.52.36-17.592 1.032-49.197-62.79-105.105-115.302-162.657-154.25-4.302-4.435-8.683-8.766-13.155-12.97 38.91-4.456 77.396-2.886 115.25 4.095 7.227 18.038 23.78 51.747 52.094 69.376l-6.75-53.562 29.436 63.062c2.974.69 6.026 1.226 9.188 1.53 59.64 5.77 98.592-45.932 158.937-38.686-18.445-8.86-31.076-21.388-42.717-35.063l-67.844.563 51.405-20.53c-14.13-17.083-30.05-34.107-56.094-46.75L324.876 58.5l25.875-38.22c-5.098-1.204-10.166-1.768-15.156-1.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTreeBranchIcon })
);
