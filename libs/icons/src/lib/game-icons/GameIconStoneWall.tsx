import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStoneWallIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'stone-wall'];
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
        d="M18.08 23l.1 18H494V23H18.08zM254.3 54.93L133 61.6l30.1 68.5 98.1-3.6-6.9-71.57zm115.9.28l-92.9.53 3 71.96 96.8-.9-6.9-71.59zM18.23 56.43l.35 74.67 72.27-2.4 24.35-72.27H18.23zM393 64.24l-.5 47.16 15.7 21.5 85.8-6.3V64.93l-101-.69zM120.8 84.68l-17.6 49.82 41.1-1-8.2-34.02-15.3-14.8zm354.7 56.02l-4 75.5 22.5-.6v-74.9h-18.5zm-25.7 3.5l-97.3 10.7L346 219l110.7-3.2-6.9-71.6zm-243.8.7l-4 75.5 126.1-3.9 7-71.1-129.1-.5zm-145.33 2.7l-3.9 75.5 126.13-3.9-6.9-71.6H60.67zm-42 1.5l.33 72.4 24.77-.8-6.9-71.6h-18.2zm278.93 84.3L276 277.2l2.1 42 128.7-1.9-7.6-79.7-101.6-4.2zm-40.2 1.4l-127.2 6 8 69.5 124.7 6.6-5.5-82.1zm236.6 3.1l-66.5 2.9-7.5 75.8 74-5.2v-73.5zm-474.89 7l.31 65.8 100.78-3.1-6.9-62.7H19.11zm470.29 81.2l-115.9 10.5-3.3 65 121.5-3.5-2.3-72zm-422.36 4.1l-47.52 2 .34 72.9 51.1-1.3-3.92-73.6zm17.84 0l3.98 68.5 138.64 9.6-3-78.1H84.88zm161.22 4.3l-5.5 69 107.5 5.4-1-73.5-101-.9zm185.4 81.1l-4 75.5 66.5-.6v-73.8l-62.5-1.1zm-9.8 1.2l-39 3.6 27.4 28 11.6-31.6zm-399.46 1.8l-2.13 40.6.16 34.8H145.4v-68.9l-46.56-2.5-18.4 14L68.56 421l-46.32-2.4zm247.96.3l-111.3 1.5 3.5 72.5 114.7-2.4-6.9-71.6zm101.2 4.3l-72.2 5.9-8.9 62.1 125.6.6-6.2-27-38.3-41.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStoneWallIcon })
);
