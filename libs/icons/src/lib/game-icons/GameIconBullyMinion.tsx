import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBullyMinionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bully-minion'];
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
        d="M296.8 20.89c-14.1 0-27.1 7.44-37.1 20.63-10 13.19-16.5 32-16.5 52.96 0 20.92 6.5 39.82 16.5 52.92 10 13.2 23 20.7 37.1 20.7 14.1 0 27.1-7.5 37.1-20.7 8.9-11.7 15-28 16.3-46.2-5.4 0-11-1.3-15.9-5.5 1.8-11.28 7.2-18.49 13.2-24.96-2.8-11.27-7.6-21.27-13.6-29.22-10-13.19-23-20.63-37.1-20.63zm-63.6 31.27c-23 1.19-50 4.6-62.9 11.78C72.22 133.3 47.78 244.5 48.84 354c-5.75 36.3-6.05 50.8 8.94 82.4 11.42 24.1 44.22 13.3 51.92-8.9-20.31-20.2-22.43-26.3-21.88-53.5l19.38 28.5 12.5-8.4c-2.7-21.3-15.5-39.9-29.43-58.4 1.46-53.9 8.09-88.8 41.23-128.2l15 4.6-12.3 123.5c49.8 9.1 105.2 12.4 145.4 4.2l-3-95.3c37.2 35.4 50.7 86.2 75.9 129.5 4.1 19.7 13.8 42 24.3 46.3 35.2 14.5 61.6-34.6 34.4-55.2l55.6-187.9-27.3-101.63-57 288.03L325 232.8c3.4-19.4 5.6-39 6-57.8-10.1 7-21.7 11.1-34.2 11.1-20.5 0-38.8-11.1-51.4-27.8-12.7-16.7-20.2-39.2-20.2-63.82 0-15.22 2.9-29.61 8-42.32zm41.1 10.56c13 4.45 34.4 17.47 42.9 33.68-4.3 10.8-27.1 5.9-37.9-4.19zM133.5 353.7c10.4 42.7 10.1 82.1-1.6 116.4l19.6 21 22.6-10.3-3.3-62.2c32.9-34.4 74.2-51.6 105.6.5-25.6 22.8-23.3 25.3-31.7 57.3l94.3 1.1c-2.7-16.7-33.1-23.8-56-27.1l23.8-22.3-23.6-70.7c-43.7 9.2-99.1 5.5-149.7-3.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBullyMinionIcon })
);
