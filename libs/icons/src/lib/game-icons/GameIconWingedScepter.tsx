import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWingedScepterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'winged-scepter'];
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
        d="M256 16c-40.2 0-73 32.79-73 73 0 32.2 21 59.6 50 69.3V496h46V158.3c29-9.7 50-37.1 50-69.3 0-40.21-32.8-73-73-73zm0 18c30.5 0 55 24.52 55 55 0 30.5-24.5 55-55 55s-55-24.5-55-55c0-3.55.3-7.02 1-10.38C207.2 90.01 218.7 98 232 98c18.1 0 33-14.88 33-33 0-13.27-8-24.79-19.4-30.02 3.4-.63 6.8-.98 10.4-.98zM29.51 65.88c4.35 23.5 9.23 45.72 14.87 66.82 46.3 25.2 114.92 54.7 170.62 69.5V192C149.6 159 75.7 106.7 29.51 65.88zm452.99 0C436.3 106.7 362.4 159 297 192v10.2c55.7-14.8 124.3-44.3 170.6-69.5 5.7-21.1 10.6-43.33 14.9-66.82zM28.58 144.6c6.32 15.5 12.81 30.2 19.55 44.1C94.15 206 159.6 224.2 215 232.4v-11.6c-62-15.6-137.33-48.3-186.42-76.2zm454.82 0C434.3 172.5 359 205.2 297 220.8v11.6c55.4-8.2 120.9-26.4 166.9-43.7 6.7-13.9 13.2-28.6 19.5-44.1zM247 161.4c3 .4 6 .6 9 .6s6-.2 9-.6V425h-18zm-213.63 41c9.56 16.5 19.21 31.9 29.08 46.4 43.15 8.5 102.75 15 152.55 14.6v-12.7c-61.3-8.6-132.95-29-181.63-48.3zm445.23 0C430 221.7 358.3 242.1 297 250.7v12.7c49.8.4 109.5-6.1 152.5-14.6 9.9-14.5 19.6-29.9 29.1-46.4zm-427 62.5c36.7 44.2 72.6 78.2 112.6 100.4 19.5 10.9 34.6 18.6 50.8 23.4V281.4c-54.5.7-118.2-6.7-163.4-16.5zm408.8 0c-45.2 9.8-108.9 17.2-163.4 16.5v107.3c16.2-4.8 31.3-12.5 50.8-23.4 40-22.2 75.9-56.2 112.6-100.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWingedScepterIcon })
);
