
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBatwingEmblemIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'batwing-emblem'];
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
        <path fill="currentColor" d="M15.406 25.938c41.737 42.61 52.607 128.648 13.438 174.78 63.818 10.74 75.725 61.317 64.47 137.5 32.67-20.39 72.694-12.612 98.25 27.688-6.63 11.324-10.44 24.48-10.44 38.5 0 42.143 34.358 76.5 76.5 76.5 42.144 0 76.5-34.357 76.5-76.5 0-14.02-3.81-27.176-10.437-38.5 25.555-40.3 65.58-48.078 98.25-27.687-11.256-76.185.65-126.763 64.47-137.5-39.17-46.134-28.3-132.173 13.437-174.782C415.536 43.782 344.188 113 309.97 197.718c51.49 41.114 32.28 114.232-20.626 137.095-9.675-4.44-20.41-6.938-31.72-6.938-11.31 0-22.043 2.5-31.718 6.938C173 311.95 153.79 238.832 205.28 197.72 171.063 113 99.715 43.782 15.407 25.937zm242.22 320.625c4.094 0 8.087.416 11.937 1.218-17.75 3.756-31.063 19.507-31.063 38.376 0 21.666 17.553 39.25 39.22 39.25 17.49 0 32.312-11.47 37.374-27.28.22 2.06.344 4.16.344 6.28 0 32.043-25.77 57.813-57.813 57.813-32.043 0-57.813-25.77-57.813-57.814 0-32.042 25.77-57.844 57.813-57.844z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBatwingEmblemIcon);
    