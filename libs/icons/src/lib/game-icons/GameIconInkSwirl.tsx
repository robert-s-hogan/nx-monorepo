import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconInkSwirlIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ink-swirl'];
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
        d="M262.97 19.438c-3.533.036-7.074.17-10.595.375 37.426 5.91 74.12 23.423 102.188 49.624-55.762-26.124-129.46-27.253-186.875-3.5 10.37-9.73 21.777-17.51 33.875-23.343C48.768 80.06-6.44 197.116 56.72 343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23 74.055 32.02 134.952 102.47 197.406.06.063.124.126.186.188 12.107 12.125 24.238 22.045 32.875 27.03 64.588 37.292 121.345-63.365 57.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654 16.82-11.594 34.836-14.844 53.375 76.21-134.99 312.3-129.124 324.124 72.063-10.722-61.622-53.708-113.837-121.03-135.344 56.69 23.942 96.28 79.752 96.28 145.25 0 94.252-72.826 148.403-154.594 165.625 42.582 2.34 94.684-13.826 125.438-36.314-23.357 39.58-72.146 67.082-123.25 81.594 72.736-2.804 136.515-41.146 175.406-97.375-10.316 11.652-22.718 22.04-36.78 30.97 46.54-55.267 70.795-137.97 61.31-210.25 8.428 16.284 13.583 33.51 15.782 51.374C485.26 97.63 372.46 18.3 262.97 19.437z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconInkSwirlIcon })
);
