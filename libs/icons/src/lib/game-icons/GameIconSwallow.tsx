import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwallowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'swallow'];
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
        d="M96.18 22.49C264.6 98.36 403.1 214.8 40.11 270.5 153 268 191.6 291.1 64.12 382.6c230.18-128 331.68-189 318.98 106.9 30.5-54.4 114.6-241 36.4-268.3 6.2-7.4 15.5-19.4 22.1-31.9 13.1-5.7 22.6-13.6 30.3-23.7-8.7-2-16-2.5-22.8-2.3-.2-2.8-.8-5.5-2.1-7.9-8.7-16.5-48.1-13.7-62.4-12.1 4.7-81-226.8-117.09-288.42-120.81z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwallowIcon })
);
