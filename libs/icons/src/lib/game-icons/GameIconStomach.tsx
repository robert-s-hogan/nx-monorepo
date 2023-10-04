import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStomachIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'stomach'];
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
        d="M153.063 21.74a19.46 28.32 83.178 0 1-23.98 13.947 19.46 28.32 83.178 0 1-27.68-9.18c-1.236 5.62-1.713 12.016-1.163 19.15 3.247 42.106-10.16 118.603 107.54 132.268-41.45 32.308-27.99 64.745-18.467 97.258-33.296-1.63-53.61 23.1-62.577 45.982-97.49-13.226-79.727 121.682-78.574 148.143 1.086 24.9 52.413 28.33 54.285 6.39 3.667-42.972-10.243-104.27 29.207-94.132 22.28 5.724 62.243 53.447 161.366 51.377 140.028-2.926 263.475-321.36 81.64-351.272-63.3-10.412-148.19 37.224-148.19 37.224-67.307 6.347-67.29-24.454-70.937-82.172-.357-5.654-1.216-10.638-2.47-14.983zM137.59 350.176h254.305c-16.912 28.374-52.22 66.58-114.563 65.668-58.09-.85-103.54-18.614-139.742-65.668z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStomachIcon })
);
