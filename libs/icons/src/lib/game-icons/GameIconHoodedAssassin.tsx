import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHoodedAssassinIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hooded-assassin'];
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
        d="M332.031 66.13c-28.807-.01-55.439 14.149-67.88 40.65 20.79 1.744 16 55.07 16 55.07-11.814 16.687-24.73 33.186-36.589 50.146 0 0-99.046 132.283-178.378 168.025-28.049 22.593-33.305 36.532-44.137 52.649-4.877 9.54 9.257 14.324 11.701 13.2 22.726-10.461 25.176-20.866 47.07-35.675 12.805-5.026 23.839-15.9 31.854-11.049 34.962 20.86 107.556 44.28 118.271 38.706 17.857-9.263-5.78-43.585 16.174-89.057 31.97-3.352 58.916-.885 88.332-12.094 3.483 50.279 10.106 54.59 6.766 107.092l71.2 1.045.698-14.61-41.814-11.105c11.528-56.054 11.816-78.996 4.672-127.996-.956-6.622-53.746-8.275-81.012-3.79 24.449-24.202 40.274-45.24 47.506-68.44l.027.189c7.637 15.923 30.083 33.958 35.336 37.125 27.704 11.048 38.214 7.982 62.955 3.887 4.907-.784 27.47 24.537 44.807 9.597 2.642-20.238 16.522-20.369-4.938-32.71-4.847-2.73-27.063 7.462-31.418 6.898-20.21-2.481-30.954-5.211-58.45-12.703-10.23-13.187-32.676-56.136-55.43-59.744 6.535-14.15 28.226-53.108 73.664-66.237-20.943-26.54-49.925-39.057-76.987-39.068zm82.405 46.722c-46.658 19.516-58.266 50.4-58.266 50.4l9.916 7.644s9.646-4.765 48.35-58.044zm23.04 160.005l-4.658 11.418c5.233-.083 10.425.47 15.328 1.608-12.774 30.856-23.938 59.635-28.181 93.094l-.908 7.558 4.863-5.889c20.805-25.671 32.303-55.25 44.95-85.78 4.203 2.656 8.24 5.885 12.071 9.35l4.78-11.374-20.518-8.526-31.767 66.579 24.062-69.713-20.021-8.325z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHoodedAssassinIcon })
);
