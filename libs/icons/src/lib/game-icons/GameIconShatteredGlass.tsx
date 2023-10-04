import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShatteredGlassIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shattered-glass'];
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
        d="M431.688 18.813l-83.594 65.75L456.5 63.03l-24.813-44.218zm-121.375.906l-21.47 91.5 79.72-91.5h-58.25zm-160.657 4.405l-2.187 6.25c-13.237 37.557-21.314 79.002-21.314 118.094 0 53.795 15.034 93.182 40.22 118.874 18.918 19.3 43.185 30.496 69.78 34.875 17.132 48.134 16.18 101.07-2.47 148.78-30.572 5.112-60.267 18.292-86.342 39.53H378.53c-26.062-21.23-55.75-34.383-86.31-39.5-18.647-47.685-19.602-100.598-2.5-148.717 26.782-4.308 51.187-15.52 70.124-34.97 13.345-13.706 23.776-31.308 30.625-52.906l-84.75-71.656-51.595-1.093 52.156 119.625-50.186-73.687-79.156 64.47 63.812-86.94-16.28-23.905-53.845-16.156-9.813-2.938 3.844-9.53 36-88.5h-50.999zm71.156 0l-34.968 86 48.562 14.594 32.78-33.69-17.436-66.905h-28.938zM395.438 97.03l-81.78 28 81.906 69.25c2.706-13.91 4.156-29.165 4.156-45.81 0-16.88-1.513-34.186-4.283-51.44z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShatteredGlassIcon })
);
