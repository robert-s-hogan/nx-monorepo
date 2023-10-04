import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCzSkorpionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cz-skorpion'];
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
        d="M21.28 407.5s6.41-91.63 23.58-127.08c5.91-12.21-4.21-33.92-14-40.92h106.11v42.22c7 8.67 20.56 14.44 35.45 14.44 23.23 0 42.11-13.76 42.11-31 0-10.78-7.42-20.67-18.66-25.67h14.1a32.81 32.81 0 0 1 12.54 25.67c0 21.64-22.49 39.11-50.13 39.11-15.64 0-29.63-5.7-38.83-14.52-11.59 4.1-21.33 23.37-21.33 35.67 0 10.57 1.66 82.06 1.66 82.06H21.26zm323.87-41.46l-43.66 29.81a357.51 357.51 0 0 1-59.52-157.62l51.65-13.8a304.64 304.64 0 0 0 51.53 141.61zM35.31 139.78a16.28 16.28 0 1 1-16.28 16.28 16.28 16.28 0 0 1 16.28-16.28zm-4.22-15.47a27.54 27.54 0 0 1 26.47-19.81h352.41c19.09 0 35 15.33 35 34.41v62.13a19.5 19.5 0 0 0 39 0v-69.61a4.5 4.5 0 1 1 9 0v69.61a28.5 28.5 0 0 1-57 0v-62.13c0-14.13-11.86-25.41-26-25.41H57.56a18.37 18.37 0 0 0-16.93 11 31.7 31.7 0 0 0-9.54-.18zm429.88 38.19v-16h7v16h-7zm-41 11h-12v-39h10.54a6.88 6.88 0 0 1 1.46 4.41v34.59zm-98-19.48a7.9 7.9 0 1 1-7.9 7.9 7.9 7.9 0 0 1 7.9-7.9zM25.58 223.5h211.55l89.53-24.17c11.9-14.56 28-22.72 61.4-22.72 1.25 0 2.91-.11 3.91-.09V134.5l-2.73-5H57.56a2.37 2.37 0 0 0-2.32 1.47 32.06 32.06 0 0 1-6.33 54.42c0 9.7-.09 17.59-.25 20.15-.57 9.06-23.08 17.96-23.08 17.96zm119.39-61.52c0-4.42 4-7.48 8.38-7.48h146.09c3.3-9 12.15-16.18 22.52-16.18a23.8 23.8 0 0 1 23.9 23.75 23.95 23.95 0 0 1-46.42 8.43H153.35a8.81 8.81 0 0 1-8.38-8.54zm177 7.89a7.9 7.9 0 1 1 7.9-7.9 7.9 7.9 0 0 1-7.9 7.9zM166.91 239.5h-13s-3.63 32.5 18.49 44.18c-17.49-19.05-5.49-44.18-5.49-44.18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCzSkorpionIcon })
);
