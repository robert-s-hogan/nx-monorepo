import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLevelCrossingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'level-crossing'];
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
        d="M84.501 24v45.064l9.139 4.063 8.861-3.94V24h-18zM45.175 71.283l-22.676 7.559 29.14 12.951 19.842-8.818-26.306-11.692zm96.931 0L22.501 124.441 45.175 132l119.607-53.158-22.676-7.559zm-6.466 40.207l-19.84 8.819L142.106 132l22.674-7.559-29.14-12.95zm291.478 5.008l-16.695 9.629-10.998 40.975 19.527-11.262 9.8-36.508-1.634-2.834zM93.64 130.158l-9.139 4.06v55.264c4.818 4.332 8.368 10.05 10 16.502a33.108 33.108 0 0 1 8-14.54v-57.348l-8.861-3.938zm294.732 8.688l-19.53 11.263-10.997 40.975 19.529-11.264 10.998-40.974zm-41.58 23.982l-19.53 11.264-10.997 40.974 19.529-11.263 10.998-40.975zm-41.58 23.98l-19.53 11.264-10.997 40.977 19.529-11.264 10.998-40.976zM62.5 199c-8.39 0-15 6.61-15 15s6.61 15 15 15 15-6.61 15-15-6.61-15-15-15zm64 0c-8.39 0-15 6.61-15 15s6.61 15 15 15 15-6.61 15-15-6.61-15-15-15zm137.13 11.791l-19.528 11.264-10.999 40.974 19.53-11.263 10.998-40.975zm-169.13 11.225c-1.632 6.452-5.182 12.17-10 16.502v54.808l18-10.38v-46.39a33.108 33.108 0 0 1-8-14.54zm127.553 12.755l-19.53 11.264-11 40.977 19.53-11.264 11-40.977zm-41.58 23.983l-19.53 11.264-10.998 40.976 19.53-11.265 10.998-40.975zm-41.58 23.982l-32.948 19.002 14.024 26.545 7.926-4.572 10.998-40.975zm-48.551 28.002l-49.57 28.59 14.988 25.988 48.607-28.035-14.025-26.543zm42.158 31.096l-78 44.988V486h78V341.834zm339 2.166v144h18V344h-18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLevelCrossingIcon })
);
