import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoomerangIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'boomerang'];
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
        d="M444.824 74.726C413.17 41.73 286.208 42.686 184.298 60.023l6.463 70.695c59.96-4.478 124.03-3.225 160.113 33.527 34.967 37.816 33.125 101.87 25.757 161.544l70.3 9.868c22.24-100.955 29.322-227.723-2.106-260.932zM164.077 63.752c-5.497 1.092-10.92 2.236-16.186 3.42l6.106 66.803c5.36-.526 10.806-1.05 16.332-1.56l-6.25-68.663zM442.23 355.675l-68.283-9.56c-.776 5.496-1.562 10.91-2.346 16.24l66.43 9.322c1.44-5.204 2.843-10.564 4.2-16.002zM127.81 72.07c-48.305 12.787-81.697 29.542-79.757 47.244 2.445 22.298 38.3 21.037 85.574 16.623L127.81 72.07zM432.17 391.5l-63.512-8.896c-6.69 47.005-9.682 82.76 12.472 86.277 17.588 2.794 35.935-29.75 51.04-77.38z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoomerangIcon })
);
