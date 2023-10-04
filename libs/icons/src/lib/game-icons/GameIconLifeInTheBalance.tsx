import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLifeInTheBalanceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'life-in-the-balance'];
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
        d="M259.03 22.313L209.19 72.156H132.28l-22.5-22.5L78.626 80.78l31.156 31.157 21.064-21.093h79.78l32.5 32.5V332.75h-.218c0 56.654-22.68 110.59-46.687 128.063-26.692 7.45-47.682 19.485-58.94 33.906h243.532c-11.076-14.24-31.834-26.13-58.156-33.595-22.125-16.208-44.998-65.613-47.687-118.188V123.313l32.467-32.468h78.375l21.094 21.094L438.03 80.78l-31.124-31.124-22.53 22.5h-75.5L259.03 22.312zM138.72 141.906c-11.43.448-22.967 6.792-30.25 20.47-18.616-32.072-67.794-24.488-66.532 15.03 1.184 37.068 51.412 49.448 66.53 88.813 15.97-39.372 67.584-49.38 66.344-88.814-.707-22.547-18.265-36.198-36.093-35.5zm305.81 46.78c-12.498-.098-24.312 3.91-35.75 10.94-24.375 14.98-22.752 50.796-72.467 63.655 56.016 32.366 90.476-55.05 148.218-60.842-14.287-9.422-27.5-13.65-40-13.75zm-103.624 34.126c-30.63-.368-36.37 22.524-11.406 36.938-7.054-13.125-2.727-27.236 14.47-36.813-1.04-.06-2.076-.113-3.064-.125zM18.75 283.72c0 21.618 42.385 39.155 94.656 39.155 52.27 0 94.625-17.537 94.625-39.156H18.75zm283.438 0c0 21.618 42.385 39.155 94.656 39.155 52.27 0 94.625-17.537 94.625-39.156H302.186z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLifeInTheBalanceIcon })
);
