import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChimneyIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chimney'];
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
        d="M130.9 176.8c-20.9 19.6-34.65 25.8-60.02 24.9-9.64 16.9-9.17 28.1-4.31 38.6 2.93 6.4 8.08 12.6 14.57 18.8H309.6c13.5-5.4 21.6-17.7 24.3-29.5-18.5 2.8-35 1.4-49-4.6-14.7-6.3-26.2-17.7-34.3-32.5-24.6.5-50-20.1-60.8-38.3 53.3 30 100.1 15.3 131.4 6.2-18.3 18.3-29.1 23.8-51.2 29.3 5.9 8.8 13.1 14.9 22 18.7 11.6 5 26.4 6.2 45.3 2.3l.1-.3.4.2c32.4 19 73.8 22.1 100.9 7.3 26.5-15.1 44.7-30.4 55.3-45.2V75.77c-22.6 14.04-48.9 21.81-73.1 18.99-29.2 20.14-67.3 30.44-103.8 31.04-37.3.6-73.8-17.1-99.5-39.02 33.8 13.82 65.2 21.62 99.2 21.02 27.4-.4 56.2-7.2 79.8-19.39-14.6-5.83-33.4-13.4-56.1-32.32 67.3 19.87 106.3 31.32 153.5-2.05 1.2-9.7-.7-22.02-1.8-31.17L18 23.19v66.75c14.13 16.06 84.3 17.66 126.5 8.63C109.7 113 59.91 122.1 29.79 112.9c-20.186 8-11.42 30.1-4.08 43.5 15.79 28.8 72.89 38.5 105.19 20.4zM73 277.1v62h238v-62zm48 80v30h30v-30zm48 0v30h94v-30zm-48 48v30h78v-30zm96 0v30h46v-30zm-96 48v30h30v-30zm48 0v30h94v-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChimneyIcon })
);
