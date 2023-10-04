import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStripedSunIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'striped-sun'];
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
        d="M256 32a224 224 0 0 0-161.393 69.035h323.045A224 224 0 0 0 256 32zM79.148 118.965a224 224 0 0 0-16.976 25.16H449.74a224 224 0 0 0-16.699-25.16H79.148zm-27.222 45.16A224 224 0 0 0 43.3 186.25h425.271a224 224 0 0 0-8.586-22.125H51.926zM36.783 210.25a224 224 0 0 0-3.02 19.125h444.368a224 224 0 0 0-3.113-19.125H36.783zm-4.752 45.125A224 224 0 0 0 32 256a224 224 0 0 0 .64 16.5h446.534A224 224 0 0 0 480 256a224 224 0 0 0-.021-.625H32.03zm4.67 45.125a224 224 0 0 0 3.395 15.125h431.578a224 224 0 0 0 3.861-15.125H36.701zm14.307 45.125a224 224 0 0 0 6.017 13.125H454.82a224 224 0 0 0 6.342-13.125H51.008zm26.316 45.125a224 224 0 0 0 9.04 11.125H425.86a224 224 0 0 0 8.727-11.125H77.324zm45.62 45.125A224 224 0 0 0 136.247 445h239.89a224 224 0 0 0 12.936-9.125h-266.13z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStripedSunIcon })
);
