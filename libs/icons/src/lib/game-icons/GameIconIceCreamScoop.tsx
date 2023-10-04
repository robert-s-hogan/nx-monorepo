import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIceCreamScoopIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ice-cream-scoop'];
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
        d="M78.7 38.33h-1.58c-2.8.11-5.57.5-8.32 1.12-10.98 2.52-21.36 9.11-28.68 17.26-7.32 8.14-11.31 17.67-11.17 24.98.14 7.31 2.92 13.01 13.47 17.77C149.1 147.6 219.6 233.1 279.7 310.8c6.5-14.2 14.7-27.2 24.8-37.8 1.2-1.3 2.4-2.5 3.7-3.7-57.2-84.6-119-165.5-205.4-223.34-8.14-5.42-16.2-7.65-24.1-7.63zM360.1 264.2c-10.1.4-19.5 3.6-28.1 9.1-9.4 54.4.7 95.7 24.4 123.5 23.6 27.7 61.6 42.7 111.4 41.7 6.5-8.3 11.5-18.2 14.3-29.7 2-8.4.8-11.3-2-14.4-2.8-3.2-9-6.4-17.4-9.4-16.8-5.9-41.6-10.9-60.4-28.6v-.1c-17-16-20.1-41.6-24.7-61.8-2.3-10-4.8-18.9-7.8-24-3-5.1-4.6-6.5-9.7-6.3zm-48.8 28.6c-9.3 12-16.8 27-22 43.2-12.5 39.3-9.8 84.4 9 106.3 19.1 22.3 61.1 35 100.2 30.5 18.3-2.1 35.6-7.5 49.8-16.8-44.6-2.9-81.3-19.1-105.6-47.5-24.1-28.3-35.3-67.9-31.4-115.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIceCreamScoopIcon })
);
