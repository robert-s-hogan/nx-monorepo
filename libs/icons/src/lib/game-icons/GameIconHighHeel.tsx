import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHighHeelIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'high-heel'];
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
        d="M95.605 53.618C59.398 91.634-.277 129.436 23.022 165.38c29.725 42.452 55.624 70.193 100.27 95.33 33.935 20.864 52.875 61.208 67.35 93.078 8.437 19.378 14.978 35.68 22.847 47.905 3.68 5.72 16.17 10.824 33.27 14.64 19.66 4.387 45.662 6.826 73.856 8.027 55.43 2.362 119.31.07 163.98.313 10.655-18.24 6.73-26.878-2.402-30.22-46.818-17.135-97.9-23.76-133.024-68.236-17.576 7.758-51.442 6.62-72.373-5.514C183.724 266.746 153.233 145.19 95.605 53.618zM50.725 227.55c38.173 105.505 31.883 229.52 35.69 230.832h18.07c.865-9.313-7.227-140.064 9.887-182.422-25.577-14.43-45.698-30.095-63.647-48.41zM230.74 430.493c22.236 32 33.7 26.59 40.543 27.89h195.404l8.528-16.058c-43.404.074-102.725 1.926-155.352-.316-28.733-1.224-55.45-3.637-76.95-8.434-4.238-.946-8.304-1.96-12.173-3.082z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHighHeelIcon })
);
