import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconToolboxIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'toolbox'];
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
        d="M94.09 57L33 209.7V327h174V217h-87c-23.75 0-41-23-41-49s17.25-49 41-49h50.7l-24.8-62zm272.01 0L305 209.7V489h174V209.7L417.9 57zm25.9 62c23.8 0 41 23 41 49s-17.2 49-41 49-41-23-41-49 17.2-49 41-49zm-272 18c-11.6 0-23 12.8-23 31s11.4 31 23 31h169.9l24.8-62zm272 0c-11.6 0-23 12.8-23 31s11.4 31 23 31 23-12.8 23-31-11.4-31-23-31zM33 345v144h254V345z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconToolboxIcon })
);
