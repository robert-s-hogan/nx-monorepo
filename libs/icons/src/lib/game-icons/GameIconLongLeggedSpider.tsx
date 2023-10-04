import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLongLeggedSpiderIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'long-legged-spider'];
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
        d="M290.995 288.765a20.65 20.65 0 1 1-20.65-20.65 20.65 20.65 0 0 1 20.65 20.65zm-25.8 47.43l11.93 17-20.51-14.53.61-15.67a36.44 36.44 0 0 0 12.83 2.43zm32.53-23.1l10.57 12.2-6.19 22.77-2.28-19-13.92-7.11a36.84 36.84 0 0 0 11.82-8.84zm-27.38-61a36.69 36.69 0 0 0-36.54 34 48.07 48.07 0 0 1 7.89-92.77V29.765h16v163.55a48.06 48.06 0 0 1 35.84 67.11 36.48 36.48 0 0 0-23.19-8.29zm19-61.71l71.87-60-4.73 24.79-55.89 46.68a64.61 64.61 0 0 0-11.27-11.43zm155.79-15l-70.64-29.3 3.06-16.05 73.68 30.56zm-16.64 27.54l48.17 70.11-13.19 9.06-41.93-61zm-21.3 10.84l-94.74 14.11a63.54 63.54 0 0 0-5.29-15.39l106.6-15.87zm-193.34 80a63.9 63.9 0 0 0 15.08 7.51l-54.42 55-15.74-6.84zm-39.15 80l34.89 103.35-15.16 5.12-39.52-117.04zm23.46-95l-64.5 17-9.56-14 66-17.46a64 64 0 0 0 8.06 14.46zm-87.82 11.25l9.65 14.16-87 126.8-13.19-9.05zm-37.61 25.34l-14.27-7.24 51.13-100.74 5.22 25.06zm114.44-88.59a64 64 0 0 0-1.55 13.94c0 .92 0 1.82.07 2.73l-57.07-23.17-3.93-18.87zm-117.18-22.53l-8.12-13.77 69.12-40.93 1.67 17.6zm79.13-33.47l-2.08-21.94 58.34 45.66a64.51 64.51 0 0 0-10.09 12.42zm163.07 84a64 64 0 0 0 1.57-14.06v-1.87l73.23 7.73-8 15.2zm180 127.29l-13.07 9.22-86-121.93 8.35-15.92zm-112.36-73.56l-72.64-39.55c-.94 1.9-2 3.73-3.11 5.52a36.4 36.4 0 0 1 2.91 12.57l62.25 33.89zm6.85 16.61l16.42 118.12-15.85 2.2-14.47-104.07 1-1.13z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLongLeggedSpiderIcon })
);
