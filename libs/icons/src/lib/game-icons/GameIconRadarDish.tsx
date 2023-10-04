import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRadarDishIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'radar-dish'];
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
        d="M227.47 31.47c-67.048 70.547-83.972 178.936-32.907 267.467 51.07 88.544 153.333 128.083 247.906 105.22l-215-372.688zm232.81 82.155c-5.05.133-10.127 1.48-14.81 4.188-11.303 6.53-17.02 19.035-15.44 31.218l-96.31 29.25 34.842 60.345L442 169.812c9.755 7.504 23.456 8.826 34.78 2.282 14.992-8.663 20.117-27.822 11.47-42.813-5.945-10.305-16.856-15.948-27.97-15.655zm-311.874 107.5l-26.656 4.688 10.688 60.53-42.063 39.376 18.688 32.124 58.656-17.813 3.155 4.158L53.53 493.094h78.345l85.344-21.53 52.686 21.53h50.563l-7.064-45.78.813-.22-.97-.625-4.75-30.72c-6.82-2.366-13.532-5.066-20.125-8.03l3.844 24.967-51-33.437 18.75-6.594c-6.528-4.05-12.883-8.437-19.033-13.125l-19.375 6.814-39.625-26 5.813-7.375 15.156-9.658c-9.043-10.742-17.264-22.432-24.53-35.03-16-27.74-25.828-57.3-29.97-87.157zm21.906 153.97l29.094 19.06-61.062 21.5 31.97-40.56zm48.72 31.967l49.343 32.344-49.78 12.563-58.845-24.033 59.28-20.875zm-94.813 26.532l5.718 2.312 58.125 23.75L82.75 486.22l41.47-52.626zm170.968 18.312l5.187 33.438-52.625-21.47 45.813-11.562 1.625-.406z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRadarDishIcon })
);
