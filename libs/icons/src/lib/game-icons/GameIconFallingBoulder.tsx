import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFallingBoulderIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'falling-boulder'];
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
        d="M130.81 21.785v245.95H43.84L256 489.382l212.158-221.644H381.19V21.786h-39.118v301.028c.263 2.756.403 5.547.403 8.37 0 48.275-39.334 87.61-87.61 87.61-46.467 0-84.644-36.446-87.44-82.228h-.288V21.786zm127.018 8.485L230.33 261.984 212.82 133.98c-3.592 63.362-25.266 134.536-25.365 196.592 0 37.12 30.29 67.408 67.408 67.408 37.117 0 67.408-30.288 67.408-67.408 0-1.938-.1-3.854-.262-5.752-6.334-49.764-13.546-100.753-20.408-150.924l-13.422 98.135c-.587-.335-1.176-.667-1.774-.985zm-2.965 251.572c27.027 0 48.73 21.703 48.73 48.73 0 27.026-21.707 48.733-48.73 48.733-27.027 0-48.73-21.706-48.73-48.733 0-27.026 21.708-48.73 48.73-48.73z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFallingBoulderIcon })
);
