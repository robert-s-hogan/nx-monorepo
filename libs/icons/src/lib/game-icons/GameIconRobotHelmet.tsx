import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRobotHelmetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'robot-helmet'];
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
        d="M256 19c-13.8 0-27.9 3.02-41.5 8.48L256 79.44l41.5-51.96C283.9 22.02 269.8 19 256 19zm-59.4 16.96c-18.5 10.27-35.9 24.69-50.9 41.74-10.8 12.21-20.2 25.7-24.8 32.4l-64.8 87.1 59.1 83L95.9 348l71.6 64.2-6.9-27.3 36.1-108.2-40.7 27.1-75.98-106.3 42.28-56.3 97.4 48.7h72.7l97.4-48.7 42.3 56.3-76 106.3-40.8-27.2 1 3.2 35.2 105.1-6.9 27.3 71.5-64.2-19.4-67.8 59.2-83-64.8-87.1c-4.6-6.7-14-20.19-24.8-32.4-15-17.05-32.4-31.47-50.9-41.74L256 110.2zm15.1 256.44l-5 15h98.6l-5-15zm-11.5 34.2l-16.3 49.1h144.2l-16.4-49.1zm-17.3 68.3l12.3 49.2h121.6l12.2-49.2zm33.6 68.4L256 493l39.5-29.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRobotHelmetIcon })
);
