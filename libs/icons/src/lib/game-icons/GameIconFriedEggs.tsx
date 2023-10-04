import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFriedEggsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fried-eggs'];
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
        d="M378.014 37.379c-60.947.647-130.417 65.73-196.215 73.627-36.738 4.409-83.001-26.792-110.951-2.041-18.268 16.177-3.648 49.433-8.996 73.517-8.624 38.837-56.107 78.637-36.985 113.34 35.366 64.182 149.872 9.808 210.908 49.012 45.77 29.398 46.969 126.738 100.957 129.678 66.818 3.638 122.247-80.385 140.94-146.016 26.089-91.598 20.473-229.637-58.975-279.775-13.006-8.209-26.619-11.491-40.683-11.342zM171.72 141.252c34.716 0 62.857 25.092 62.857 56.045 0 30.953-28.141 47.732-62.857 47.732s-62.86-16.78-62.86-47.732c0-30.953 28.144-56.045 62.86-56.045zm-9.203 13.182c-21.338 7.89-48.289 29.583-30.061 62.777.305-20.013 6.097-35.458 30.06-62.777zm207.61 51.35c36.074 0 65.317 30.186 65.317 67.423s-29.243 57.424-65.316 57.424c-36.074 0-65.317-20.187-65.317-57.424 0-37.237 29.243-67.424 65.317-67.424zm-9.64 15.45c-22.172 9.492-50.176 35.59-31.236 75.524.317-24.076 6.336-42.658 31.236-75.524z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFriedEggsIcon })
);
