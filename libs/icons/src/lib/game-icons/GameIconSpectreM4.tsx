import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpectreM4Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spectre-m4'];
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
        d="M423.775 282.095h-49v-95.47c0-7.18-12.19-15.53-19.21-19.53h68.21zm-107-44.57l24.15 202.47-41.21 4.91-24.12-202.66 41.08-4.7zM36.245 67.095h35.35l13.29 18h-59.19zm420.18 2h25l9.35 24h-41.9zm-401.93 224.36c9-17.63 33.31-65.4 39.16-77.08 6.36-12.68-6.75-23.27-14.39-28.27h83.34l-1.28 33h75.45v-33.01h8v41h-85.82c-6.38 11-24.81 43.7-30.83 55.39-6.49 12.58-1.56 28.44-3.93 34.3-3 7.45-48.49-9.23-66.13-16a6.69 6.69 0 0 1-3.57-9.33zm-36.72-192.36v46.79l35.1 24.21h206l8.1 54.9 47.84-5.39a5.67 5.67 0 0 0 5-6.28l-5.56-48.92a13.74 13.74 0 0 1 13.52-15.31h159.32l7.13-42h-147.52l-23.16-8zm394.49 33a4 4 0 0 1 4-4h32.31a4 4 0 0 1 0 8h-32.31a4 4 0 0 1-4-4zm0-15a4 4 0 0 1 4-4h32.31a4 4 0 0 1 0 8h-32.31a4 4 0 0 1-4-4zm-51.82 15a4 4 0 0 1 4-4h32.33a4 4 0 1 1 0 8h-32.31a4 4 0 0 1-4.02-4zm0-15a4 4 0 0 1 4-4h32.33a4 4 0 1 1 0 8h-32.31a4 4 0 0 1-4.02-4zm-301.67-.21a6.51 6.51 0 0 1 6.62-6.79h250.48a7.69 7.69 0 0 1 7.9 7.44v11.81a7.94 7.94 0 0 1-7.9 7.74h-32.47a7.71 7.71 0 0 1-7.63-7.74v-3.25H65.395a6.43 6.43 0 0 1-6.62-6.69zm133.55 69.21h-12s0 19 19.6 25.14c-15.1-13.81-7.6-25.14-7.6-25.14z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpectreM4Icon })
);
