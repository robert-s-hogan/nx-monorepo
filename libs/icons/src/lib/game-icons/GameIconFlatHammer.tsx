import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFlatHammerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'flat-hammer'];
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
        d="M132.813 27.625l29.593 134.125c4.547 3.588 9.68 4.188 18.063 1.97l5.186-1.376 3.813 3.812 84.218 84.188 3.78 3.78-1.343 5.19c-2.42 9.36-1.483 15.047 3.375 19.905l13.53 13.53 97.533-97.563-13.532-13.53c-3.538-3.54-9.39-4.415-19.655-1.438l-5.313 1.53-3.906-3.906-86.187-86.188-1.626-3.28-1.094-3.314V64.376c-.013-.02-.018-.044-.03-.063L132.81 27.626zM310.592 85.5l-14.156 14.188 43.782 43.78 14.186-14.155L310.594 85.5zm120.25 95.844l-159.968 159.97 37.063 37.123 160-160-37.094-37.093zM196.5 199.594l-175 175v87.594l218.813-218.782-43.813-43.812z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFlatHammerIcon })
);
