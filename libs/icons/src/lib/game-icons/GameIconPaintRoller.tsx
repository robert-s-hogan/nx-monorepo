import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPaintRollerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'paint-roller'];
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
        d="M87 20v130h8.596c-.196 2.517-.095 4.886.404 7 1.733 7.34 8.458 16 16 16s14.267-8.66 16-16c.5-2.114.6-4.483.404-7h101.27c-2.738 5.914-6.99 16.49-5.674 23 .846 4.188 4.13 9.127 7.814 9.127s6.967-4.94 7.813-9.127c1.315-6.51-2.936-17.086-5.674-23h102.14c1.85 7.268 8.477 15.67 15.907 15.67s14.056-8.402 15.908-15.67H425V94h14v85.99s.417 10.562-9.986 15.13c-.868.223-33.657 8.69-69.08 18.153-17.945 4.794-36.337 9.78-51.182 13.975-14.845 4.194-25.117 7.082-30.656 9.51-6.74 2.954-14.238 6.833-20.422 13.25C251.49 256.425 247 265.748 247 277v103h18V277c0-6.897 2.1-10.83 5.637-14.502 3.538-3.672 8.894-6.717 14.685-9.256 1.548-.678 13.63-4.52 28.324-8.672 14.696-4.15 33.033-9.127 50.932-13.908 35.798-9.562 69.844-18.35 69.844-18.35l.62-.162.59-.248C456.533 203.194 457 179.99 457 179.99V76h-32V20zm18 18h302v47.373c-7.212 4.035-14.646 14.71-23 15.627-21.86 2.4-42.026-16.844-64-16-16.853.647-32.418 22.454-48 16-11.018-4.564-4.686-28.23-16-32-22.627-7.542-40.21 30.31-64 32-16.823 1.196-31.135-16-48-16-12.762 0-28.045 1.332-39 7.906zm39 159s-19.875 31.586-16 48c1.733 7.34 8.458 16 16 16s14.267-8.66 16-16c3.875-16.414-16-48-16-48zm89 201v94h46v-94z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPaintRollerIcon })
);
