import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWoodCanoeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wood-canoe'];
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
        d="M482.2 66.37c-62.8 22.61-139.5 57.53-219.3 96.03H408c31.3-31.8 55-66.02 74.2-96.03zm9.1 18.91C462.4 129.7 423 182.1 363.8 223.3c-67.2 46.8-159.8 78.3-288.82 66.9 2.19 55.4 28.92 97.4 67.92 143.7 184.6-62.2 266.8-127.6 306-191.2 32.4-52.7 35.9-105.4 42.4-157.42zM226 180.4c-9.5 4.7-19.1 9.4-28.6 14.1h175c5.8-4.6 11.3-9.3 16.7-14.1zm-64.8 32.1c-33.3 16.7-66.19 33.2-98.25 49.4.26.1.52.3.77.4 4.1 2.4 7.87 5.7 10.24 9.9 123.04 11.6 209.84-17 273.84-59.7zm-121.63 62c-6.3 0-11.89 1.6-15.22 3.5s-3.62 3.3-3.62 3.4c0 .1.29 1.5 3.62 3.4s8.92 3.5 15.22 3.5c6.3 0 11.89-1.6 15.22-3.5s3.62-3.3 3.62-3.4c0-.1-.29-1.5-3.62-3.4s-8.92-3.5-15.22-3.5zm18.34 28.7c-5.5 2-11.72 3.1-18.34 3.1-4.33 0-8.48-.5-12.38-1.4 2.45 28.1 12.83 60.1 26.72 86.3 9.54 18.1 20.63 33.5 30.85 43.1 10.22 9.7 18.54 12.4 22.94 11 5.7-1.8 11.3-3.6 16.8-5.4-34.9-42.2-61.13-84.1-66.59-136.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWoodCanoeIcon })
);
