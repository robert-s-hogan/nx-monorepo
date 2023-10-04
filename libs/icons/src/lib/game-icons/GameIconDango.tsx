import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDangoIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dango'];
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
        d="M474.2 37.8c-21.6-21.6-56.2-21.6-77.8 0-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.6-21.6 21.6-56.2 0-77.8zm-90.5 90.5a54.984 54.984 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.5-21.6 21.5-56.2 0-77.8zm-90.5 90.5a54.984 54.984 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.5-21.6 21.5-56.2 0-77.8zm-96.5 83.7L21.62 477.6l12.73 12.8L209.5 315.3c-2.5-1.9-4.7-3.8-6.8-6-2.2-2.1-4.1-4.3-6-6.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDangoIcon })
);
