import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrossedBonesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crossed-bones'];
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
        d="M407.406 22.53c-9.832.353-19.334 5.774-25.03 18C310.03 195.818 206.43 320.097 49.405 373.47c-59.39 20.186-15.982 92.874 47.094 47.092-53.34 55.186 19.308 97.326 42.22 42.22 60.94-146.596 186.387-265.928 332.967-332.97 50.467-23.082 7.442-85.442-40.843-40.843 28.943-35.27 1.69-67.337-23.438-66.44zm-301.094.5c-24.643.51-50.094 31.967-21.78 66.47-48.286-44.598-91.28 17.76-40.813 40.844 63.846 29.2 123.663 68.308 175.905 115.28l25.25-25.25c-44.19-52-80.892-112.838-111.875-179.343-6.013-12.905-16.282-18.214-26.688-18zm188.344 249.032l-24.344 24.344c44.515 49.72 81.008 105.93 106.344 166.875 22.91 55.108 95.56 12.968 42.22-42.217 63.075 45.78 106.485-26.876 47.093-47.063-65.995-22.43-122.55-57.414-171.314-101.938z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrossedBonesIcon })
);
