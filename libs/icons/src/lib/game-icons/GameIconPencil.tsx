import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPencilIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pencil'];
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
        d="M429.548 30.836c-.307-.003-.6.005-.875.024-2.212.147-3.34.653-4.576 1.89l-27.58 27.58 55.156 55.154 27.578-27.58c1.238-1.236 1.744-2.363 1.89-4.575.15-2.21-.37-5.433-1.805-9.163-2.87-7.46-9.277-16.667-17.055-24.445-7.778-7.778-16.985-14.185-24.445-17.055-3.264-1.255-6.138-1.81-8.287-1.83zm-45.758 42.22l-9.9 9.9 9.9 9.9 12.727 12.727 9.9 9.9 12.727 12.728 9.9 9.9 9.9-9.9-55.155-55.155zm-22.627 22.626L72.665 384.186l9.898 9.897 288.5-288.5-9.9-9.9zm22.627 22.63L95.29 406.808l9.9 9.902 288.5-288.5-9.9-9.9zm22.63 22.626l-288.502 288.5 9.897 9.9 288.503-288.5-9.9-9.9zM63.223 400.198l-12.12 30.306 30.393 30.394 30.305-12.12-6.61-6.612L92.46 429.44l-9.9-9.9-12.73-12.728-6.61-6.612zm-19.395 48.488l-12.993 32.478 32.478-12.992-19.486-19.485z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPencilIcon })
);
