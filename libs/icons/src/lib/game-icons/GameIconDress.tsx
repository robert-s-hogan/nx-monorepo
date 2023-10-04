import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDressIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dress'];
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
        d="M342.842 462.946c-2.029 31.63-171.708 29.834-173.863 0-6.223-162.824 18.646-224.226 26.506-280.24 1.902-13.533-14.843-37.589-19.016-54.323-8.917-35.36 3.856-66.262-8.917-95.42L185.977 26C196.373 66.568 223.8 95.547 256 95.547c32.201 0 59.627-28.979 70.023-69.547l18.425 6.962c-12.773 29.159 0 60.06-8.917 95.42-4.226 16.735-20.96 40.79-19.016 54.324 7.68 56.025 32.55 117.427 26.327 280.24z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDressIcon })
);
