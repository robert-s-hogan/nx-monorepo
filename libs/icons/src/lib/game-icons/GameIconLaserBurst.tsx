import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLaserBurstIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'laser-burst'];
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
        d="M291.17 299.252l109.093 150.173-21.76 15.786-109.07-150.16v72.135h-26.865V315.05l-109.07 150.16-21.74-15.795 109.07-150.163-68.6 22.287-8.307-25.555 68.602-22.287L36 216.348l8.307-25.565 176.533 57.362-42.404-58.36 21.686-15.776 42.446 58.36V46.79h26.864v185.58l42.446-58.36 21.74 15.795-42.404 58.36 176.48-57.382L476 216.337 299.467 273.71l68.602 22.286-8.308 25.554z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLaserBurstIcon })
);
