import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLifeBarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'life-bar'];
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
        d="M159.4 26.23c-51.4.6-79.6 56.3-79.3 86.97 1.5 47.3 34.2 79.4 74.8 114.8 35.4 30.8 76.1 63.2 100.9 110 .1-.1.1-.2.2-.3.1.1.1.2.2.3 24.8-46.8 65.5-79.2 100.9-110 40.6-35.4 73.3-67.5 74.8-114.8.3-30.67-27.9-86.37-79.3-86.97-38-.5-82.6 25.7-96.6 67.7-14-42-58.6-68.2-96.6-67.7zM23 375v114h466V375H23zm18 18h430v78H334v-60H41v-18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLifeBarIcon })
);
