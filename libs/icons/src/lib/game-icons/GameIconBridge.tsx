import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBridgeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bridge'];
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
        d="M255.063 18.25L209.97 140c-49.033 13.39-90.27 48.118-114.876 94.594h-56.25v93.125h112.5c3.17-59.343 48.313-106.44 103.72-106.44 55.404 0 100.547 47.1 103.717 106.44h112.5v-93.126h-56.25c-24.6-46.47-65.85-81.2-114.874-94.594L255.063 18.25zM38.843 344.313v150.25H151.47v-150.25H38.843zm319.813 0v150.25H471.28v-150.25H358.657z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBridgeIcon })
);
