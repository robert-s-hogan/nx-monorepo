import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpinningSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spinning-sword'];
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
        d="M256.438 19.375c-47.71 0-95.422 14.41-136.094 43.22 13.022 15.09 26.314 30.127 39.156 44.468 16.038-11.682 32.482-18.857 48.688-22.282l9.875-9.874 6.625-6.625 6.593 6.626 7.72 7.72c78.735 5.644 140.54 95.133 101.406 175.53l118.5 118.5c54.447-90.673 42.59-209.88-35.625-288.094C377.17 42.45 316.806 19.376 256.44 19.376zM66.5 27.063L29.53 64.03c37.95 29.834 80.152 65.906 115 96.845l7.407 6.594-7 7-47.375 47.374L117.25 241.5l34.5-34.5 268.125 268.156 77.344 19.28-21.845-74.78-26.977-26.978.04-.053-117.75-117.75-.032.045L207.25 151.5l37.094-37.094-19.656-19.656-46.47 46.438-6.968 6.937-6.563-7.28C133.5 106.334 96.644 64.837 66.5 27.062zm-1.28 90.062C-1.735 209.41 6.38 339.035 89.593 422.25c52.93 52.93 124.633 75.448 193.562 67.625-131.5.997-246.804-128.563-207.125-263.156l-4.874-4.876 6.594-6.625 3.25-3.25c7.028-18.512 17.076-37.017 30.5-55.22-14.87-12.992-30.55-26.433-46.28-39.625zm120.374 46.03c12.283 0 22.22 9.968 22.22 22.25 0 2.224-.332 4.35-.94 6.376l236.94 236.97-13.19 13.188L194.47 205.813c-2.72 1.185-5.72 1.843-8.876 1.843-12.284 0-22.25-9.964-22.25-22.25 0-12.285 9.966-22.25 22.25-22.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpinningSwordIcon })
);
