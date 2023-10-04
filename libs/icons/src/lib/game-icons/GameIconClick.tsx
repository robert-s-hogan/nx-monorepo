import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconClickIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'click'];
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
        d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconClickIcon })
);
