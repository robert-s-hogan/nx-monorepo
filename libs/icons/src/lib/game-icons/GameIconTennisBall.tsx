import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTennisBallIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tennis-ball'];
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
        d="M246.938 35.188c-25.875 1.07-51.58 6.686-75.5 16.593-26.714 11.065-51.274 27.462-71.72 47.907-20.445 20.446-36.84 45.005-47.906 71.72-9.8 23.662-15.405 49.065-16.562 74.655 74.49-11.465 126.867-33.367 160.656-67.156 33.846-33.845 50.15-80.167 51.03-143.72zm18 0c-.91 66.75-18.61 118.764-56.313 156.468-38.05 38.05-95.324 60.96-173.438 72.625 1 26.133 6.65 52.13 16.657 76.283 11.067 26.715 27.458 51.24 47.906 71.687 20.448 20.448 45.003 36.87 71.72 47.938 24.152 10.005 50.122 15.63 76.25 16.625 11.665-78.115 34.575-135.39 72.624-173.438 37.704-37.704 89.72-55.402 156.47-56.313-1.06-25.916-6.67-51.663-16.595-75.625-11.068-26.715-27.49-51.27-47.94-71.718-20.447-20.45-44.97-36.84-71.686-47.907-23.96-9.927-49.735-15.56-75.656-16.626zm211.187 229.875c-63.202.987-109.34 17.307-143.063 51.03-33.793 33.795-55.662 86.15-67.125 160.657 25.596-1.157 51.026-6.762 74.688-16.563 26.714-11.064 51.242-27.46 71.688-47.906 20.445-20.444 36.842-44.972 47.906-71.686 9.906-23.922 15.522-49.652 16.592-75.53-.228.002-.46-.005-.687-.002z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTennisBallIcon })
);
