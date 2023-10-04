import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSelfLoveIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'self-love'];
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
        d="M278.574 20.672l-28.246 43.463c-36.452-29.484-87.944-38.624-127.96-30.428-54.457 11.15-100.166 60.347-97.895 131.46 2.394 74.955 54.71 129.71 104.89 174.823 25.09 22.554 50.84 43.086 69.928 61.535 37.685 34.062 55.942 92.366 55.942 92.366s24.534-59.502 55.942-89.572c19.692-18.7 45.676-39.61 71.324-62.93 51.298-46.644 104.404-104.034 102.094-177.618 0-122.308-121.2-121.013-167.883-78.495 19.323-10.226 40.12-12.397 58.798-8.214 34.297 7.683 62.693 35.935 64.332 88.108 1.562 49.92-39.09 98.088-88.11 142.654-24.508 22.28-49.752 42.445-71.324 62.93-11.456 10.884-16.74 20.514-25.174 31.795-8.437-11.983-13.663-22.066-25.173-33.192C174.715 306.4 86.784 238.475 83.27 163.77c-.72-62.22 72.103-78.604 111.246-51.04l-45.924 25.258c67.393 11.144 124.746 37.36 185.597 75.588L278.573 20.672z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSelfLoveIcon })
);
