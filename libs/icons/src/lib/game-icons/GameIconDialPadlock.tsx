import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDialPadlockIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dial-padlock'];
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
        d="M242.2 31.57c-17.6-.14-35.5 3.28-52.6 8.4-24.9 7.45-49.3 18.87-66.9 37-17.8 18.15-27.46 45.53-18.8 74.23l23.3 77.9c7.8-12.1 17-23.3 27.6-33.2l-16.4-55c-5.2-17.2-1.1-27.4 10-38.8 11.1-11.33 30.4-21.33 51.5-27.64 14.5-4.34 29.2-6.76 42.1-6.76 5.8 0 11.3.51 16.1 1.57 15.5 3.39 24.5 9.65 29.7 26.9l16.4 55.03c14.4 2.5 28.3 6.7 41.4 12.6l-23.3-77.96c-8.6-28.74-31.7-46.28-56.5-51.7-7.7-1.71-15.6-2.5-23.6-2.57zm34 134.93c-15.5-.1-31.2 2-46.8 6.7C146.3 198 99.18 285.3 124.1 368.5c24.9 83.1 112.1 130.2 195.3 105.3 83.1-24.9 130.2-112.1 105.3-195.3-20.2-67.6-81.6-111.3-148.5-112zm-3.1 65c40.1-.6 77.4 25.4 89.4 65.6 14.6 48.6-13.2 100-61.7 114.5-48.6 14.6-100-13.2-114.5-61.7-14.6-48.6 13.2-100 61.7-114.6 8.4-2.5 16.8-3.7 25.1-3.8zm2.2 17.9c-4.4 0-8.9.4-13.4 1.2l9.2 30.4-17.2 5.2-9.1-30.5c-12.7 5.5-23.2 14.2-30.8 24.9l29.1 15.7-8.6 15.9-29.1-15.6c-4.7 12.2-6.3 25.7-3.9 39.3l30.7-9.2 5.1 17.3-30.7 9.2c14.4 33 50.6 51.1 86.1 42l-32.3-46 39.8-11.9-1.7 56.2c34.6-11.9 54.9-47.1 48.8-82.4l-30.7 9.1-5.1-17.2 30.7-9.2c-5.5-12.7-14.3-23.1-25-30.7l-15.8 29.1-15.8-8.6 15.8-29.1c-8.2-3.2-17-5-26.1-5.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDialPadlockIcon })
);
