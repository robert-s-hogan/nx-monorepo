import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRetroControllerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'retro-controller'];
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
        d="M389.094 253.12H122.962a101.945 101.945 0 1 0 89.208 151.258h87.66a101.945 101.945 0 1 0 89.264-151.258zM165.69 362.62h-30.137v30.138h-31.618V362.62h-30.14v-31.618h30.13v-30.128h31.617v30.128h30.15v31.618zm190.996 7.136a17.932 17.932 0 1 1 17.91-17.932 17.932 17.932 0 0 1-17.92 17.932zm40.922 40.923a17.932 17.932 0 1 1 17.92-17.922 17.932 17.932 0 0 1-17.93 17.92zm0-81.858a17.932 17.932 0 1 1 17.932-17.932 17.932 17.932 0 0 1-17.943 17.944zm40.923 40.923a17.932 17.932 0 1 1 17.933-17.932 17.932 17.932 0 0 1-17.932 17.943zM260.546 18.99h19.603c3.986 10.57 5.16 20.326 3.512 29.235-4.043 22.392-24.052 35.367-43.44 47.912-21.625 14.025-42.04 27.282-40.472 52.204 1.694 26.9 18.407 40.89 36.135 55.705 10.682 8.943 21.997 18.417 29.36 31.008h-22.2c-5.218-5.816-11.688-11.292-18.746-17.153-18.914-15.81-40.346-33.786-42.537-68.42-2.258-35.467 24.843-53.015 48.67-68.497 16.88-10.942 32.814-21.342 35.513-36.02 1.377-7.34-.407-15.923-5.398-25.973z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRetroControllerIcon })
);
