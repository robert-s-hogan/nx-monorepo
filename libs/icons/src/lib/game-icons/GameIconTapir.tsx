import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTapirIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tapir'];
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
        d="M169.7 119.2c-87.96 0-139.26 36-148.5 84.4 44.75 2 78.9 12 103.9 27.7 22.2 13.9 36.9 32.3 44.9 52.5 23.4 5.2 46.2 3.3 69-.7-7.2-54.2-16.9-109-34.1-162.1-12.3-1.2-24-1.8-35.2-1.8zm54.8 4.2c16 51.7 25.2 104.5 32.1 156.2 15 41.6 23 67.3 22.8 113.3h49.1c-13.7-43.9-24.5-62.7-3.6-108.5 20.1-6.5 30.3-13.2 41.3-25.6 22.4 25.5 58.9 38.3 89.6 35.5 5.6-.7.8-19.7-5.7-30.3 9.9 14.3 20.1 28.8 17.4 56-.9 9.1 22.9 26.3 25.9 7.8 5.5-33.9-5-84.4-36.8-119.3-14-15.5-29.4-33.2-53.3-37.9-4.7-14.5-14.8-28.4-25-43.1-12.9 8.9-19 20.9-19.3 32.6-50-19.2-94.9-31-134.5-36.7zm176.1 85.5l24.5 9.5c-2.2 6.2-13 11-19.3 8-5.5-2.6-11.5-14.3-5.2-17.5zM17.77 221.5c-2.4 21.1 3.02 42.9 7.06 60.1 6.6-7.7 8.66-10.2 13.74-21.7 26.56 16.4 29.04 33 4.5 72.6-9.66 15.6 6.63 44.5 14.03 60.4h47.3c-12.94-10.7-18.14-35.5-18.57-49.6 34.07-16.8 53.87-38.2 60.97-66-7-11.5-17.2-21.9-31.3-30.7-22.07-13.8-53.95-23.5-97.73-25.1zm326.53 68.7c-2.1 1.7-3.9 3.4-5.5 5.3-8 9.7-12 24.9-5.2 57.5 4.6 15.7 10.4 23.7 17 39.7h22.5c-15.1-29.7-34.6-66.1-28.8-102.5zm-200.1 28.3c-9.2 13.1-20.9 24.5-37.4 32.9 4.9 16.9 16.5 41.1 16.5 41.1h34.8s-14.3-34.3-15.8-52.8c-.5-5.9.4-13.4 1.9-21.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTapirIcon })
);
