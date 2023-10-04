import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCursedStarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cursed-star'];
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
        d="M259.125 16.938L216.22 128.094 97.343 164.25l106.53-4.22-36.436 94.407L270.156 106.25l50.22 64.406-61.25-153.72zm50.406 63.687l36.376 102.28-102.344-6.75 172.063 53.876-46.5 67.126 128.47-104.28-116.94-7.69-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375-.375 127.125 27.75-104.907 82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875 43.462 77.53 88.133 86.365 134.438 0-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438 0 25.896-7.95 47.818-19 56.437-11.05-8.62-19-30.54-19-56.438 0-25.896 7.95-47.818 19-56.437zm82.53 10.594l5.19 180.22-78.595-22.064 140.47 87.438-30.408-111.313 73.563-103.47-82.875 69.376-27.344-100.186zM152.94 309.03l-43.594 159.595 98.906-61.53 120.656 39.436-90.5-58.217 87.094-54.188-171.22 56.53-1.343-81.624z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCursedStarIcon })
);
