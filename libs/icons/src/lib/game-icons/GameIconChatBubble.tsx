import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChatBubbleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chat-bubble'];
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
        d="M229.7 22.66A155.2 235.6 80.24 0 0 23.81 215.6 155.2 235.6 80.24 0 0 236.7 333.4c23.8 55.6-17.1 109.3-83.6 161.1 86.2-28.3 176.2-94.4 179.7-178.7a155.2 235.6 80.24 0 0 155.4-180.1A155.2 235.6 80.24 0 0 229.7 22.66z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChatBubbleIcon })
);
