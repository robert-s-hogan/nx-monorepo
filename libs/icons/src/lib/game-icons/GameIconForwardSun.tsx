import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconForwardSunIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'forward-sun'];
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
        d="M71.683 379.582c-68.196-68.225-68.196-178.94 0-247.16 68.225-68.202 178.95-68.202 247.174 0 20.782 20.798 35.22 45.538 43.34 71.797h41.432v-22.185c0-10.53 6.103-13.057 13.58-5.645l68.635 67.962c7.492 7.412 7.492 19.453 0 26.865l-68.64 67.962c-7.494 7.404-13.576 4.87-13.576-5.675v-22.148h-42.573c-8.303 24.923-22.375 48.378-42.2 68.225-68.225 68.196-178.95 68.196-247.174 0zm137.443 5.77v-45.647h-27.128v45.646h27.128zm-94.513-27.917l32.27-32.29-19.177-19.17-32.276 32.29 19.183 19.17zm161.89 0l19.17-19.183-32.277-32.276-19.168 19.168 32.276 32.29zM241.41 302.28c25.47-25.44 25.47-66.77 0-92.22-25.442-25.448-66.773-25.448-92.22 0-25.45 25.45-25.45 66.78 0 92.22 25.447 25.464 66.778 25.464 92.22 0zm-128.243-31.406V243.76h-45.64v27.114h45.64zm210.4 0V243.76h-45.64v27.114h45.64zm-195.86-62.215l19.16-19.17-32.27-32.29-19.167 19.168 32.276 32.29zm135.69 0l32.275-32.3-19.176-19.168-32.283 32.284 19.183 19.183zm-54.293-33.738v-45.646H181.99v45.646h27.114z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconForwardSunIcon })
);
