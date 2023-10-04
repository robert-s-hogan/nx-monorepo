import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLighterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lighter'];
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
        d="M128.531 24.513L41.26 79.218c-4.237 2.655-7.888 8.224-9.338 14.545-1.45 6.32-.59 12.923 2.066 17.16l93.477 149.123c2.655 4.236 8.222 7.888 14.543 9.338 6.32 1.45 12.923.591 17.16-2.065l87.273-54.705-117.91-188.101zm306.969.19c32.33 85.822-99.89 67.288-83.393 116.667l24.788 8.483c39.2-6.48 60.512-25.838 27.744-39.096 35.64-7.755 50.043 25.379 25.478 48.38-2.638 2.471-5.253 4.53-7.834 6.245l15.924 5.45c65.99-10.819 47.478-101.744-2.707-146.13zm-92.781 132.48l-4.531 13.246 21.761 7.445-5.828 17.031-21.762-7.445-9.71 28.385 88.937 30.43 4.531-13.247-21.76-7.445 5.827-17.031 21.761 7.447 9.711-28.385-88.937-30.431zm-60.826 21.916a32 32 0 0 0-26.896 13.272l8.745 13.95 17.535-4.632 24.34 8.328 4.281-12.514a31.984 31.984 0 0 0-28.005-18.404zm161.265 30.508l-14.197 41.488a23.344 23.344 0 0 0 6.277 3.273c12.12 4.147 25.062-2.197 29.21-14.316 4.146-12.12-2.198-25.06-14.317-29.207a23.29 23.29 0 0 0-6.973-1.238zm-162.55 10.876l-24.401 6.448 201.102 68.81-15.336-20.045-161.366-55.213zm-34.702 21.95l-54.062 158.006c-1.619 4.73-.95 11.354 1.904 17.177 2.854 5.824 7.68 10.41 12.41 12.03l166.522 56.978c4.73 1.619 11.354.948 17.177-1.906 5.824-2.854 10.411-7.68 12.03-12.41l54.064-158.006-210.045-71.87z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLighterIcon })
);
