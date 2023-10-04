import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRuneStoneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'rune-stone'];
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
        d="M153.568 20.424L109.13 70.79l63.696 291.11-18.746 1.758L92.266 81.143 36.588 137.73 110.28 427.7l41.2-47.26 13.286 13.2-43.715 50.147L322.1 491.56l53.714-49.52-192.472-50.067 5.084-17.99 199.982 52.023 103.87-195.3-68.82-127.98-269.888-82.302zm81.912 51.892c80.62.774 168.87 79.368 155.422 164.98-28.148-67.998-92.725-132.962-165.6-115.685-63.013 14.94-5.186 80.4 65.82 97.693C369.54 238.4 459.874 302.575 400.1 365.79c-55.167 58.34-159.148 2.03-150.717-67.73 17.855 32.638 81.77 85.592 120.695 43.436 54.56-59.084-77.733-93.542-122.27-112.883-45.846-19.903-138.904-86.006-81.083-133.1 20.11-16.38 44.074-23.433 68.753-23.197zm21.893 61.647c7.13.043 15.174.844 23.918 2.453-25.35 11.378-30.295 31.156-25.52 54.936-48.725-35.784-36.897-57.624 1.603-57.39zm140.693 21.39c38.708 17.26 53.486 66.86 8.854 96.036 6.68-32.38 6.314-64.494-8.854-96.038zM246.77 246.485c5.027.003 10.616 1.487 15.886 4.53 12.047 6.955 17.874 19.418 13.014 27.836-4.86 8.417-18.567 9.603-30.613 2.648-12.047-6.955-17.872-19.418-13.012-27.836 2.734-4.735 8.265-7.18 14.726-7.178z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRuneStoneIcon })
);
