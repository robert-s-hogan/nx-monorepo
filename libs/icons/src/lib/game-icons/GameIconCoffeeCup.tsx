import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCoffeeCupIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'coffee-cup'];
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
        d="M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zm80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48 1.91 11.772-16 32-16 32s48-25.373 48-48-42.8-25.978-48-48c-3.875-16.414 16-48 16-48zM73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238H73.293zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57-4.387 0-8.656-.517-12.764-1.465-2.912 9.62-6.176 19.165-9.84 28.51C368.602 373.97 376.176 375 384 375c48.155 0 87-38.845 87-87 0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37 2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05 2.738-2.373 5.79-6.186 8.428-10.58 3.1-5.17 5.448-11.177 6.955-16.37H42.762z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCoffeeCupIcon })
);
