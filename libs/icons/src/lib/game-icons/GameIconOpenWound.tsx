import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOpenWoundIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'open-wound'];
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
        d="M25.78 23.28c61.782 111.395 55.21 154.466 51.032 223.5 70.268 1.46 114.547 29.972 118.094 97.376 38.46-33.043 96.49-11.086 109.094 38.5 31.264-29.574 93.164 19.897 45.688 56.594 54.568-1.55 93.348 14.294 141.53 52.344-11.326-44.81-11.612-95.993-.937-140.094-55.272-18.36-136.94-101.47-36.905-98.875-46.755-23.27-77.81-59.41-96.97-109.188-2.615 71.367-76.123 30.815-33.56.532-33.97-2.67-84.39-30.28-101.908-83.126C164.93 80.924 88.565 64.092 25.78 23.28zm52.345 63.126c63.466 8.197 119.972 22.837 173.75 67.906l-26.28 20.438c47.834 11.862 113.498 41.676 149.655 78.844l-46.72 4.375c76.467 49.034 112.748 92.225 142.345 197.092-38.338-63.113-105.822-116.04-172.53-128.437 23.604-15.956-23.102-56.196-93.126-47.25l55.405-31.625c-42.457-36.895-86.29-43.73-130.688-37.97 28.914-32.388 7.954-78.117-51.812-123.374zm275.813 4.97c-9.603 0-17.375 7.774-17.375 17.374 0 9.6 7.772 17.406 17.375 17.406 9.602 0 17.375-7.806 17.375-17.406 0-9.6-7.773-17.375-17.375-17.375z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOpenWoundIcon })
);
