import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBellPepperIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bell-pepper'];
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
        d="M361.8 41.1c-5.7-2.05-12.3-3.79-17.9-3.45-14.3 1.02-36.9 19.26-54.3 38.66-9.7 10.73-16.8 20.02-22.1 27.39 8.7 2.1 16.4 5 23.9 7.7 11.6-15.47 26.2-34.05 46.8-40.55 12.1-3.75 26.1-2.2 39.3 6.61 12.5 8.35 24.8 22.94 37.7 45.04 16.6 2.9 28 3.7 31.3-12.7-3.4-4-16.4-19.27-35.4-36.28-15.4-13.72-33.7-26.47-49.3-32.42zM147.3 95.33c-11.2 4.5-20.2 12.17-25.9 24.97C76.1 222.2 63.25 298 65.79 348.2c1.22 25.1 6.34 43.7 12.81 55.9 7.18 11.7 12.32 17.4 24.2 19.4-3.18-23-.8-45.9 2.3-67.5l13.1 22c-.9 17.9-3.5 30.9 4.1 47.2 10 18.3 33.3 33.8 56.2 39.8 11.4 3.1 22.7 3.9 31.6 2.2 17.8-3.8 34.4-28.7 39.7-37.6l21.6-7.7c-9.9 16.3-19.5 32.8-29.1 46.9 1.7.7 3.5 1.4 5.2 2.3 9.3 4.1 17.9 4.5 28.4.2 10.3-4.3 22.5-13.8 36.2-30.3 27.3-33.1 60.2-93.2 100-188 15.3-36.5 1.5-63.4-20.2-80.2-9.1-6.6-17.9-11.3-28.1-13.8 5.8 26.3-.6 53.6-6.2 76.4l-15.4-17.9c2-15 11.2-46.5.5-56-27.6-21.8-72.4-43.1-108.7-44.1-14.6-.1-25 3.4-31.1 11.7-6.5 9.1-12.9 19.4-18.9 30.6l-25.4 10.8c11.7-21.6 31.6-62.2 54.9-69.2-20.3-10.07-46-13.73-66.2-5.97z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBellPepperIcon })
);
