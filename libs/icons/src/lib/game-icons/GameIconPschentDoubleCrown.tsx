import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPschentDoubleCrownIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pschent-double-crown'];
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
        d="M146.69 19.912c-6.093-.07-12.672 2.355-19.487 8.918-13.955 13.438-11.8 30.596.322 50.625 8.927 14.75 21.834 28.183 36.313 53.19 7.627 13.173 13.197 28.708 17.406 45.058 40.118 44.244 104.293 83.05 184.918 59.488-50.805-59.662-115.66-97.425-141.174-121.254-18.14-21.632-37.846-65.984-45.31-73.985-5.025-5.385-17.418-21.86-32.99-22.038zm267.005 7.424c-13.682-.276-24.35 5.06-30.693 12.77-8.46 10.28-10.398 22.213-8.68 31.43 2.174 11.658 10.476 20.358 19.948 25.364 9.47 5.007 21.828 6.84 31.277-.693 7.04-5.613 11.01-13.694 10.46-21.77-.54-7.898-5.75-15.27-13.443-18.845l-.15-.1c-7.648-4.752-16.94-3.626-20.758 2.516-3.816 6.14-.71 14.972 6.938 19.724 2.313 1.438 4.88 2.386 7.463 2.76-.473.535-1.03 1.082-1.73 1.64-1.77 1.412-6.29 1.684-11.645-1.146-5.355-2.83-9.825-8.245-10.664-12.75-.46-2.458.612-11.5 4.884-16.693 4.273-5.193 10.58-9.11 26.557-4.613 10.997 3.095 28.715 23.77 24.06 58.166-6.794 50.195-33.538 86.053-65.745 119.904 5.29 5.565 5.373 5.397 15.08 15.592 31.685-34.023 61.314-79.974 68.502-133.082 5.57-41.144-13.483-71.284-37.023-77.908-5.182-1.46-10.078-2.174-14.64-2.266zM65.332 35.074L45.666 45.61c48.202 163.613 119.8 312.83 216.695 446.478l38.253-37.018c-14.354-18.047-34.924-49.103-20.992-63.082 13.933-13.978 35.72-2.677 48.015 24.823l77.625-48.83c-10.245-36.823-15.168-73.81-18.133-113.94-85.243 26.127-201.94 29.903-321.795-218.966z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPschentDoubleCrownIcon })
);
