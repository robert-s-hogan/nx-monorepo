import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSuitsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'suits'];
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
        d="M300.125 22.22c-16.803.392-34.233 9.65-45.53 29.218-27.148-47.017-96.42-34.833-94.626 21.374 1.87 58.528 85.608 92.668 94.624 126.313 8.25-30.797 96.137-70.224 94.375-126.313-1.03-32.814-24.287-51.168-48.845-50.593zm109.53 112.28s-86.616 63.248-85.03 113.78c1.356 43.213 45.503 58.606 73.53 33.564l-24.56 58.875h72.374l-24.595-58.908c28.416 24.42 74.963 10.286 73.563-33.53-1.683-52.735-85.282-113.782-85.282-113.782zm-303.436 2.03c-24.513.018-44.626 19.58-44.626 44.095 0 10.22 3.667 19.87 9.468 27.375-1.847-.232-3.652-.563-5.562-.563-24.526 0-44.656 20.13-44.656 44.657 0 24.525 20.13 44.656 44.656 44.656 10 0 19.224-3.35 26.656-8.97L69.75 341.44h72.375l-22.75-54.47c7.604 6.088 17.202 9.782 27.594 9.782 24.526 0 44.124-20.13 44.124-44.656s-19.6-44.656-44.125-44.656c-2.1 0-4.104.276-6.126.562 5.887-7.535 9.5-17.072 9.5-27.375 0-24.515-19.583-44.077-44.094-44.094h-.03zM254.53 283.5l-85.468 105.125 85.47 105.156 85.5-105.155-85.5-105.125z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSuitsIcon })
);
