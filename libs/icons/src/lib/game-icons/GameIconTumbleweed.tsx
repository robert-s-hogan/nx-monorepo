import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTumbleweedIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tumbleweed'];
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
        d="M174.7 46.35s-53.1 40.57-69.2 68.55c-8.6 15.1-14.17 44-16.81 60.6L45.6 236.2l52.77 70.5-24.51-72.4C102.2 172.9 175.8 136.5 242.4 96.2c75.8 22 150.2 45.7 188.8 116.9-26.3 28.6-42.2 56.6-65.2 81.7-18.1-17.8-26-36.4-20.9-57.5l20.3-45.3s-34-47.7-63.3-55.8c-29.3-8.1-95.8 17.2-95.8 17.2l-7.8 77.7 72.8 26.7-54-44.7 33.4-43.9 60.6 16.4c13.6 21-10.8 29.9-24.1 42.4 11-1 19.6 1.3 27.2 5l-5.5 55.2c-26.4 8.3-66.3 17.8-95.5 6.4-42.9-16.8-61.9-42.1-54.1-68.7l19.3-65.6-65.9 65.6 85.7 118.5 155.3-33.9c-15.3 15.9-25.4 18.7-52 31.4 3.1 14-19.7 27.2-28.2 38.9-29 9-43.6 16.5-74.2 17.3-31.1-21.7-49.8-49.5-60.2-81.4-5.7 28.7-1.4 55.6 25.5 78.3-99.39-20.1-94.15-97.1-140.95-145.8 33.11 57.2 12.47 141.1 101.85 171 64.6 21.5 128.7-6.7 192.4-12.1 27.3-15.6 52.7-34 79.3-50.7L376.6 421l-152.7 17.1c56.1 16 168 29.8 179.4 12.1 20.6-32 14-69.9 15-105.4 16.4-9.2 33.7-17.3 52.4-23.4.9-23.5-15.1-45.1 17.6-72.2l-43.4-13.8c8.8-9.4 17.4-18.6 25.8-27.5-57.1-53-100.8-112.5-227.5-131.52L114.5 153l8.5-33.6 51.7-52.42 41.4.8zm94.6 2.09l151.8 62.36 34.5 54.8-6.6-62.2zM433.2 248l5.9 51-94.8 65.4c-13.6 2.4-27 5.9-40.3 9.9 45.5-38.1 89.2-83.7 129.2-126.3zM39.97 401.4l75.53 79.1 91.3-26.7h-83.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTumbleweedIcon })
);
