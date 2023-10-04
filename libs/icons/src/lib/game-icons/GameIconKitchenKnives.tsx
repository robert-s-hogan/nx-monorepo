import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKitchenKnivesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'kitchen-knives'];
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
        d="M140.78 28.03L131.907 54c43.253 8.353 84.735 22.207 124.063 42.406l8.874-25.937L140.78 28.03zm141.282 49.782l-8.343 24.407c5.582 11.184 6.648 25.473-.25 45.624 72.357 24.773 140.607 52.916 223.75 47.03-58.85-46.902-124.914-82.347-215.158-117.06zM130.095 99.094L105.22 131.53c50.832 28.482 96.958 63.293 137.5 105.407l24.843-32.375-137.47-105.468zm-74.656 2.656l-26.813 15.625c29.6 37.582 53.774 78.455 71.594 123.03L127 224.813 55.437 101.75zM279.78 219.344l-18.686 24.375c3.42 16.74-.533 35.585-18.375 58.843 77.76 59.655 149.145 121.704 252.53 148.53-52.672-81.572-118.975-152.038-215.47-231.75zm-145.217 22.72l-23.407 13.592c-3.13 13.372-12.31 26.05-32.594 37.844 41.332 71.09 76.94 142.002 148.625 195.78-14.802-79.716-43.58-155.194-92.625-247.217z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKitchenKnivesIcon })
);
