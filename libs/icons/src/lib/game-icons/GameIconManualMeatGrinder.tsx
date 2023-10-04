import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconManualMeatGrinderIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'manual-meat-grinder'];
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
        d="M201.9 25c2.2 13.46 8.5 32.11 16.3 49.28 9.7 21.4 22.3 41.52 28.2 47.32 14.9 15 28.6 21.4 41.6 21.4s26.7-6.4 41.6-21.4c5.9-5.8 18.5-25.92 28.2-47.32 7.8-17.17 14.1-35.82 16.3-49.28H201.9zM457 115v154h30V115h-30zm-18 12.4l-93.8 3.9c-.9 1.1-1.9 2.2-2.8 3.1-17.1 17-35.4 26.6-54.4 26.6-18.4 0-36.2-9.1-52.9-25.2l-18.1.8v110.8l222 9.2V201h-87v-18h87v-55.6zM185 169v62h14v-62h-14zm-52.1 16l-10.1 15.5 9.9 14.5H167v-30h-34.1zm10.1 48v168.2l18 4.5V233h-18zm90 33v166.1c0 4.9 2.8 11 7.4 15.5 4.5 4.6 10.6 7.4 15.6 7.4h87v-62h-30v32h-50V267.3l-30-1.3zm80 3.4v26.4h30v-25.2l-30-1.2zm0 91.6v14h30v-14h-30zm-209 49c-16.01 0-38.93.2-57.23 3.8-9.33 1.9-17.3 4.7-22.15 8.1C19.78 425.3 18 428 18 433s1.78 7.7 6.62 11.1c4.85 3.4 12.82 6.2 22.15 8.1 18.3 3.6 41.22 3.8 57.23 3.8l56-14v-18l-56-14zm213.7 63l-14 14h52.6l-14-14h-24.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconManualMeatGrinderIcon })
);
