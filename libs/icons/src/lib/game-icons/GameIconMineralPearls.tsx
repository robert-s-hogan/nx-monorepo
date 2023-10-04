import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMineralPearlsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mineral-pearls'];
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
        d="M132.4 40.51c-28.4-.1-56.21 46.13-46.13 72.89 11.98 31.7 76.43 53.3 97.93 27.1 23.6-28.9-13.2-97.88-50.4-99.95h-1.4zm-.5 18.84h.9c2.6.1 5.9.55 6.5 3.23 2.7 12.38-26.4 49.82-31.3 47.82-9.58-3.9-6.9-23.04-1.6-32.17 4.6-8.19 16.6-18.57 25.5-18.88zm234.9 1.01c-48 .59-111.6 26.22-111 76.84.7 68.2 99.7 95.4 155.9 84.1 28-5.5 62.5-35.7 61.9-69.6-.8-46-49.3-84.06-87.4-90.06-6-.94-12.5-1.36-19.4-1.28zm-39.7 25.05c5.5-.1 15.1 1.72 12.7 6.45-9.6 19.04-47.6 63.64-56.4 54.14-9.8-10.5-3-32 6.7-42.5 8-8.64 24.7-17.96 37-18.09zm-162 111.49c-9.5.2-18.3 2.5-25.6 7.3-21.5 14.2-27.7 71.8-12.2 96.6C157 348 253 357.6 263.8 297.1c9.3-52-52.9-100.9-98.7-100.2zm2.6 12.1c3.2-.1 7.5 1.3 7.7 5.6 1 19.8-21.9 67.4-34.3 57.7-8.3-6.5-4.1-31.4 1.8-42.6 5.2-9.6 16.5-20.6 24.8-20.7zm196.8 55.8c-6.4 0-12.3 1-17.6 3.2-29.4 12.1-33.4 67.4-9.3 86.6 27.9 22.6 102.6 11.7 110.1-21.4 7.1-31.4-44.7-68.3-83.2-68.4zm-1 9.1c2 .1 4.8.4 5.4 2.8 3.6 14.4-10.7 60.3-24.1 56.7-9.6-2.6-9.1-24.4-5.2-35.2 3.9-10.3 15.3-24.6 23.9-24.3zm-263.4 65.5c-36.1-.2-73.09 58.2-58.43 91.2C59.32 470.3 146.1 488 170.2 451.9c24.5-36.8-26-112.2-70.1-112.5zm4.2 14.3c4.5-.1 10.2 1.9 9.8 7.6-1.8 26-35.65 77.1-48.52 63.1-8.54-9.3-.89-37.3 7.65-49.7 7.11-10 21.23-20.9 31.07-21z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMineralPearlsIcon })
);
