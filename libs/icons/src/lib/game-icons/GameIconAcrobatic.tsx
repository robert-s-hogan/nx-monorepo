import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAcrobaticIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'acrobatic'];
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
        d="M140.488 19.31s-26.726 65.584-24.572 75.734c1.878 9.191 9.306.316 12.457 7.064 5.59 11.803 55.342 93.663 49.182 98.626-1.558 1.36-39.38-.402-67.961-5.845-52.49-9.998-94.822 2.352-77.039 42.21 26.177 58.653 133.15 154.14 97.89 183.602-40.844 34.159 19.82 117.249 79.275 40.308 10.885-14.085 29.356-73.201-1.614-69.579-37.447 4.38-14.128-30.491-14.128-30.491l23.345-29.92c12.96-1.9 134.534-21.449 134.534-21.449l-4.226-27.002-174.475 20.25s-24.16-32.453-35.964-50.687c-9.37-11.474 62.005 4.88 76.388-10.522 19.968-21.276 7.601-43.88 7.601-43.88L155.35 69.201zm114.619 43.977l-62.759 39.419 16.081 28.897 114.931-58.86zm-124.743 78.84l-46.691 31.612 48.224 10.444 17.417-12.13zm175.08 24.496l-52.166 34.37 51.969 32.462.058-21.93c51.869 12.43 140.22 48.13 126.472 191.26l23.908-73.889 27.884 33.386c-5.502-166.903-150.537-170.593-178.19-171.609zm-74.376 175.953l-19.91 25.873 110.89 14.697s18.638-17.84 15.035-18.976c-27.712-8.623-79.886-16.97-106.015-21.594z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAcrobaticIcon })
);
