import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconQuillIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'quill'];
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
        d="M492.47 21.938c-82.74-.256-167.442 12.5-242.814 45.093 5.205 13.166 9.578 28.48 13.188 45.532C242.55 97.27 217.167 92.385 194.72 95.5c-46.22 28.432-87.13 66.305-119.44 115.594 25.193 7.756 51.57 22.81 72.845 43.844-31.87-7.045-68.907-5.895-99.188 3-13.743 28.688-25.008 60.48-33.343 95.687 128.71-30.668 130.522 3.514 50.75 140.438 16.877 12.614 42.182 13.77 61.906-1.563C134 267.936 231.43 326.246 254.188 354.562c14.288-40.59 34.77-82.54 62.906-126.468-17.29-14.667-39.21-24.838-63.813-32.375 25.364-5.256 50.91-10.928 74.126-11.22 6.482-.082 12.78.272 18.844 1.156 17.57-24.007 37.408-48.612 59.75-73.97-12.538-6.31-25.476-11.454-38.125-14.967 17.132-5.76 35.274-8.34 52.844-8.157 2.01.02 4.004.095 6 .187 20.07-21.708 41.927-43.976 65.75-66.813zM426.72 47.28C295.79 112.674 200.094 210.206 144.936 333.53 172.34 184.41 287.048 84.57 426.72 47.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconQuillIcon })
);
