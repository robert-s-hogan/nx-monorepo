import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGrassMushroomIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'grass-mushroom'];
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
        d="M167.4 57.61c-34.3 4.67-64.1 25.44-86.28 51.99-20.64 24.6-34.16 54.1-38.39 77.6 70.27 27.5 139.37 40.6 213.27 5-6.3-46.2-25.3-105.82-88.6-134.59zM361 110.8c-49.8 18.4-65 54.7-70.5 84 58.7 22.2 114.1 14.1 170.1-3.5-4-14-14.3-31.5-29.7-46.4-17.7-17.2-41.9-30.9-69.9-34.1zM376.4 226c-5.3.2-10.7.3-16.1.2l-29.9 144.2c4.6 4.4 8.6 8.5 12.1 12.9 4 5 7.2 10.4 10 16.6 4.6-9.1 10.1-18.5 16.4-28.1l7.5-145.8zm-231.3 5.1c-4.6 31.9-6.5 63.7-5 95.5 21.6 17.8 35.9 33.8 46.6 57.3 2.3-5.7 4.8-11.4 7.3-17-11.6-43.6-20.5-88.2-22.9-135.3-8.7.3-17.4.1-26-.5zm302.9 69c-12.4 14-24.9 28.7-36.5 43.6-24.2 30.7-44.4 62-51.5 84.9l-9.7 31.2-7.7-31.8c-4.1-17.1-7.7-25.4-14.1-33.5-4.2-5.2-10.6-11.1-18.5-18.1 0 10.1-.5 19.5-2.9 28.4-4 14.3-13.3 27-30.6 40.1l-7.2 5.4-5.4-7.2c-23.3-31.2-25.3-80.3-20.2-125.7-22.8 31.7-36.7 60.7-48.3 94.6l-8.8 25.9-8.3-26.1c-12.2-38.8-26.5-54.1-59.9-79.6 2.3 13.6 4.7 27.3 5.4 41.3 1.1 21.5-2.1 43.9-15.9 66.3l-12.97 20.9-3.63-24.3c-7.1-47.5-21.46-68.6-45.71-89.6 15.7 45.5 14.22 91.6.47 139H477.2c-10.3-27.8-16.6-58.7-7.8-95.7-18.6 7.6-37.8 23.4-42.7 51.2l-5.4 30.3-11.8-28.4c-12-28.8 1.4-64.8 17.6-100.2 6.6-14.7 14-29.1 20.9-42.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGrassMushroomIcon })
);
