import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTribalGearIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tribal-gear'];
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
        d="M169.8 16l38.2 89.2L246.2 16h-76.4zM25.58 29.3L18.71 130l41.6 6.3L90.33 107 25.58 29.3zM162.3 44.33C146.9 51.17 134 60.07 134 68.99c0 5.83.5 13.51 1.5 22.29 2.2-11.46 12.4-20.24 24.5-20.24 6.3 0 12.1 2.39 16.5 6.29l-14.2-33zm91.4 0l-14.2 33c4.4-3.9 10.2-6.29 16.5-6.29 12.1 0 22.3 8.78 24.5 20.24 1-8.78 1.5-16.46 1.5-22.29 0-8.92-12.9-17.82-28.3-24.66zm178.5 10.39C276.8 97.16 230.7 386.6 326.4 490.1c132.6-48 224.4-326.4 105.8-435.38zM160 89.04c-4 0-7 3.02-7 6.99 0 3.96 3 6.97 7 6.97s7-3.01 7-6.97c0-3.97-3-6.99-7-6.99zm96 0c-4 0-7 3.02-7 6.99 0 3.96 3 6.97 7 6.97s7-3.01 7-6.97c0-3.97-3-6.99-7-6.99zm-80.4 7l8.9.02v-.02h-8.9zm96 0l8.3.02v-.02h-8.3zM185 97.11c-.6 13.19-11.7 23.89-25 23.89-9.7 0-18.1-5.6-22.3-13.8 2.8 17.2 7.4 36.5 14.1 54l18.1-36.1 38.1 57.2 38.1-57.2 18.1 36.1c6.7-17.5 11.3-36.8 14.1-54-4.2 8.2-12.6 13.8-22.3 13.8-13.3 0-24.4-10.7-25-23.89l-23 53.69-23-53.69zm220.1 31.19l17.4 4.2-59.8 246.1-17.4-4.2 59.8-246.1zM74.66 151.4L57.54 157 167.5 495.9l17.2-5.6L74.66 151.4zm97.44 9.5l-10.6 21.4c11.2 20.2 26.4 34.7 46.5 34.7s35.3-14.5 46.5-34.7l-10.6-21.4-35.9 53.8-35.9-53.8zm168.3 8.4l9 62.3-17.8 2.6-9-62.3 17.8-2.6zm120.8 29.4l14.6 10.4-36.6 51.2-14.6-10.4 36.6-51.2zm-143.8 65.2l9.1 62.3-17.8 2.6-9.1-62.3 17.8-2.6zm120.8 29.4l14.6 10.4-36.6 51.2-14.6-10.4 36.6-51.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTribalGearIcon })
);
