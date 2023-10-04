import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEgyptianPyramidsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'egyptian-pyramids'];
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
        d="M61.188 31.47A34.17 34.17 0 0 0 26.03 65.624a34.172 34.172 0 0 0 68.345 0A34.17 34.17 0 0 0 61.187 31.47zm215.093 86.093L61.5 326.905l13.5 2.78 66.5-64.436 6.75-6.53 6.5 6.75 96.813 100.78 74.593 15.438-49.875-264.125zm170.158 10.843l-68.75 67L479.25 302.22l-32.813-173.814zm-299.063 151.47L25.25 397.718l150.5 30.81-28.375-148.655z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEgyptianPyramidsIcon })
);
