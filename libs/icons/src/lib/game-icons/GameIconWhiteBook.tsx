import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWhiteBookIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'white-book'];
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
        d="M102.5 26.03l90.03 345.75 289.22 23.25-90.063-345.75L102.5 26.03zm-18.906 1.564c-30.466 11.873-55.68 53.098-49.75 75.312l3.25 11.78c.667-1.76 1.36-3.522 2.093-5.28C49.097 85.7 65.748 62.64 89.564 50.5l-5.97-22.906zm10.844 41.593c-16.657 10.012-29.92 28.077-38 47.407-5.247 12.55-8.038 25.63-8.75 36.53L112.5 388.407c.294-.55.572-1.106.875-1.656 10.603-19.252 27.823-37.695 51.125-48.47L94.437 69.19zm74.874 287.594c-17.677 9.078-31.145 23.717-39.562 39-4.464 8.107-7.27 16.364-8.688 23.75l11.688 42.408 1.625.125c-3.84-27.548 11.352-60.504 41.25-81.094l-6.313-24.19zm26.344 34c-32.567 17.27-46.51 52.44-41.844 72.94l289.844 24.5c-5.34-7.79-8.673-17.947-8.594-28.5l-22.406-9L459 443.436l-13.5-12.875c5.604-6.917 13.707-13.05 24.813-17.687L195.656 390.78z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWhiteBookIcon })
);
