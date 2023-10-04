import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRunningShoeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'running-shoe'];
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
        d="M135.6 38.35l-17 6.17c6.2 16.99 9.1 34.17 2.3 51.32 4.5 4.76 8.9 9.46 13.3 14.06 12.5-24.41 9.2-50.15 1.4-71.55zm-25.8 71.95c-6.8 2.6-12.82 5.9-18.27 9.7 27.17 29.8 50.17 61.6 63.77 92.1 12.7 28.7 17.4 57.3 7.2 81.1l219.8 158.9c27.5-1.4 45.3-8.1 57.5-17.5 12.8-9.8 20.1-22.9 25.4-38.4-2.9-3.2-6.1-6.3-9.6-9.4-25.7 4.5-48.2-.6-66.9-12.4-19.5-12.2-34.8-31.1-47.8-53-24.5-41.3-41-94-57.7-137.5-44.5 4.5-77.1-1.7-102.7-14.2-30.6-15-50.7-38.1-70.7-59.4zm-31.92 21.5c-4.57 4.9-8.65 10.3-12.34 16.1-10.56 16.7-17.8 37-23.99 57.9l105.85 76.5c5.7-17.1 2.3-38.5-8.6-62.9-12.5-27.9-34.6-58.6-60.92-87.6zm238.92 47c-5.2 1-10.2 1.9-15.2 2.7 3.7 9.7 7.4 19.7 11.1 29.8l26 13.1c-6.9-16.1-13.7-31.5-21.9-45.6zm-285.29 42c-2.72 2.9-4.48 5.9-5.39 9-1.23 4-1.07 8.4 1.01 13.8L266 398c21.8 14 41.4 25.6 59.2 35.1zm290.29 15.3c6.9 18.3 14.2 36.4 22.3 53.1l33.2 14.7c-11.2-18.1-19.8-36.1-27.5-53.7zm36.2 78.8c11.7 19.2 25 34.7 40.3 44.3 11 6.9 22.9 10.9 36.8 11.3-14.8-12.4-27.1-25.2-37.6-38.2zm119.8 98.4c-5.9 13.3-14.2 25.8-27 35.6-11.4 8.7-26 15.2-44.7 18.6 17.5 4.9 31.2 6.5 41.6 6.1 14.9-.6 23.4-4.7 28.6-8.8 5.2-4.1 7.2-8.2 8.1-10.2 3.5-7.8 3.2-19.9-2.5-33.3-1.1-2.6-2.5-5.3-4.1-8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRunningShoeIcon })
);
