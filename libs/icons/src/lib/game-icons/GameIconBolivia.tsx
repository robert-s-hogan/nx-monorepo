import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoliviaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bolivia'];
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
        d="M43.896 68.829c29.684-4.985 63.931-12.904 148.312-53.051l32.89 102.214L369.21 161.28l7.59 96.475 61.805 3.512 29.498 72.34-25.284 58.996c-32.53-13.45-59.839-33.256-121.503-11.238-16.164 19.127-23.681 57.278-33.712 89.899-76.82-14.398-136.704-9.87-168.56 25.986L50.92 293.575c10.326-68.28 10.417-141.922-7.023-224.746z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoliviaIcon })
);
