import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpookyHouseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spooky-house'];
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
        d="M189.1 20.24l-68.5 87.56h137zm225.3 2.64C399.6 58.25 364 63.27 333 65.62c-6.3 36.48-25.7 40.18-57 55.48l39.2-2-7.2 50c12-29.6 19.9-60 39-88.42l13.6-3.41-4.6 59.83 24.3-64.75c98.2-7.42-6.7 91.25-35.7 125.95l29.3-17.9 11 41.1c-.5-38.8 25-95.4 57.1-113.6 31.9 24.8 13.5 69.4 10 99.3l12.8-20 25.1 36.2c-15.4-37.6-19.3-67-12.2-105.3-25.1-19.63-47.7-39.88-62.3-62.28l5.6-9.09 54.9 26.42-45.5-41.82 5.2-8.45zM134.1 125.8V225l45.4 45.4-12.8 12.8-73.77-73.8-70.81 67.4h15.96v215H141.1v-94H71.35l48.05-48H52.08v-82h82.02v48h150.1l34.8-46h-97.9v-17h23v-127zm14 14h82v98h-82v-89zm18 18v14h14v-14zm32 0v14h14v-14zm-32 32v30h14v-30zm32 0v30h14v-30zm64 32v30h70.5l16.5-21.9 64.9 85.9h75.9l-65.5-94zm87 37.9l-72.8 96.5-14.4-10.8 8.8-11.6H134.1v14h90.7l32 32h51.6c-2.8-5.8-4.3-12.2-4.3-19 0-24.7 20.3-45 45-45s45 20.3 45 45c0 6.8-1.5 13.2-4.3 19h78.1l.2.3v-46.3h-40.6l8.8 11.6-14.4 10.8zM70.08 285.8v14h14v-14zm32.02 0v14h14v-14zm-32.02 32v14h14v-14zm32.02 0v14h14v-14zm238 17.5c-7.7 2.7-13.8 8.8-16.5 16.5h16.5zm18 0v16.5h16.5c-2.7-7.7-8.8-13.8-16.5-16.5zm-229.3 30.5l-14 14h116.6l-14-14zm194.8 4c2.7 7.7 8.8 13.8 16.5 16.5v-16.5zm34.5 0v16.5c7.7-2.7 13.8-8.8 16.5-16.5zm-153 28v94h103v-46h-11.3l-38.4-48zm76.3 0l24 30h172.9l-20-30zm-229.32 14h66.02v66H52.08v-57zm105.02 0v18h32v-18zm-87.02 18v30h30.02v-30zm256.02 16v46h35v-46zm53 0v46h36v-46zm54 0v46h35v-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpookyHouseIcon })
);
