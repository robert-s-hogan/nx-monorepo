import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLightBulbIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'light-bulb'];
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
        d="M247 18.656c-80.965 0-146.875 65.02-146.875 145.625 0 45.63 15.758 67 33.313 94.845 11.706 18.57 23.767 39.91 30.53 70.563h165.095c6.728-31.387 18.91-53.12 30.718-71.875 17.58-27.92 33.314-48.912 33.314-93.532 0-80.66-65.127-145.624-146.094-145.624zm-99.78 127.906L170.437 167 210 201.813l31.188-34.125 6.78-7.438 6.907 7.344 30.75 32.72 39.97-33.47 22.686-19-7.655 28.594L304.75 310.28l-18.063-4.842 28.22-105.25-24.032 20.125-6.78 5.656-6.033-6.44-29.906-31.78-30.562 33.438-6.188 6.78-6.875-6.062-23.25-20.437 27.94 104.218-18.064 4.812-35.937-134.063-8-29.875zm22.593 201.813V389.5L315 348.375H169.812zm153.593 17.063l-153.594 43.53v29.438l153.594-43.5v-29.47zm0 48.875L203.97 448.156h119.436v-33.844zm-132.562 52.53v20.533h113.282v-20.53h-113.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLightBulbIcon })
);
