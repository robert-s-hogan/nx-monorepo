import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOrbWandIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'orb-wand'];
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
        d="M339.72 55.875c-61.792 0-111.876 50.08-111.876 111.875 0 61.79 50.08 111.875 111.875 111.875 61.79 0 111.905-50.08 111.905-111.875 0-61.79-50.112-111.875-111.906-111.875zm0 18.875c51.36 0 93 41.642 93 93 0 51.362-41.643 93-93 93-51.363 0-92.97-41.642-92.97-93 0-33.034 17.208-62.033 43.156-78.53-4.767 5.728-7.656 13.088-7.656 21.124 0 18.257 14.806 33.062 33.063 33.062 18.256 0 33.062-14.805 33.062-33.062 0-17.464-13.562-31.73-30.72-32.938 7.073-1.72 14.46-2.656 22.064-2.656zm-62.533 65.03c-8.418 0-15.28 6.825-15.28 15.25 0 8.42 6.854 15.25 15.28 15.25 8.42 0 15.25-6.822 15.25-15.25 0-8.418-6.823-15.25-15.25-15.25zm-76.312 72.97c-.846 7.796-2.342 14.92-4.5 21.406l78.5 78.5c6.444-2.173 13.523-3.733 21.25-4.625l-95.25-95.28zm-13.125 39.22c-4.91 7.335-11.078 13.393-18.5 18.218l69.594 69.625c4.842-7.41 10.92-13.58 18.25-18.5L187.75 251.97zm-36.438 26.718c-6.406 2.136-13.398 3.716-20.968 4.687 32.544 31.712 62.545 62.546 95.187 95.188 1.003-7.534 2.595-14.498 4.75-20.875l-78.968-79zm-15.687 36.406L17.187 433.188v21.937l129.25-129.22-10.812-10.81zm24 24L17.187 481.53v13.595h53.72L193.28 372.75l-33.655-33.656z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOrbWandIcon })
);
