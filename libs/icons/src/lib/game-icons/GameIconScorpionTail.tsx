import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconScorpionTailIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'scorpion-tail'];
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
        d="M234.156 50.97C206.818 50.935 181.553 62 160.75 82.5l-.03.03-2.407 2.407-3.407.344c-49.495 5.403-83.706 33.15-89.5 85.095l-.375 3.5-2.56 2.47c-36.707 35.167-44.447 78.697-16.595 128.75l1.688 3.06-.626 3.44C41.666 340.604 46.126 363.12 57.5 381s30.177 31.492 55.344 40.625l4.125 1.5 1.624 4.063c12.656 31.673 29.218 54.478 50.844 64.687l297.968-.22c-37.12-38.026-97.324-65.477-154.562-82.28-32.405-9.513-63.8-15.746-89.22-19.03-25.418-3.286-45.81-3.197-52.155-1.75l-11.407 2.624-.532-11.72c-.957-22.076-7.112-36.88-16.655-48.813-9.543-11.93-22.932-21.06-38.813-29.687L94 295.53l6.97-9.092c9.87-12.847 11.79-26.224 10.093-41.594-1.7-15.37-7.504-32.15-12.782-48.844l-2.843-8.97 8.876-3.186c39.696-14.2 61.118-34.885 70.687-62.53l3.22-9.314 9.31 3.313c27.454 9.8 51.837 2.02 85.25-9.813l6.564-2.313 4.344 5.438c14.095 17.657 33.44 31.493 53.75 36.688 3.166.81 6.358 1.384 9.562 1.78-57.08 49.068 10.62 193.9 145.03 147.876-89.358-9.813-54.872-56.095-45.78-93.595 10.03-41.365-14.234-70.782-51.75-70.53-4.967-22.81-18.265-40.016-35.78-51.564-19.87-13.097-45.096-18.51-67.876-15.03l-3 .47-2.75-1.314c-17.383-8.393-34.527-12.417-50.938-12.437z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconScorpionTailIcon })
);
