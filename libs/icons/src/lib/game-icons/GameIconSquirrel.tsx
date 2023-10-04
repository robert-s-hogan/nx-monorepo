import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSquirrelIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'squirrel'];
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
        d="M206.135 23.568c-61.993.106-133.212 38.319-173.762 85.328 0 0 94.532-8.388 109.732 35.477 24.55 70.846-103.768 62.832-105.619 173.623-1.394 83.471 89.36 169.758 176.1 169.812 4.214 1.405 181.953 0 181.953 0 19.783-.28 20.606-22.551-48.812-36.637 145.592-147.853-86.742-159.073-85.456-45.779-17.956-18.803.577-99.816 97.692-95.832 32.91 23.48 51.817 27.373 88.56 19.284 6.982-1.537 12.05-25.665-5.462-27.064l-31.78-2.54c-28.106-25.677-34.818-36.477-6.67-57.463 68.87 18.058 77.047 12.076 77.016-13.33-.03-24.855-9.527-90.633-65.832-93.815-7.701-10.311 9.79-42.042-3.953-42.957-19.014-1.266-50.482 28.417-46.266 43.787-18.335 7.755-38.728 31.156-59.15 59.614-69.316 25.43-119.49 142.639-120.15 170.632-.579-182.435 153.242-180.594 140.216-244.77-14.07-69.324-66.992-97.458-118.357-97.37zM432.807 169.97c7.164 0 12.972 5.808 12.972 12.973 0 7.164-5.808 12.972-12.972 12.972-7.165 0-12.973-5.808-12.973-12.972 0-7.165 5.808-12.973 12.973-12.973z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSquirrelIcon })
);
