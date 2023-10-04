import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChampagneCorkIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'champagne-cork'];
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
        d="M255.4 23.36c4.3 9.66 13.2 22.08 25.9 34.75 18 17.99 42.6 36.94 68.5 53.39 25.9 16.5 53 30.6 75.6 39.2 11.3 4.2 21.6 7.1 29.7 8.3 3.4.5 6.4.7 8.9.6-22.2-33.8-56.4-66.36-94.5-91.13-37.3-24.25-78.1-40.9-114.1-45.11zm-18.1 4.13c-41.7 28.17-56 76.31-65.5 124.01 8.1 17.3 35.4 46.3 71.3 72.1 36.6 26.3 81.9 50.1 123.5 60.3 34.5-8.8 56.1-26.4 71.3-48.1 12.4-17.6 20.4-38 26.7-58.1-3.9.1-8-.3-12.2-.9-10-1.4-21.2-4.7-33.4-9.3-22.6-8.6-48.2-21.8-73.3-37.3l-52.5 48.1 24.4-66.8c-18.3-13.05-35.2-26.88-49-40.67-14.7-14.63-26.3-28.9-31.3-43.34zM184 197.5L48.21 359l-.22.3c-.5.5-.63.6-.63 1.7s.28 3.2 1.45 6c2.35 5.6 7.92 13.6 15.85 22.2.57.6 1.18 1.3 1.78 1.9l27.01-22.9-19.34 30.6c15.51 15 36.19 31.3 57.99 45.7 21.1 14 43.4 26.3 62.6 34.3l37.8-71.3-12.1 79.6c6 1.3 11.2 1.7 14.9 1.4 6-.6 7.6-1.8 8.9-5.1l.1-.2 87.2-191.3c-8.4-3.1-16.9-6.6-25.3-10.5L278.9 308l11.8-34.1c-20.6-10.6-40.3-22.9-58.1-35.7-18.7-13.4-35.3-27.2-48.6-40.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChampagneCorkIcon })
);
