import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBatBladeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bat-blade'];
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
        d="M45.22 13.625L14.28 44.563c39.586 19.998 73.144 48.452 94.032 94.624L48.72 198.75l34.655 34.188C123.503 170.29 172.6 120.353 233.25 81.905l-33.844-33.844-59.562 59.563c-40.364-16.63-71.13-49.256-94.625-94zm388.31 2.656c17.42 49.948-19.026 99.73-74.467 51.407 25.734 56.216-28.74 91.255-66.032 58.532 17.576 57.064-16.684 77.635-51.905 73.593l-60.438-54.438c-11.745 10.696-22.922 22.032-33.593 34.03l56.062 62.407c3.207 35-17.616 68.268-73.78 50.782 32.726 37.702-2.315 92.766-58.532 66.75 48.32 56.05-1.434 92.89-51.375 75.28 97.106 69.59 204.846 89.13 277.436-3.624-77.69-16.78-80.996-84.097-52.656-143.438l106.03 118 38.783 15.47c-11.025 6.88-23.685 12.158-37.97 15.78l143.47 55.594-55.594-143.47c-3.76 14.828-9.293 27.874-16.564 39.19l-15.594-39.095L287.344 241.44c58.87-28.72 125.93-25.695 142.594 52.312 91.744-72.588 72.423-180.36 3.593-277.47z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBatBladeIcon })
);
