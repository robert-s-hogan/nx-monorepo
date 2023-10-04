import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpoutnikIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spoutnik'];
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
        d="M399.22 15.03c-15.483 0-28.033 12.55-28.033 28.032 0 14.46 10.972 26.336 25.032 27.844l60.374 248.53c-18.185-15.346-40.6-23.03-63-23.03-25.02 0-50.046 9.577-69.188 28.72-36.185 36.184-38.155 93.355-5.937 131.843L73.81 397.53c-1.2-14.374-13.22-25.655-27.906-25.655-15.48 0-28.03 12.55-28.03 28.03 0 15.483 12.55 28.033 28.03 28.033 9.65 0 18.176-4.888 23.22-12.313l291.155 70.72c34.573 12.523 74.728 4.897 102.5-22.876 27.094-27.094 35.005-65.936 23.75-99.908L414.407 66.625c7.736-4.99 12.875-13.673 12.875-23.563 0-15.48-12.58-28.03-28.06-28.03zM110.155 96.22c-15.48 0-28.03 12.548-28.03 28.03 0 15.482 12.55 28.03 28.03 28.03 4.647 0 9.017-1.154 12.875-3.155l180.064 171.75c2.512-3.09 5.217-6.092 8.094-8.97 1.562-1.56 3.153-3.075 4.78-4.53L135.813 135.5c1.515-3.447 2.375-7.244 2.375-11.25 0-15.482-12.55-28.03-28.03-28.03z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpoutnikIcon })
);
