import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLaserBlastIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'laser-blast'];
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
        d="M19.5 18.625v37.78l64.313 64.314 33.437-33.44-68.656-68.655H19.5zm55.53 0l55.44 55.438 13.218-13.25L101.5 18.624H75.03zM176.438 54.5L52.876 178.063 89.53 214.72 213.126 91.124 176.437 54.5zM19.5 82.844v23.625l39.28 39.28 11.814-11.813L19.5 82.844zm187.28 41.062l-84.905 84.906 24.344 24.375 84.905-84.937-24.344-24.344zm125.345 27.406c-6.366 0-12.706 2.423-17.563 7.282-9.713 9.717-9.713 25.47 0 35.187 9.714 9.718 25.444 9.718 35.157 0 9.713-9.717 9.712-25.47 0-35.186-4.858-4.86-11.23-7.28-17.595-7.28zm-87.844 10.25l-16.78 16.782c.252-.004.498-.03.75-.03 13.752 0 27.486 5.262 38.03 15.81 21.093 21.1 21.096 55.055 0 76.157-21.09 21.1-55 21.1-76.092 0l-.5-.53c-10.39-10.67-15.5-24.498-15.313-38.28l-16.78 16.78c2.906 12.924 9.352 25.194 19.374 35.22.235.235.48.454.718.686.136.156.267.315.406.47-8.723 9.11-8.618 23.566.344 32.53 9.082 9.086 23.823 9.086 32.906 0 2.04-2.04 3.626-4.36 4.75-6.844 22.125 7.47 43.827 4.068 73.687 12.5l29.783 29.782c-3.636 6.71-2.64 15.265 3.03 20.937 5.67 5.673 14.23 6.67 20.938 3.033L462.94 495.969h32.03V467L323.157 295.187c-5.594-15.51-7.705-28.616-9.406-40.656 6.178 2.096 13.263.677 18.188-4.25 6.91-6.912 6.91-18.118 0-25.03-6.542-6.544-16.924-6.847-23.875-1-3.867-12.71-10.74-25.536-25.188-40.406-1.645-1.692-3.408-3.25-5.22-4.688-9.666-9.018-21.237-14.86-33.374-17.594zM357.063 262.22c-3.525 0-7.028 1.34-9.718 4.03-5.38 5.382-5.38 14.118 0 19.5s14.09 5.382 19.47 0c5.38-5.382 5.378-14.118-.002-19.5-2.69-2.69-6.224-4.03-9.75-4.03zM227.595 335.31c-3.526 0-7.06 1.34-9.75 4.032-5.38 5.38-5.38 14.087 0 19.47 5.38 5.38 14.12 5.38 19.5-.002 5.38-5.382 5.38-14.087 0-19.468-2.69-2.69-6.224-4.03-9.75-4.03z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLaserBlastIcon })
);
