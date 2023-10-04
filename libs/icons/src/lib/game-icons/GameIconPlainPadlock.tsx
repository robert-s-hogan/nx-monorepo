import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPlainPadlockIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'plain-padlock'];
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
        d="M256 18.15c-81.1 0-146.6 65.51-146.6 146.45v72.3H159v-69.1c0-53.7 43.4-97.24 97-97.24 53.5 0 97 44.84 97 97.24v69.1h49.6v-72.3c0-78.94-65.7-146.45-146.6-146.45zM86.9 255.6C72.3 278.4 64 304.7 64 332.4c0 88.3 85 161.5 192 161.5s192-73.2 192-161.5c0-27.7-8.3-54-22.9-76.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPlainPadlockIcon })
);
